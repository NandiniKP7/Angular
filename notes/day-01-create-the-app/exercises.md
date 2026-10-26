# Day 1 Exercises

## Today's project

You create your first Angular app, **LearnBuddy**, run it in the browser, and change what it shows. At the end the browser shows:

```
Welcome to LearnBuddy
Your personal learning companion
```

**Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

Open a hint only after 10 minutes of trying.

## Challenge 1: Change the Welcome
**Goal:** Edit the template.
**Requirements:** Change the heading to `Welcome to LearnBuddy, <your name>`.
**Expected result:** The browser shows your name in the heading.

<details><summary>Hint 1</summary>Edit `src/app/app.html`.</details>

## Challenge 2: Add a Subtitle and a List
**Goal:** Add HTML elements.
**Requirements:** Under the paragraph, add a second heading `Today I am learning` and a list with two items: `Angular` and `TypeScript`.
**Expected result:** A heading and a bulleted list with two items.

<details><summary>Hint 1</summary>`<h2>` is a smaller heading. `<ul>` is a list. `<li>` is one list item.</details>
<details><summary>Hint 2</summary>
<code>&lt;ul&gt;&lt;li&gt;Angular&lt;/li&gt;&lt;li&gt;TypeScript&lt;/li&gt;&lt;/ul&gt;</code>
</details>

## Challenge 3: Change the Browser Tab Title
**Goal:** Find another file.
**Requirements:** The browser tab says `Learnbuddy`. Make it say `LearnBuddy: My Learning`.
**Expected result:** The tab text changes.

<details><summary>Hint 1</summary>The tab title is in the file at the very top of the `src` folder: `src/index.html`.</details>
<details><summary>Hint 2</summary>Look for the `<title>` tag.</details>

## Challenge 4 (mini boss): Break and Fix
**Goal:** Practice reading errors.
**Requirements:** Make **three** different small mistakes in `app.html`, one at a time (for example, a misspelled closing tag). For each one, write a comment (or note) of what you saw in the browser and the terminal, then fix it.
**Expected result:** You can recover from each mistake.

<details><summary>Hint 1</summary>Ideas: unclosed tag, misspelled tag, a missing `>`. Check the terminal window where `ng serve` runs.</details>

## When you finish
Paste your `app.html` here and a short note on the errors you saw. I'll review it.
