# Day 5: Dashboard Panels: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
Fill the main area with a **dashboard** made of several components placed inside each other. It looks like this:

```
+--- Dashboard ----------------------+
| [Progress panel] [Today panel]      |
| [Streak panel]                      |
+-------------------------------------+
```

## What you'll learn
- Splitting a screen into several components
- Putting components inside other components (parent and child)
- That each component has its own `imports` list

## Before you start
Keep `ng serve` running. You have `Sidebar` working from Day 4.

## Build it, step by step

### Step 1: Generate the components
**In a new terminal:**
```
ng generate component dashboard
ng generate component progress-panel
ng generate component today-panel
ng generate component streak-panel
```
**Why:** `dashboard` is the **parent**. The three panels will be its **children**.

### Step 2: Give each panel some content
In `progress-panel.html`:
```html
<section class="panel">
  <h3>Progress</h3>
  <p>3 of 44 topics finished</p>
</section>
```
In `today-panel.html`:
```html
<section class="panel">
  <h3>Today</h3>
  <p>Plan: 45 minutes of learning</p>
</section>
```
In `streak-panel.html`:
```html
<section class="panel">
  <h3>Streak</h3>
  <p>5 days in a row</p>
</section>
```

### Step 3: Style the panels (one place)
Each component has its own CSS, but these three panels share the look. Put the shared style in `src/styles.css`, which applies everywhere:
```css
.panel {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.panel h3 {
  margin-top: 0;
}
```

### Step 4: Build the dashboard (parent)
In `dashboard.html`:
```html
<h2>Dashboard</h2>
<div class="panels">
  <app-progress-panel />
  <app-today-panel />
  <app-streak-panel />
</div>
```
In `dashboard.css`:
```css
.panels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
```
**Why:** `display: grid` with `auto-fit` lays the panels in rows that adjust to the width.

### Step 5: Import the children into the parent
Open `dashboard.ts`. Import the three panel classes at the top and list them in `imports`:
```ts
import { ProgressPanel } from '../progress-panel/progress-panel';
import { TodayPanel } from '../today-panel/today-panel';
import { StreakPanel } from '../streak-panel/streak-panel';

@Component({
  selector: 'app-dashboard',
  imports: [ProgressPanel, TodayPanel, StreakPanel],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
```
(Older versions have `...Component` at the end of each class name and `.component` in the file names.)
**Why:** The parent needs to import the children it uses, not the app.

### Step 6: Show the dashboard in the app
In `app.html`, replace the contents of `<main class="main">` with:
```html
<app-dashboard />
```
In `app.ts`, import `Dashboard` and add it to `imports` (the same two steps as Day 4).
**You should see:** three white panels in the main area.

## Check yourself
The dashboard appears with three panels.

## Recap
- Big screens are built from small components nested inside each other.
- The **parent** places the **child** using its tag.
- Whoever uses a component must import it.
- Shared styles can live in `src/styles.css`.

## If something breaks
- **`'app-progress-panel' is not a known element`:** import it in `dashboard.ts`, not in `app.ts`.
- **A panel has no style:** check the class name `panel` and that `styles.css` was saved.
