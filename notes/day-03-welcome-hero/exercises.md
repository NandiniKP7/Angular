# Day 3 Exercises

## Today's project

Make the main area show live values from code, not fixed text. It shows:

```
Welcome back, Nandini!
Today is Sun Oct 25 2026
You have finished 3 of 44 topics (7%)
```
(The date will be today's date.)

**Build it yourself first.** Use today's `README.md` as your reference. If you are stuck for 15 minutes, open `project-walkthrough.md`.

Open a hint only after 10 minutes of trying.

**Core (about 30 minutes):** the project and Challenges 1-2. Challenges 3-4 are stretch: do them if you have time, or carry them to the next day.

## Challenge 1: Your Details
**Goal:** Show properties.
**Requirements:** Add `role: string = 'SE-2'` and `team: string = 'Your team'` to the class. Show them: `Role: SE-2, Team: ...`.
**Expected result:** One line with both values.

<details><summary>Hint 1</summary>Two `{{ }}` in one `<p>`.</details>

## Challenge 2: Streak Message
**Goal:** Show a calculated value.
**Requirements:** Add `streakDays: number = 5`. Show `You are 2 days from a 7-day streak!` where the 2 is calculated from `streakDays`.
**Expected result:** The message, with 2 coming from a calculation.

<details><summary>Hint 1</summary>Subtract the streak from the number of days in a week inside `{{ }}`.</details>
<details><summary>Hint 2</summary>`{{ 7 - streakDays }}`</details>

## Challenge 3: A Greeting Method (stretch)
**Goal:** Return text from a method.
**Requirements:** Add a method `getGreeting(): string` that returns `Good morning` if the hour is before 12 and `Good afternoon` if not. Show `Good morning, Nandini!` (or afternoon) in the heading.
**Expected result:** The greeting matches your current time.

<details><summary>Hint 1</summary>The JavaScript `Date` object can tell you the current hour, as a number from 0 to 23.</details>
<details><summary>Hint 2</summary>Use an `if` in the method, just like TypeScript Day 3.</details>
<details><summary>Hint 3</summary>`{{ getGreeting() }}, {{ userName }}!`</details>

## Challenge 4 (mini boss, stretch): Study Time Summary
**Goal:** Combine properties, calculations and a method.
**Requirements:** Add `minutesToday: number = 90`. Show `You studied 1 hour 30 minutes today` where the hours and minutes are worked out by the method `getTimeText(): string` from `minutesToday`.
**Expected result:** The sentence, correct for any number you put in `minutesToday`. Try 45, 60 and 135.

<details><summary>Hint 1</summary>Same idea as TypeScript Day 1: `Math.floor` and `%`.</details>
<details><summary>Hint 2</summary>Return a string made from the two numbers: `return hours + ' hour ' + minutes + ' minutes';`</details>

## When you finish
Paste your `app.ts` and `app.html` here. I'll review them.
