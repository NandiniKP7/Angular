# Day 4: Components

**Project today:** move the sidebar into its own component (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- What a component is
- The `@Component` decorator and the selector
- How to generate and use a component

Keep `ng serve` running.

---

**1. What is a component?**

A component is a **self-contained piece of the screen**. It has three parts:

- a **class** (`.ts`): its data and code
- a **template** (`.html`): its HTML
- **styles** (`.css`): its look

An app is built by combining many small components instead of one huge page. That makes code easier to read, reuse and change. The main screen you have been editing is one component, called `App`.

---

**2. Generating a component**

Open a **second** terminal (keep `ng serve` running in the first one) inside the project folder and type:

```
ng generate component sidebar
```

The CLI creates a folder `src/app/sidebar` with `sidebar.ts`, `sidebar.html`, `sidebar.css` and a `.spec.ts` test file. (Older versions name them `sidebar.component.ts` and so on.)

---

**3. Reading the generated class**

```ts
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar { }
```

Read it piece by piece:

- `@Component({ ... })` is information for Angular about the class below it. It is called a **decorator**.
- `selector: 'app-sidebar'` is the **name of the HTML tag** that places this component.
- `templateUrl` points to the HTML file.
- `styleUrl` points to the CSS file.
- `imports: []` is the list of other components this one uses. It is empty for now.

---

**4. Using a component: its selector becomes a tag**

To show the sidebar inside another template, write its selector as a tag:

```html
<app-sidebar />
```

Angular replaces that tag with the sidebar's template. You can use it as many times as you like.

---

**5. A component must be imported before use**

Angular only lets a component use another one if you tell it. That takes **two steps**, in the file of the component that uses it (`app.ts`):

1. Import the class at the top of the file:

```ts
import { Sidebar } from './sidebar/sidebar';
```

2. Add it to the `imports` list of `@Component`:

```ts
imports: [Sidebar],
```

(Older versions: `import { SidebarComponent } from './sidebar/sidebar.component';` and `imports: [SidebarComponent]`.)

If you forget this, you get the error `'app-sidebar' is not a known element`.

---

**6. Moving HTML and CSS into a component**

To turn part of a page into a component:

1. Generate the component.
2. Cut the HTML out of the old template and paste it into the new component's `.html`.
3. Cut the matching CSS rules into the new component's `.css`.
4. Put the component's tag where the old HTML was, and import it.

The page should look exactly the same. Only the code is cleaner.

---

**7. Common problems**

- **`'app-sidebar' is not a known element`:** you forgot to import it where it is used (step 5).
- **The sidebar has no color:** the CSS wasn't moved into `sidebar.css`, or the class names don't match.
- **`Cannot find module`:** check the path in the import. The folder is `sidebar`, the file is `sidebar.ts`.

---

**Recap**

- A component = class + template + styles.
- The `selector` is the tag name used to place it.
- `ng generate component name` creates one.
- To use a component: import the class, add it to `imports`, then write its tag.

**Next:** open `exercises.md` for today's project and challenges.
