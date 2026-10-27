# Day 2: The Project Files and Page Layout

**Project today:** header, sidebar and main area (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- What the main files in an Angular project do
- Basic HTML structure for a page
- Basic CSS to lay it out

Keep `ng serve` running from Day 1.

---

**1. The files, and what each one does**

| File | What it does |
|---|---|
| `package.json` | Lists the project's tools and commands (`start`, `build`) |
| `angular.json` | Settings for building and serving the app |
| `src/index.html` | The one real web page. It contains the tag `<app-root></app-root>` |
| `src/main.ts` | Starts the app |
| `src/app/app.ts` | The **class** of the main component: its data and code |
| `src/app/app.html` | The **template** of the main component: its HTML |
| `src/app/app.css` | The **styles** of the main component |
| `src/styles.css` | Styles for the whole app |

In older versions the three `app` files are called `app.component.ts`, `app.component.html` and `app.component.css`.

---

**2. How the files connect**

1. The browser loads `index.html`.
2. `main.ts` starts Angular.
3. Angular finds `<app-root>` in `index.html` and puts the main component there.
4. The component's template (`app.html`) is what you see on screen.

So changing `app.html` changes what appears inside `<app-root>`.

---

**3. HTML tags describe the structure of a page**

```html
<header>LearnBuddy</header>

<nav>
  <p>Dashboard</p>
  <p>Topics</p>
</nav>

<main>
  <h1>Welcome</h1>
</main>
```

- `<header>` is the top of the page.
- `<nav>` holds navigation, such as a menu.
- `<main>` is the main content.
- `<h1>` is the biggest heading, and `<p>` is a paragraph.

---

**4. CSS styles what the tags look like**

CSS is written in rules. A rule has a selector (what to style) and settings (how).

```css
.header {
  background: #0f4c4c;
  color: white;
  padding: 16px;
}
```

To connect HTML and CSS, give the HTML tag a **class**:

```html
<header class="header">LearnBuddy</header>
```

The rule `.header { ... }` (a dot, then the name) styles every element with `class="header"`. The names must match exactly.

---

**5. Putting things side by side with flexbox**

By default, blocks stack vertically. `display: flex` on a container puts its children in a row.

```html
<div class="layout">
  <nav class="sidebar">Sidebar</nav>
  <main class="main">Main content</main>
</div>
```

```css
.layout {
  display: flex;
}
.sidebar {
  width: 200px;
}
.main {
  flex: 1;
}
```

- `.layout` becomes a row.
- `.sidebar` is 200 pixels wide.
- `flex: 1` makes `.main` take all the remaining space.

---

**6. Global styles**

`app.css` only affects the template of the app component. `src/styles.css` affects the whole page. Browsers add a margin around the page by default. Remove it for the whole app:

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

---

**Recap**

- `index.html` is the single page. Angular fills `<app-root>`.
- A component has a class (`.ts`), a template (`.html`) and styles (`.css`).
- `class="name"` in HTML matches `.name { }` in CSS.
- `display: flex` puts items side by side, and `flex: 1` makes one fill the rest.

**Next:** open `exercises.md` for today's project and challenges.
