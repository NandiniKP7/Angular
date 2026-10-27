# Day 2: App Tour and Static Layout: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

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

## What you'll learn
- What the main files in an Angular project do
- Basic HTML structure for a page layout
- Basic CSS to style it

## Before you start
Keep `ng serve` running from Day 1, and keep `learnbuddy` open in your editor.

## Part 1: The tour (5 minutes)
Open each of these and read the first few lines. You don't need to understand everything yet.

| File | What it does |
|---|---|
| `package.json` | Lists the project's tools and commands (`start`, `build`) |
| `angular.json` | Settings for building and serving the app |
| `src/index.html` | The one real web page. It has a tag `<app-root></app-root>` |
| `src/main.ts` | Starts the app |
| `src/app/app.ts` | The **component class**: the code for the main screen |
| `src/app/app.html` | The **template**: the HTML for the main screen |
| `src/app/app.css` | The **styles** for the main screen |
| `src/styles.css` | Styles for the whole app |

**How they connect:** the browser loads `index.html`. Angular finds `<app-root>` in it and puts the app component there. The component's template (`app.html`) is what you see. (In older versions the files are `app.component.ts`, `app.component.html`, `app.component.css`.)

## Part 2: Build the layout

### Step 1: Header, sidebar and main area
**Type this in `app.html` (replace everything):**
```html
<header class="header">LearnBuddy</header>

<div class="layout">
  <nav class="sidebar">
    <p>Dashboard</p>
    <p>Topics</p>
    <p>Diary</p>
  </nav>

  <main class="main">
    <h1>Welcome to LearnBuddy</h1>
    <p>Your personal learning companion</p>
  </main>
</div>
```
**You should see:** plain text stacked in a column.
**Why:** `<header>`, `<nav>` and `<main>` are HTML tags that describe parts of a page. The `class="..."` names let CSS style them.

### Step 2: Reset the page margins
**Type this in `src/styles.css`:**
```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```
**Why:** Browsers add space around the page by default. This removes it.

### Step 3: Style the layout
**Type this in `app.css`:**
```css
.header {
  background: #0f4c4c;
  color: white;
  padding: 16px 24px;
  font-size: 20px;
}

.layout {
  display: flex;
}

.sidebar {
  background: #14606a;
  color: white;
  width: 200px;
  min-height: 100vh;
  padding: 16px;
}

.main {
  flex: 1;
  padding: 24px;
  background: #f7f6f2;
}
```
**You should see:** a dark teal header, a sidebar on the left and a light main area.
**Why:** `display: flex` puts the children of `.layout` side by side. `flex: 1` makes `.main` take the remaining width. `min-height: 100vh` makes the sidebar as tall as the window.

### Step 4: Make the sidebar labels look clickable
**Add to `app.css`:**
```css
.sidebar p {
  margin: 0 0 12px;
  cursor: pointer;
}
```
**You should see:** the pointer changes over the labels.

## Check yourself
You see the layout from the diagram at the top.

## Recap
- `index.html` is the single page; Angular fills `<app-root>`.
- A component has a class (`.ts`), a template (`.html`) and styles (`.css`).
- `class="name"` in HTML connects to `.name { ... }` in CSS.

## If something breaks
- **The CSS does nothing:** check that you edited `app.css` (not `styles.css`) and the class names match exactly.
- **The sidebar is on top, not on the left:** check `display: flex` on `.layout`.
