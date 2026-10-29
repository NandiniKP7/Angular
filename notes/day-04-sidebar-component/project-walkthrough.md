# Day 4: The Sidebar Becomes a Component: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
Move the sidebar out of the main screen into its own **component**. The page looks exactly the same, but the code is cleaner:

```
app.html  ->  <app-sidebar />  (the sidebar lives in its own files)
```

## What you'll learn
- What a component is
- How to generate one with the CLI
- How to use one inside another with its selector

## Before you start
Keep `ng serve` running. Your `app.html` has the header, the `<nav class="sidebar">`, and the main area from Day 2.

## Build it, step by step

### Step 1: What is a component?
A component is a **reusable piece of the screen** made of three parts:
- a class (`.ts`): its data and code
- a template (`.html`): its HTML
- styles (`.css`): its look

Your whole page so far is one component, `App`. Today we split off a smaller one.

### Step 2: Generate the sidebar component
**Type this in a new terminal** (keep `ng serve` running in the first one), inside the `learnbuddy` folder:
```
ng generate component sidebar
```
**You should see:** a list of created files: `src/app/sidebar/sidebar.ts`, `sidebar.html`, `sidebar.css` (plus a `.spec.ts` test file). Older versions create `sidebar.component.ts` and so on.
**Why:** The CLI creates the three files and a class for you. Open `sidebar.ts` and look for this part:
```ts
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar { }
```
- `selector: 'app-sidebar'` is the HTML tag name you use to place this component.
- `templateUrl` and `styleUrl` point to its template and styles.

### Step 3: Move the sidebar HTML
Cut this block out of `app.html`:
```html
<nav class="sidebar">
  <p>Dashboard</p>
  <p>Topics</p>
  <p>Diary</p>
</nav>
```
Paste it into `sidebar.html`, replacing what is there.

### Step 4: Move the sidebar CSS
Cut the `.sidebar` and `.sidebar p` rules out of `app.css`. Paste them into `sidebar.css`.

### Step 5: Use the component
In `app.html`, put the tag where the sidebar was:
```html
<app-sidebar />
```
**You should see:** an error. Angular says `app-sidebar` is not a known element.
**Why:** Angular only lets a component use another one if you **import** it.

### Step 6: Import it
Open `app.ts`. At the top add:
```ts
import { Sidebar } from './sidebar/sidebar';
```
(Older versions: `import { SidebarComponent } from './sidebar/sidebar.component';`)
Then add it to the `imports` list of `@Component`:
```ts
imports: [Sidebar],
```
**You should see:** the sidebar appears again, looking exactly as before.
**Why:** Two steps for every component you use: (1) import the class at the top of the file, (2) add it to `imports: [...]`.

### Step 7: Use it twice (to see why components matter)
Temporarily add a second `<app-sidebar />` under the first and look at the page. Then delete it.
**Why:** You built the sidebar once and can use it anywhere.

## Check yourself
The page looks the same as Day 2. The sidebar's HTML and CSS are now in the `sidebar` folder.

## Recap
- A component = class + template + styles, with a selector.
- `ng generate component name` creates one.
- To use it: import the class, add it to `imports`, then write its tag.

## If something breaks
- **`'app-sidebar' is not a known element`:** you forgot Step 6.
- **The sidebar has no color:** the CSS wasn't moved into `sidebar.css`, or the class names don't match.
- **`Cannot find module`:** check the path in the import. The folder is `sidebar`, the file is `sidebar.ts`.
