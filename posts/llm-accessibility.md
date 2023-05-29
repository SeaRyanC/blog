---
title: How I use ChatGPT as Accessibility Software
permalink: llm-accessibility/index.html
description: It's not just for making sea shanties about register allocation
date: 2023-05-28
tags:
 - ai
 - accessibility
layout: layouts/post.njk
---

In April 2023 I crashed my bicycle and broke both my wrists.
As you can imagine, this put quite the damper on my ability to type.
Since my brain and mouth were still in working order, I figured that I could use speech-to-text to do most of my job, since as a dev manager, most of my time is spent either in meetings, or writing text related to my job

The built-in speech-to-text functionality in Windows 11 is *quite* good in terms of everyday transcription.
It's as good as the one built into my Android phone, to be sure, and for a lot of content like the performance reviews I was writing at the time, this was good enough as-is with some light copy editing.

However, for technical content, this left a lot to be desired.
A lot of clarity is gained with simple formatting, like putting programming terms in `fixed-width` font.
For talking about TypeScript in particular, there are a lot of things that are homophonic with other more common terms, such as `variants` vs `variance`.

I also didn't like how the default speech-to-text dealt with punctuation.
I write a *lot* of text every day, and my writing style is something that I feel is part of my identity.
Seeing comments with my name attached to them, not written in my writing style, was surprisingly upsetting.
It felt like a doppleganger wrote my content.

What I needed was for someone, or some thing, with the extra context of *what I was doing* to in order to reformat and copyedit my text exactly to my liking.

I fired up ChatGPT and gave it the scenario. After repeated tweaking, I came up with this:

> Scenario: I am a maintainer on the TypeScript GitHub repo.
>
> I have dictated a message so its punctuation, formatting, and use of homophones may be off. Please correct the text for typographical errors and apply markdown formatting to relevant terms, such as names of variables, methods functions, or types.
>
> Do not add any extra content, preamble, or sign off, but do make corrections in cases where there is a homophone of a more common programming term in use, such as "to Jason" meaning "toJSON" in the context of JavaScript programming, or TypeScript related terms.
>
> Also apply in-situ corrections such as "capital t type" to "Type". Always replace "comma" with a comma character, "colon" with an actual colon, "dash" with an actual dash, and so on.
>
> Add commas liberally if it makes the text flow better, as these are unlikely to be specified in the transcription. Be sure to correct other mistakes like your/you're errors. The message follows below the line. Reply only with the corrected message.

The results of this are *incredibly* good.

Here's an example input produced from dictation. Errors or subpar results are __annotated__

> This doesn't seem like a great __trade off__ in general. __downcasting__ to __stringer number__ is useful because those types are known to have particular characteristics, but downcasting to __object__ just leaves you worse off.

ChatGPT transformed this to exactly what I wanted:

> This doesn't seem like a great trade-off in general. Downcasting to `string` or `number` is useful because those types are known to have particular characteristics, but downcasting to `object` just leaves you worse off than you were before in the vast majority of cases without providing any additional type safety.

I wrote a C# program to grab the active text from the current textbox using the Windows Accessibility API, pass the prewritten prompt + that text into the `gpt-3.5-turbo` API, and push the result back into the textbox.
Then I wired up that invocation to a button on my Stream Deck

!["copyedit" caption on a Stream Deck button with a debugger icon](/img/stream-deck-gpt.jpg)

The cost to do this is effectively free.
At a cost of $0.002 / 1,000 tokens, and a typical cost to reformat one comment of about 200 tokens, $1 can copy-edit 2,500 comments.
