# Day 6: Topic Card (Property Binding): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
A **topic card** whose look and behavior come from data in its class. It shows:

```
[book icon]  Components
Locked topic
[Start]  (disabled)
```

## What you'll learn
- Property binding with `[ ]`
- The difference between `{{ }}` and `[ ]`
- Binding an image, a button's `disabled`, and a tooltip title

## Before you start
Keep `ng serve` running.

## Build it, step by step

### Step 1: Generate the card
```
ng generate component topic-card
```

### Step 2: Add data to its class
In `topic-card.ts`:
```ts
export class TopicCard {
  title: string = 'Components';
  isLocked: boolean = true;
  iconUrl: string = 'book.svg';
  hint: string = 'Finish earlier topics to unlock';
}
```

### Step 3: Create the icon
Create a file `public/book.svg` (in the `public` folder at the top of the project; in versions before 18 it is `src/assets/book.svg`) with this content:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <rect x="8" y="6" width="32" height="36" rx="4" fill="#14606a"/>
  <rect x="14" y="12" width="20" height="4" fill="white"/>
  <rect x="14" y="20" width="20" height="4" fill="white"/>
</svg>
```

### Step 4: Write the template
In `topic-card.html`:
```html
<section class="panel card">
  <img [src]="iconUrl" [alt]="title" width="48" height="48" />
  <h3>{{ title }}</h3>
  <p [title]="hint">Locked topic</p>
  <button [disabled]="isLocked">Start</button>
</section>
```
**You should see:** a card with the icon, the title, and a disabled **Start** button. Hover over `Locked topic` to see the tooltip.
**Why:**
- `{{ title }}` puts a value **inside text**.
- `[src]="iconUrl"` sets an HTML element's **property** from a class property. The square brackets mean "the value on the right is code, not text".
- `[disabled]="isLocked"` turns the button off when `isLocked` is `true`.

### Step 5: Spot the difference
Try replacing `[disabled]="isLocked"` with `disabled="isLocked"` (no brackets). The button stays disabled **even when** `isLocked` is `false`. Without brackets, `"isLocked"` is just text, and any text on `disabled` means "disabled". Put the brackets back.

### Step 6: Change the data, see the page change
In the class, set `isLocked` to `false` and save. The button turns on. Set it back to `true`.

### Step 7: Use the card in the dashboard
Import `TopicCard` into `dashboard.ts`, add it to `imports`, and place `<app-topic-card />` in `dashboard.html`. Add it twice to see two cards.

## Check yourself
You see a card with a book icon, a disabled button and a tooltip.

## Recap
- `{{ x }}` shows a value as text.
- `[property]="x"` sets an element's property from the class.
- Without the brackets, Angular treats it as plain text.

## If something breaks
- **The icon is missing:** check the file is in `public/` (or `src/assets/`) and the name matches.
- **`Can't bind to 'disabled' since it isn't a known property`:** a typo in the property name.
