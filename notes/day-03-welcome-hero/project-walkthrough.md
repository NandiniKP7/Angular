# Day 3: Welcome Hero: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
Make the main area show live values from code, not fixed text. It shows:

```
Welcome back, Nandini!
Today is Sun Oct 25 2026
You have finished 3 of 44 topics (7%)
```
(The date will be today's date.)

## What you'll learn
- How the class (`app.ts`) shares values with the template (`app.html`)
- String interpolation with `{{ }}`
- Showing a calculated value and the result of a method

## Before you start
Keep `ng serve` running. Open `src/app/app.ts` and `src/app/app.html`.

## Build it, step by step

### Step 1: Add data to the class
Open `app.ts`. It has a class (named `App`, or `AppComponent` in older versions). Add four properties inside the class braces:
```ts
export class App {
  userName: string = 'Nandini';
  today: string = new Date().toDateString();
  lessonsDone: number = 3;
  lessonsTotal: number = 44;
}
```
**Why:** These are the same typed variables you learned in TypeScript. Inside a class they are called **properties**. (Leave any other lines already in the class alone.)

### Step 2: Show a property in the template
**In `app.html`, change the heading to:**
```html
<h1>Welcome back, {{ userName }}!</h1>
```
**You should see:** `Welcome back, Nandini!`
**Why:** `{{ ... }}` is **string interpolation**. Angular finds the property with that name in the class and puts its value into the page. Change `userName` in `app.ts`, save, and the page updates.

### Step 3: Show the date
```html
<p>Today is {{ today }}</p>
```
**You should see:** today's date.

### Step 4: Put a calculation inside `{{ }}`
```html
<p>You have finished {{ lessonsDone }} of {{ lessonsTotal }} topics</p>
<p>Topics left: {{ lessonsTotal - lessonsDone }}</p>
```
**You should see:** `3 of 44` and `Topics left: 41`
**Why:** Between the braces you can write a small expression, like `lessonsTotal - lessonsDone`. Keep it short.

### Step 5: Call a method
**Add a method to the class in `app.ts` (below the properties):**
```ts
  getProgress(): number {
    return Math.round(this.lessonsDone / this.lessonsTotal * 100);
  }
```
**In `app.html`:**
```html
<p>Progress: {{ getProgress() }}%</p>
```
**You should see:** `Progress: 7%`
**Why:** A **method** is a function inside a class. Inside a class you write `this.` before the class's own properties. In the template you don't use `this`: you call it by name with brackets: `getProgress()`.

### Step 6: Text methods work too
```html
<p>{{ userName.toUpperCase() }}</p>
```
**You should see:** `NANDINI`

## Check yourself
The page shows the welcome line, the date, `3 of 44`, `Topics left: 41` and the progress.

## Recap
- Properties and methods live in the class (`.ts` file).
- `{{ name }}` in the template shows a property's value.
- `{{ method() }}` shows a method's result.
- Inside the class, use `this.`; in the template, don't.

## If something breaks
- **Blank where the value should be:** the name in `{{ }}` doesn't match the property name exactly.
- **Error "Property ... does not exist":** you typed a name that isn't in the class, or you put the property outside the class braces.
- **`NaN` shows up:** a number property is missing or misspelled.
