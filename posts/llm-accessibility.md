---
title: How I Use ChatGPT as an Accessibility Device
permalink: llm-accessibility/index.html
description: It's not just for generating sea shanties about register allocation. AI has the potential to vastly improve how we interact with our computing devices.
date: 2024-03-04
tags:
 - ai
 - accessibility
layout: layouts/post.njk
---


## The Crash

In April 2023 I crashed my bicycle and broke both my wrists.

![Me showing two freshly-wrapped wrists](/img/wrists.webp)

Not my finest moment.

As you can imagine, this put quite the damper on my ability to type.

Since my brain and mouth were still in working order, I figured that I could use speech-to-text to do most of my job, since as a dev manager, most of my time is spent either in meetings, or writing text related to my job.
Clicking around with a mouse on low sensitivity was fine, but large amounts of typing were off the table since I didn't have any mobility at the wrist joint.


## The Doppelganger

I started off using the built-in speech-to-text functionality in Windows 11.
It's quite good in terms of everyday transcription; as good as the one built into my Android phone, to be sure.
For a lot of content like the performance reviews I was writing at the time, this was good enough as-is with some light copy editing.

However, for technical content, this left a lot to be desired.
A lot of clarity is gained with simple formatting, like putting programming terms in `fixed-width` font.
For talking about TypeScript in particular, there are a lot of things that are homophonic with other more common terms, such as `variants` vs `variance`.

I also didn't like how the default speech-to-text dealt with punctuation.
I write a *lot* of text every day, and my writing style is something that I feel is part of my identity.
Seeing comments with my name attached to them, not written in my writing style, was surprisingly upsetting.
It felt like a doppelganger wrote my content.

I surprised at how deeply uncomfortable with text that was *objectively* fine.
The content I was getting from the dictation software wasn't wrong, confusing, or bad. It just wasn't me. It was like seeing myself in an unreversed mirror, or trying to sign my name and seeing someone else's signature with the same letters. Getting the text to be *my* text was too much work for the limited amount of mobility I had. I was upset.

## I, Cyborg

What I needed was for someone, or some thing, with the extra context of *what I was doing* to in order to reformat and copyedit my text exactly to my liking. I wanted commas where they belonged. I wanted formatting like I usually formatted. I didn't want to spent months sounding like a robotified version of myself.

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
Even better, the fact that I could continually refine the prompt to make the corrected version more closely match what I would have typed was very powerful.

Here's an example input produced from dictation. Errors or subpar results are __annotated__

> This doesn't seem like a great __trade off__ in general. __downcasting__ to __stringer number__ is useful because those types are known to have particular characteristics, but downcasting to __object__ just leaves you worse off.

ChatGPT transformed this to exactly what I wanted:

> This doesn't seem like a great trade-off in general. Downcasting to `string` or `number` is useful because those types are known to have particular characteristics, but downcasting to `object` just leaves you worse off.

This regularly makes all kinds of excellent corrections that are entirely domain-specific, such as fixing "bear identifier" to "bare identifier".

## Automation

It wasn't too hard from here to wire up a program to pass this to the ChatGPT API automatically.

!["copyedit" caption on a Stream Deck button with a debugger icon](/img/streamdeck.webp)

The cost to do this is effectively free.
At a cost of $0.002 / 1,000 tokens, and a typical cost to reformat one comment of about 200 tokens, $1 can copy-edit 2,500 comments. I had found my voice again for less than the cost of a gumball.

## Are we AGI yet?

There's a lot of AI hype, but LLMs are factually revolutionary in the scenario I found myself in. The situation before was intractable: No existing software did the job, it would be a multimillion-dollar effort to write said software, and hiring a human to do the job would be either impossible or thousands of times more expensive. The situation after is easy: in a couple afternoons of messing around, even in my limited state, I got a working solution that completely solved the problem.

For all intents and purposes, this is super-human levels of performance, because a human who can and will do this task doesn't exist. You cannot hire a copy editor who is also deeply familiar with the terminology of JavaScript type systems -- anyone with those skills has something much better to be doing with their time.

I'm excited about the future of AI as something that can improve accessibility more generally, but even now that I can type again, I expect to use this workflow more regularly because it's just *faster*.

## The Next Accessibility Frontier

I was fortunate enough to regain full use of my hands, but many people in this kind of situation won't, and as accessibility advocates will tell you, everyone is only temporarily able-bodied in the long-run. I've been thinking a lot about how there are so many tasks that people with various disabilities need help with, but for which the only solutions available right now are not cost-effective or scalable.

<!--
Here's a short list of some of the things I've been thinking about. In all cases, of course, the user's consent needs to be integrated into these experiences, and appropriate safeguards must be in place. These are just sketches of what might be possible.

### Speech Impairments

Some disabilities leave people completely unable to speak, or unable to be heard in noisy environments. A person with such a disability might have significant difficulties in situations like an airport check-in desk, where someone needs to ask you many non-yes-or-no questions, but for which you can easily have pre-determined answers. An AI assistant should have no problems responding to questions like "What is your name, date of birth, and where are you traveling to today?"

-->