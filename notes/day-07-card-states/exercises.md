# Day 7 Exercises

## Today's project

Make the topic card change its look based on its status: done, in progress, or locked. It also shows a progress bar. It looks like this:

```
Components        [Done]      green card, full bar
Property Binding  [In progress] blue card, half bar
Routing           [Locked]    gray card, empty bar
```

**Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

Open a hint only after 10 minutes of trying.

**Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

## Challenge 1: A Fourth State
**Goal:** Add a class toggle.
**Requirements:** Add a state `'review'` with a yellow look. Set `status = 'review'` to see it.
**Expected result:** A yellow card.

<details><summary>Hint 1</summary>One more `[class.review]` and one more CSS rule.</details>

## Challenge 2: Bar Color
**Goal:** Style from data.
**Requirements:** Make the bar fill green when `progress` is 100, and teal otherwise.
**Expected result:** The bar is green at 100.

<details><summary>Hint 1</summary>Bind a style property and choose the colour with the `? :` shortcut `if/else`.</details>
<details><summary>Hint 2</summary>`[style.background]="progress === 100 ? 'green' : '#14606a'"`</details>

## Challenge 3: Text Size (stretch)
**Goal:** Practice units.
**Requirements:** Add `titleSize: number = 22` and bind the heading's `font-size` to it in pixels.
**Expected result:** The title changes size when you change the number.

<details><summary>Hint 1</summary>Style bindings can take a unit in the binding name.</details>
<details><summary>Hint 2</summary>`[style.font-size.px]="titleSize"`</details>

## Challenge 4 (mini boss, stretch): Status From Progress
**Goal:** Derive one value from another.
**Requirements:** Remove `status` as stored data. Add a method `getStatus(): string` that returns `'done'` when `progress` is 100, `'locked'` when it is 0, and `'in-progress'` otherwise. Use it in the class bindings.
**Expected result:** Changing only `progress` changes the card's color.

<details><summary>Hint 1</summary>Put a comparison with your status method inside the class binding.</details>
<details><summary>Hint 2</summary>`[class.done]="getStatus() === 'done'"`</details>
<details><summary>Hint 3</summary>The method is an `if / else if / else` like TypeScript Day 3.</details>

## When you finish
Paste your card files here. I'll review them.
