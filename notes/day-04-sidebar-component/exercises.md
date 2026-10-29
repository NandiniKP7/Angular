exe# Day 4 Exercises

## Today's project

Move the sidebar out of the main screen into its own **component**. The page looks exactly the same, but the code is cleaner:

```
app.html  ->  <app-sidebar />  (the sidebar lives in its own files)
```

**Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

Open a hint only after 10 minutes of trying.

**Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

## Challenge 1: Footer Component
**Goal:** Create a component yourself.
**Requirements:** Generate a `footer` component with the text `LearnBuddy: built by <your name>`. Use it at the bottom of `app.html`.
**Expected result:** A footer appears.

<details><summary>Hint 1</summary>`ng generate component footer`</details>
<details><summary>Hint 2</summary>Remember the two steps: import at the top and add to `imports: [...]`.</details>

## Challenge 2: Header Component
**Goal:** Practice moving code into a component.
**Requirements:** Move the `<header>` into its own `header` component, with its CSS.
**Expected result:** The page looks the same as before.

<details><summary>Hint 1</summary>Cut the HTML and the `.header` CSS from `app`. Paste into the new component's files.</details>

## Challenge 3: Look Inside (stretch)
**Goal:** Understand the selector.
**Requirements:** In your sidebar component, change `selector: 'app-sidebar'` to `selector: 'lb-sidebar'`. Make the page work again. Then change it back.
**Expected result:** The sidebar shows with the new tag `<lb-sidebar />`.

<details><summary>Hint 1</summary>The tag in `app.html` must match the selector exactly.</details>

## Challenge 4 (mini boss, stretch): Component Data
**Goal:** Combine Day 3 and Day 4.
**Requirements:** In the sidebar component class, add a property `appName: string = 'LearnBuddy'` and show it in the sidebar's template at the top using `{{ }}`.
**Expected result:** `LearnBuddy` appears at the top of the sidebar.

<details><summary>Hint 1</summary>Each component has its own class. Properties belong to the class of the template that shows them.</details>

## When you finish
Paste your component files here. I'll review them.
