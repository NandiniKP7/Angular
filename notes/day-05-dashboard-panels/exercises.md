# Day 5 Exercises

## Today's project

Fill the main area with a **dashboard** made of several components placed inside each other. It looks like this:

```
+--- Dashboard ----------------------+
| [Progress panel] [Today panel]      |
| [Streak panel]                      |
+-------------------------------------+
```

**Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

Open a hint only after 10 minutes of trying.

**Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

## Challenge 1: Fourth Panel
**Goal:** Add a component to the parent.
**Requirements:** Add a `focus-panel` with the heading `Focus` and the text `TypeScript loops`. Show it in the dashboard.
**Expected result:** Four panels.

<details><summary>Hint 1</summary>Generate, write the template, import into `dashboard.ts`, add the tag to `dashboard.html`.</details>

## Challenge 2: Panel With Data
**Goal:** Use Day 3 inside a panel.
**Requirements:** In `progress-panel.ts`, add `done: number = 3` and `total: number = 44`. Show `3 of 44 topics finished` using `{{ }}`.
**Expected result:** The same text as before, now from data.

<details><summary>Hint 1</summary>Properties go in the panel's own class.</details>

## Challenge 3: Panels Inside a Panel (stretch)
**Goal:** Nest more deeply.
**Requirements:** Create a `badge` component that shows a small label `NEW`. Use it inside the `streak-panel` template next to the heading.
**Expected result:** `Streak NEW` appears in the streak panel.

<details><summary>Hint 1</summary>The streak panel is the parent of the badge, so it imports it.</details>

## Challenge 4 (mini boss, stretch): Make the Layout Yours
**Goal:** Build from a description.
**Requirements:** In the dashboard, make the first panel wider than the others (it takes the full row on top), and the other three sit side by side underneath.
**Expected result:** One wide panel on top, three below.

<details><summary>Hint 1</summary>Use a different layout for the first one: wrap it in its own `div`.</details>
<details><summary>Hint 2</summary>Two containers: one with a single panel, one with `display: grid` for the other three.</details>

## When you finish
Paste your dashboard files here. I'll review them.
