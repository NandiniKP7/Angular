# Day 1: What Angular Is, and Your First App

**Project today:** LearnBuddy welcome page (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- What Angular and the CLI are
- How to create and run an app
- Where the page you see comes from

---

**Setup (once).** Check Node is installed by running this in a terminal:

```
node -v
```

You should see a version number. Then install the Angular command-line tool (the **CLI**):

```
npm install -g @angular/cli
ng version
```

`ng version` should show the Angular logo and version numbers. You also need a code editor. VS Code is fine.

---

**1. What is Angular?**

Angular is a framework for building web applications with TypeScript. You write your app as small pieces called **components** (TypeScript, HTML and CSS), and the Angular tools turn them into the plain HTML and JavaScript a browser understands.

---

**2. What is the CLI?**

The CLI is a tool you use from the terminal. It does the repetitive work for you: creating a project, running it, and (later) creating components. All its commands start with `ng`.

---

**3. Creating a project**

```
ng new learnbuddy
```

`ng new` builds a ready-to-run project in a new folder called `learnbuddy`. It asks questions. Answer like this:

- **Stylesheet format:** CSS
- **Server-side rendering (SSR/SSG):** No
- **Zoneless:** accept the default (press Enter) if asked
- **AI tools:** None, or accept the default

---

**4. Running the app**

```
cd learnbuddy
ng serve
```

`ng serve` builds the app and starts a small web server on your computer. It prints an address: `http://localhost:4200/`. Open it in a browser and you will see the default Angular page.

Leave this terminal open. If you close it, the app stops. Errors also appear here.

---

**5. The template: the HTML you see**

Open `src/app/app.html` in your editor. This file is the **template** of your main component. Whatever HTML is in it is what the page shows.

```html
<h1>Welcome to LearnBuddy</h1>
<p>Your personal learning companion</p>
```

If you replace the whole file with these two lines and save, the browser shows exactly those two lines. (In older Angular versions the file is called `app.component.html`. Use whichever your project has.)

If the terminal warns that `RouterOutlet` is not used, open `src/app/app.ts` and delete `RouterOutlet` from the `imports: [...]` list and from the import line at the top. The warning is only about unused code.

---

**6. Live reload**

`ng serve` watches your files. Each time you **save**, it rebuilds and updates the browser by itself. You never press refresh. Try it: change a word, save, and watch the page change.

---

**7. Mistakes and errors are normal**

If you mistype something, the terminal shows an error message and the page may look wrong. Read the message, find the file and line it mentions, and fix it. After you save, the browser recovers by itself.

Common problems:

- **`ng` is not recognized:** close and reopen the terminal after installing the CLI.
- **Port 4200 is in use:** another app is running. Close it, or run `ng serve --port 4300`.
- **Nothing changes when you save:** check you are editing the file inside the `learnbuddy` project, and that `ng serve` is still running.

---

**Recap**

- Angular is a framework for building web apps from components.
- The CLI (`ng`) creates and runs projects.
- `ng new` creates a project, and `ng serve` runs it at `localhost:4200`.
- `app.html` is the template: the HTML the page shows.
- Saving a file updates the browser automatically.

**Next:** open `exercises.md` for today's project and challenges.
