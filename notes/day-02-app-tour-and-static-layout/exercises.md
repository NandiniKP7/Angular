# Day 2 Exercises

## Today's project

A tour of the project's files, then a static page layout for LearnBuddy: a header on top, a sidebar on the left, and a main area. It looks like this:

```
+----------------------------------------+
|  LearnBuddy                            |  <- header
+----------+-----------------------------+
| Sidebar  |  Main area                  |
| Dashboard|  Welcome to LearnBuddy      |
| Topics   |                             |
| Diary    |                             |
+----------+-----------------------------+
```

**Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

Open a hint only after 10 minutes of trying.

## Challenge 1: Recolor
**Goal:** Practice CSS.
**Requirements:** Make the sidebar a different color and the header text bigger.
**Expected result:** You can see both changes in the browser.

<details><summary>Hint 1</summary>Change `background` in `.sidebar` and `font-size` in `.header`.</details>

## Challenge 2: More Sidebar Labels
**Goal:** Practice HTML.
**Requirements:** Add three more labels to the sidebar: `Calendar`, `Progress`, `Settings`.
**Expected result:** Six labels in the sidebar, all with the pointer cursor.

<details><summary>Hint 1</summary>Copy a `<p>` line inside `<nav>`.</details>

## Challenge 3: A Footer
**Goal:** Add a new area.
**Requirements:** Under the layout, add a footer with the text `LearnBuddy: built by <your name>`. Give it a light gray background and some padding.
**Expected result:** A footer bar at the bottom of the page content.

<details><summary>Hint 1</summary>Use a `<footer class="footer">` tag after the `.layout` div.</details>
<details><summary>Hint 2</summary>Style `.footer` in `app.css`.</details>

## Challenge 4 (mini boss): Info Cards
**Goal:** Build a small UI from a description.
**Requirements:** In the main area, under the welcome text, show three white boxes side by side. Each box has a title and a number: `Topics: 44`, `Done: 3`, `Streak: 5`. Boxes have rounded corners, padding, and a small gap between them.
**Expected result:** Three neat cards in a row.

<details><summary>Hint 1</summary>One container `div` with `display: flex` and `gap: 16px`. Three child `div`s.</details>
<details><summary>Hint 2</summary>Use `border-radius` and `padding` on each card.</details>

## When you finish
Paste your `app.html` and `app.css` here. I'll review them.
