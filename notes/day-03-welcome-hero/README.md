# Day 3: Showing Data with `{{ }}`

**Project today:** Welcome hero with live data (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- Properties and methods in the class
- String interpolation with `{{ }}`
- How the class and the template work together

Keep `ng serve` running. Open `src/app/app.ts` and `src/app/app.html`.

---

**1. The class holds the data**

The class in `app.ts` can hold values. Inside a class, a variable is called a **property**.

```ts
export class App {
  userName: string = 'Nandini';
  lessonsDone: number = 3;
  lessonsTotal: number = 44;
}
```

These are typed exactly like the variables you learned in TypeScript. Leave any other lines already in the class alone.

---

**2. Show a property in the template**

Writing `{{ propertyName }}` in the template shows its value. This is called **string interpolation**.

```html
<h1>Welcome back, {{ userName }}!</h1>
```

The page shows: `Welcome back, Nandini!`

Angular finds `userName` in the class and puts its value in the page. If you change the value in the class and save, the page changes too. Data flows in one direction: **class to template**.

---

**3. Short expressions work too**

Between `{{ }}` you can put a small calculation:

```html
<p>Topics left: {{ lessonsTotal - lessonsDone }}</p>
```

The page shows: `Topics left: 41`

Keep it short. Anything complicated belongs in the class.

---

**4. Methods: code that belongs to the class**

A **method** is a function inside a class.

```ts
export class App {
  lessonsDone: number = 3;
  lessonsTotal: number = 44;

  getProgress(): number {
    return Math.round(this.lessonsDone / this.lessonsTotal * 100);
  }
}
```

Read it piece by piece:

- `getProgress` is the method's name.
- `(): number` means "takes nothing, returns a number".
- `this.lessonsDone` is how a method reaches the class's own property.
- `Math.round(...)` rounds to the nearest whole number.

Call it from the template by name, with brackets:

```html
<p>Progress: {{ getProgress() }}%</p>
```

The page shows: `Progress: 7%`

---

**5. `this` in the class, but not in the template**

- **Inside the class:** write `this.lessonsDone`.
- **In the template:** write `lessonsDone`. The template already looks inside its own class.

---

**6. Text methods work too**

```html
<p>{{ userName.toUpperCase() }}</p>
```

The page shows: `NANDINI`

Anything you could do to a `string` in TypeScript works here.

---

**7. Common problems**

- **Blank where a value should be:** the name in `{{ }}` doesn't match the property name exactly.
- **`Property ... does not exist`:** you typed a name that isn't in the class, or you put the property outside the class braces.
- **`NaN` on the page:** a number property is missing or misspelled.

---

**Recap**

- Properties and methods live in the class (`.ts`).
- `{{ name }}` in the template shows a property's value.
- `{{ method() }}` shows what a method returns.
- Use `this.` inside the class, not in the template.

**Next:** open `exercises.md` for today's project and challenges.
