# Day 6: Property Binding

**Project today:** Topic card (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Property binding with `[ ]`
- The difference between `{{ }}` and `[ ]`
- Binding an image, a button's `disabled`, and a tooltip

Keep `ng serve` running.

---

**1. Two ways to put data in a template**

```ts
// class
title: string = 'Components';
isLocked: boolean = true;
```

```html
<h3>{{ title }}</h3>              <!-- 1. interpolation: a value inside text -->
<button [disabled]="isLocked">    <!-- 2. property binding: sets an element's property -->
  Start
</button>
```

- `{{ }}` puts a value **inside text**.
- `[property]="value"` sets a **property of an HTML element** from the class.

Both send data in one direction: **class to page**.

---

**2. What the square brackets mean**

In `[disabled]="isLocked"`, the part in quotes is **code**: Angular reads it as a name from the class (or a small expression) and uses its value. So the button is disabled when `isLocked` is `true`, and enabled when it is `false`. Change the value in the class, save, and the button changes.

---

**3. Without brackets, it is plain text**

```html
<button [disabled]="isLocked">Start</button>   <!-- uses the true/false value -->
<button disabled="isLocked">Start</button>     <!-- the TEXT "isLocked": always disabled! -->
```

In the second line, `"isLocked"` is just text, and any text on `disabled` turns it on. This is the most common beginner mistake. Brackets or no brackets decides whether Angular reads the value as code or as text.

---

**4. Attribute vs property**

An HTML **attribute** is the text you write in the HTML file. A DOM **property** is the live value the browser keeps while the page runs. Angular's `[ ]` sets **properties**. For `disabled`, that means the real on/off state of the button, which is what you want.

---

**5. Commonly bound properties**

```html
<img [src]="iconUrl" [alt]="title" />      <!-- an image from data -->
<p [title]="hint">Locked topic</p>          <!-- tooltip when you hover -->
<button [disabled]="isLocked">Start</button>
<p [hidden]="!isLocked">This is locked</p>  <!-- hides an element when true -->
<input [placeholder]="placeholderText" />
```

Each one needs a matching property in the class:

```ts
iconUrl: string = 'book.svg';
title: string = 'Components';
hint: string = 'Finish earlier topics to unlock';
isLocked: boolean = true;
placeholderText: string = 'Add a note...';
```

---

**6. Where do image files go?**

Files the browser should serve as they are, such as images, go in the `public` folder at the top of the project. Then `iconUrl = 'book.svg'` loads `public/book.svg`. (In versions before Angular 18, the folder is `src/assets`.)

---

**7. Why this matters**

Instead of editing the page by hand, you change **data** in the class, and the page follows. The screen is a result of the data. This idea is the core of Angular.

---

**Common problems**

- **The icon is missing:** the file isn't in `public/` (or `src/assets/`), or the name doesn't match.
- **`Can't bind to 'disabled' since it isn't a known property`:** a typo in the property name.

---

**Recap**

- `{{ x }}` shows a value as text.
- `[property]="x"` sets an element's property from the class.
- Without the brackets, the quotes hold plain text.

**Next:** open `exercises.md` for today's project and challenges.
