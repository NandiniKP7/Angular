# Day 6 Exercises

## Today's project

A **topic card** whose look and behavior come from data in its class. It shows:

```
[book icon]  Components
Locked topic
[Start]  (disabled)
```

**Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

Open a hint only after 10 minutes of trying.

**Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

## Challenge 1: Title Tooltip
**Goal:** Bind a title.
**Requirements:** Make the card's `<h3>` show the tooltip text `Topic: Components` using a property binding. Don't hard-code the text in the HTML.
**Expected result:** The tooltip shows when you hover over the heading.

<details><summary>Hint 1</summary>Bind the `title` attribute to a property you add to the class.</details>
<details><summary>Hint 2</summary>`[title]="tooltip"`</details>

## Challenge 2: Unlocked Card
**Goal:** Change the behavior with data.
**Requirements:** Set `isLocked` to `false`. The button should be enabled and the paragraph should say `Ready to start` instead of `Locked topic`.
**Expected result:** The enabled button and the new text, both driven by `isLocked`.

<details><summary>Hint 1</summary>You can compute text in a method, like `getStatus()`, and show it with `{{ }}`.</details>
<details><summary>Hint 2</summary>`getStatus(): string { if (this.isLocked) { return 'Locked topic'; } return 'Ready to start'; }`</details>

## Challenge 3: Input Placeholder (stretch)
**Goal:** Bind another property.
**Requirements:** Add an `<input>` to the card. Set its placeholder from a class property `placeholderText = 'Add a note...'`.
**Expected result:** The grayed text appears in the input.

<details><summary>Hint 1</summary>Bind the `placeholder` attribute to a property, with square brackets.</details>
<details><summary>Hint 2</summary>`[placeholder]="placeholderText"`</details>

## Challenge 4 (mini boss, stretch): Two Different Cards
**Goal:** Reuse a component, change its data.
**Requirements:** Show two cards on the dashboard: one `Components` (locked) and one `Property Binding` (unlocked). They must look and behave differently.
**Expected result:** Two cards, one disabled, one enabled.

<details><summary>Hint 1</summary>Both cards use the same class, so they have the same data. Think: how could the two instances get different values? (We learn the proper way, inputs, on Day 13 of the guide.) For today, create a second component, `topic-card-2`, by copying the files.</details>

## When you finish
Paste your card files here. I'll review them.
