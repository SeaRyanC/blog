---
title: Accounting Error is not Cash Flow
permalink: posts/accounting-error-is-not-cash-flow/index.html
description: Articles describing how little money is left after a family "spends" it are frequently misleading
date: 2021-01-27
tags:
 - random
layout: layouts/post.njk
eleventyExcludeFromCollections: true
---

When the topic of raising taxes on high-earning individuals comes up, a frequent objection is that "$400,000 isn't even that much in a lot of places", or "$500,000 doesn't go that far for a family of four".

This claim is almost always backed up by what I would consider one of the worst financial charts on the entire internet, courtesy of "Financial Samurai":

![A chart showing a list of expense which will be detailed later](https://i2.wp.com/financialsamurai.com/wp-content/uploads/2020/10/400K-budget.png?fit=1456,9999)

The chart here claims to compute an *annual* "cash flow" of $34, or $3 per month.

$3. Not even enough to buy a latte. You would think, from reading this chart, that even an extremely modest tax raise would send this family into ruin. They're basically living paycheck-to-paycheck, after all, with only $3 left to their names at the end of the month.

Commentors on the internet often dissect this chart line-by-line, pointing out that the family could spend less on vacations, or move to a smaller home, or eat more cheaply, or attend public schools, or are at a lifetime highpoint of mandatory expenditures due to having two small children. These comments are not wrong, but they're missing the point.

The reality is that this chart is incredibly disingenuous because it confuses *expenditures* and *savings*, intentionally, to make it look like this family is much worse off than they actually are. The bottom-line number of $34 in annual "cash flow" is nothing short of a lie.

What this chart is demonstrating is *accounting error*: The person making the chart failed to make the columns add up to $0 as they should have, and uses that failure to advance a false narrative about the state of this family's finances.

Let's talk about why, and how to fix it. But first, a story.

# Accounting Error vs Cash Flow: A Lemonade Stand Fable

Your niece, Sandy, has set up a lemonade stand. It seems to be doing great. At the end of the week, you ask how business is going.

"I'm barely surviving!" she says.

"How so? I saw a long line around the block when I stopped by" you reply.

Sandy, furious, pulls a single dollar bill out of her pocket. "I talked to my accountant and here's where I stand. I sold 100 cups of lemonade for $1 each. The lemons and sugar cost me $50, and I paid another $10 in taxes. I put $20 into my piggy bank, spent $10 at the arcade, stuffed $5 under my mattress, and deposited $4 into my savings account. At the end of the week, I only have $1 of cash flow after expenses to pay for miscellaneous! One miserable buck!" she complains as she waves the dollar around in her hand. "A single dollar more in taxes and I'm in the red."

"Hold on, Sandy." you say. "Your revenue was $100 on a cost of $50, for a profit of $50. You lost $10 to taxes, leading to $40 in net profit. You spent $10 of that at the arcade, and *saved* the other $30: $20 in your piggy bank, $5 under your mattress, $4 in your savings account, and the $1 which you're holding right now. All your money is accounted for and you're doing very well. Great job!"

Sandy seems confused. "Why did my accountant say I had one dollar leftover, then? I feel like I'm barely scraping by here."

"Your accountant didn't see that dollar bill in your pocket, so he couldn't make the numbers add up to $0 like they should have. He was talking about *accounting error*. That's what it means to have money left over at the end of the accounting process."

Sandy seems even angrier. "The numbers *have* to add up to $0? I'm always going to be broke? That's not fair! I should have way more than $1 of cash flow here based on how much lemonade I'm selling."

"Your cash flow is $40, because that's how much money you had after subtracting your expenses from your income. The $1 is the accounting error, not the cash flow. You need to find an accountant who knows what they're talking about. And if your taxes go up by $5, you can choose to spend less at the arcade, or you can save less. It's up to you, but your business will still be turning a tidy profit. I wouldn't worry about it."

"Wow", says Sandy, "I guess that's what I get for hiring a cut-rate accountant. Thanks for clearing it up for me. It's sure good to know my business is doing 40 times better than I thought!"

## Discussion

Without going deep on accounting to discuss things like depreciation, appreciation, capital gains, etc., for a family earning, spending, and saving wages, we can recognize that there is a fundamental equation in play:

> `income - expenses = savings`

Every dollar you earn is either *spent* (which includes mandatory expenditures like taxes) or *saved*.

What Sandy (and the Financial Samurai) attempted to do was rewrite the equation:

> `income - expenses - savings = "cash flow"`

However, the correct formula here, as any Algebra 1 student could rearrange, is:

> `income - expenses - savings = $0`

If you don't get $0 when computing income minus expenses and savings, you have *accounting error*: Somewhere, you didn't find a source of savings or source of expenditures to make the numbers balance out. Indeed, we have to fix the equation to account for this possibility:

> `income - expenses - savings = accounting error`

What we see in "Surviving off $400,000" is a monthly *accounting error* of $3. $3 of accounting error on a gross income of $33,333 is actually great in terms of accuracy; it means whoever prepared this chart painstakingly accounting for the family's savings and expenses, but missed by 0.01%. Perhaps they mistyped the mortgage as $6,746 when it was actually $6,749, for example. Or maybe they engineered the chart to show a tiny accounting error, misleadingly labelled it "Cash Flow", and used this numerical sleight of hand to push a preconceived ideological narrative. We'll never know.

# Financial Samurai's Family

Let's fix Financial Samurai's chart.

There are three primary sources of error that confuse savings with expenditures: The 401(k), 529 plan, and the principal component of the mortgage. Like many Americans, the last of these accounts for a large majority of their annual increase in net worth.

For the 401(k), this is unambiguously savings, albeit pre-tax dollars that will be worth less upon their eventual withdrawal due to paying taxes at that time. For a fair accounting, I adjusted this to assume a 24% average tax rate paid upon withdrawal, booking the future tax expenditure now so that the savings numbers are in uniformly post-tax dollars.

The 529 plan is, of course, also just savings. The full $18,000 is accounted for as savings.

To account for the principal reduction in the mortgage, which is also a form of savings, I used an average rate of 65% principal, 35% interest, which is representative of what will happen over the entire lifetime of a 30-year 3% loan. This results in booking $52,619 of savings.

There's also the matter of the car payment. This is definitely a form of savings, since they're paying off a loan (presumably at a very low interest rate, since these are easy to come by for well-off buyers), but since there's no line item here for car depreciation, I think this just cancels itself out.

I also had to normalize the top half of the chart to account for some hand-wavey math around tax credits that isn't really explained. The fixed version looks like this:

As we can see, the family is *saving* $104,459 per year with an accounting error of $34.

Adding the "cash in your pocket" line item, in honor of Sandy, we get an annual savings of $104,493, and an accounting error of $0.

## Discussion

Financial Samurai's hypothetical family is increasing their net worth by approximately $104,000/year. At time of writing, the median annual income of a full-time worker in the United States was exactly half that: $52,000/year. In other words, this family is saving money at the same rate two median workers would if they had *zero* expenses (no taxes, no rent, no food, no *anything*). In 18 months, this family accumulates more money than the median American household's *entire net worth*.

Again, I think there are legitimate debates to be had about what the magical word "rich" means in this country, and whether Financial Samurai's hypothetical family could cut back a bit, but two things are beyond debate.

First: this family is saving money at a rate that is impossible for the median household, while simultaneously living an objectively enviable lifestyle. The median American household spends a third as much on food, half as much on entertainment, a third as much on personal care, and a bit more than half as much on clothing. Cost of living figures in to these numbers a little, but not a lot - Netflix, a gallon of milk, and a tube of lipstick are all basically the same price no matter where you live.

Second: the $34 number at the bottom of the chart is *pure fiction*. It does not correspond to any actual fact about this family's finances. As much as we might laugh at Sandy's mistake of her missing dollar compared to the $40 of profit her business actually turned, the Financial Samurai distortion is worse: it understates this family's annual savings by a factor of *3,000*. It does not belong here in any form, and its inclusion as "cash flow" is a hoax.

Sadly, many major news outlets, including those who should have the financial savvy to recognize this total bamboozle of a chart, have run with this or a similar version of it when talking about the finances of higher-earning households. We can and should do better.

# Objections

### Saving for Future Expenses is an Expense

You might point to the line item for 529 and say, since this money will eventually be spent on college tuition, it isn't really savings at all, but rather an expenditure that we're booking now instead of later. The same for 401(k) contributions -- these dollars will likely be spent in retirement, thus are future expenditures.

Much like the original chart misappropriates what "cash flow" is, this objection misappropriates what "savings" means. The final fate of every saved dollar is either to be spent on something, or passed on to your heirs when you die. We could certainly categorize the family's savings into earmarked savings and nonearmarked savings. Under this metric, the house payment becomes $52,000 of eventually-inherited wealth, and the remainder is earmarked savings that will be spent down in retirement. With 20 years of such savings, they'll be passing down an estate worth over *a million dollars* to their heirs. The median inheritance in the United States is $69,000, or less than a year and a half of non-earmarked savings for our "cash-strapped" family. Not too shabby.

### 
