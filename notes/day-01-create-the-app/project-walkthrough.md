# Day 1: Create the App: Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
You create your first Angular app, **LearnBuddy**, run it in the browser, and change what it shows. At the end the browser shows:

```
Welcome to LearnBuddy
Your personal learning companion
```

## What you'll learn
- How to create and run an Angular app
- Where the page you see comes from
- That saving a file updates the browser by itself

## Before you start
1. Check Node is installed: run `node -v` in a terminal. You should see a version number.
2. Install the Angular command-line tool (called the CLI), once:
   ```
   npm install -g @angular/cli
   ```
3. Check it worked: `ng version` shows the Angular logo and version numbers.
4. Open a code editor (VS Code is fine).

## Build it, step by step

### Step 1: Create the project
**Type this in a terminal, in the folder where you keep projects:**
```
ng new learnbuddy
```
The CLI asks questions. Answer like this:
- **Stylesheet format:** CSS
- **Server-side rendering (SSR/SSG):** No
- **Zoneless:** accept the default (press Enter) if asked
- **AI tools:** None (or accept the default)

**You should see:** a lot of text, then a new `learnbuddy` folder.
**Why:** `ng new` builds a ready-to-run project with all the files Angular needs.

### Step 2: Start the app
**Type this:**
```
cd learnbuddy
ng serve
```
**You should see:** a message saying the application is running, with the address `http://localhost:4200/`.
**Why:** `ng serve` builds the app and starts a small server on your computer. Leave this terminal open. If you close it, the app stops.

### Step 3: Open it in the browser
Go to `http://localhost:4200` in your browser.
**You should see:** the default Angular welcome page.

### Step 4: Find the page's source
In your editor, open the `learnbuddy` folder. Open `src/app/app.html`.
**You should see:** a lot of HTML for the default page.
**Why:** This file is the **template**: the HTML for what you see. (In older Angular versions the file is called `app.component.html`. Use whichever your project has.)

### Step 5: Replace the template
Select everything in `app.html`, delete it, and type:
```html
<h1>Welcome to LearnBuddy</h1>
<p>Your personal learning companion</p>
```
Save the file.
**You should see:** the browser changes **by itself**, without you pressing refresh.
**Why:** `ng serve` watches your files. When you save, it rebuilds and updates the page.

If the terminal shows a warning that `RouterOutlet` is not used, open `src/app/app.ts` and delete `RouterOutlet` from the `imports: [...]` line and from the import at the top. The warning is only about unused code.

### Step 6: Break it on purpose, then fix it
In `app.html`, change `</h1>` to `</h11>` and save.
**You should see:** the page looks odd, and the terminal may show an error.
**Why:** Mistakes are normal. Read the message from the terminal, then fix the typo. Seeing an error and recovering is part of learning.

## Check yourself
The browser shows your two lines, with no errors in the terminal.

## Recap
- `ng new` creates a project. `ng serve` runs it.
- `app.html` is the template: the HTML you see on the page.
- Saving a file updates the browser automatically.

## If something breaks
- **`ng` is not recognized:** close and reopen the terminal after installing the CLI.
- **Port 4200 is in use:** another app is running. Close it, or run `ng serve --port 4300`.
- **Nothing changes when I save:** check you're editing the file inside the `learnbuddy` project, and that `ng serve` is still running.
