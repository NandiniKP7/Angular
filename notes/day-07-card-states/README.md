# Day 7: Class, Style and Attribute Binding

**Project today:** Card states and a progress bar (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Turning a CSS class on and off with `[class.name]`
- Setting a style from data with `[style.property]`
- Setting an attribute with `[attr.name]`

Keep `ng serve` running.

---

**1. The screen follows the data**

You don't tell the page to change colors. You change a value in the class (`status`, `progress`), and the template's bindings describe what the page should look like for that value. This is called **state-driven UI**.

---

**2. `[class.name]`: add or remove a CSS class**

```ts
status: string = 'done';
```

```html
<section [class.done]="status === 'done'">...</section>
```

```css
.done { background: #eaf7ef; }
```

`[class.done]="condition"` adds the class `done` when the condition is `true`, and removes it when `false`. Here `status === 'done'` is a comparison that gives `true` or `false`, exactly like in TypeScript.

You can have several, one per state:

```html
<section
  [class.done]="status === 'done'"
  [class.in-progress]="status === 'in-progress'"
  [class.locked]="status === 'locked'"
>
```

A class name with a dash, like `in-progress`, must be written exactly the same in the CSS and in the binding.

---

**3. `[style.property]`: set one style**

```ts
progress: number = 50;
accent: string = '#14606a';
```

```html
<div [style.width.%]="progress"></div>
<h3 [style.color]="accent">Title</h3>
```

- `[style.color]="accent"` sets the CSS `color` to the value of `accent`.
- `[style.width.%]="progress"` sets `width` and adds the unit `%` after the second dot.
- Other units work the same way: `[style.font-size.px]="titleSize"`.

---

**4. A progress bar**

```html
<div class="bar">
  <div class="bar-fill" [style.width.%]="progress"></div>
</div>
```

```css
.bar { background: #ddd; height: 8px; border-radius: 4px; }
.bar-fill { background: #14606a; height: 8px; border-radius: 4px; }
```

The outer bar is the gray track. The inner bar's width is `progress` percent of it. Change `progress` to 80 and the bar grows.

---

**5. A shortcut to choose between two values**

```html
<div [style.background]="progress === 100 ? 'green' : '#14606a'"></div>
```

`condition ? valueA : valueB` means "if the condition is true use `valueA`, otherwise use `valueB`". It is a short `if / else`.

---

**6. `[attr.name]`: set an HTML attribute**

Some HTML attributes have no matching property. Accessibility attributes like `aria-label` (read aloud by screen readers) are the usual example. For those, use `[attr.name]`:

```html
<div [attr.aria-label]="'Progress: ' + progress + ' percent'"></div>
```

Right-click the element in the browser, choose **Inspect**, and you will see the attribute in the HTML.

---

**Common problems**

- **A class never applies:** the CSS class name doesn't match the one in the binding.
- **The bar doesn't move:** check you wrote `[style.width.%]` and that `progress` is a number.

---

**Recap**

- `[class.name]="condition"`: add or remove a class.
- `[style.property]="value"`: set one style. Add a unit after, like `[style.width.%]`.
- `[attr.name]="value"`: set an attribute.
- `condition ? a : b` chooses between two values.

**Next:** open `exercises.md` for today's project and challenges.
