# Day 7: Card States (Class, Style and Attribute Binding): Project Walkthrough

> **Open this only after you have tried the project yourself** (see `exercises.md`), or if you are stuck for more than 15 minutes. It builds the project step by step.

## Today's project
Make the topic card change its look based on its status: done, in progress, or locked. It also shows a progress bar. It looks like this:

```
Components        [Done]      green card, full bar
Property Binding  [In progress] blue card, half bar
Routing           [Locked]    gray card, empty bar
```

## What you'll learn
- Turning a CSS class on and off with `[class.name]`
- Setting a style from data with `[style.property]`
- Setting an attribute with `[attr.name]`

## Before you start
Keep `ng serve` running. Open the `topic-card` component from Day 6.

## Build it, step by step

### Step 1: Add status data to the class
In `topic-card.ts`, replace the properties with:
```ts
export class TopicCard {
  title: string = 'Property Binding';
  status: string = 'in-progress';   // 'done', 'in-progress' or 'locked'
  progress: number = 50;
  iconUrl: string = 'book.svg';
}
```

### Step 2: Toggle a CSS class
In `topic-card.html`:
```html
<section
  class="panel card"
  [class.done]="status === 'done'"
  [class.in-progress]="status === 'in-progress'"
  [class.locked]="status === 'locked'"
>
  <img [src]="iconUrl" [alt]="title" width="48" height="48" />
  <h3>{{ title }}</h3>
  <p>Status: {{ status }}</p>
</section>
```
In `topic-card.css`:
```css
.card { border-left: 8px solid gray; }
.done { border-left-color: #2e9e5b; background: #eaf7ef; }
.in-progress { border-left-color: #2d7ff9; background: #eaf2ff; }
.locked { border-left-color: #999; background: #eee; opacity: 0.7; }
```
**You should see:** a blue card.
**Why:** `[class.done]="..."` adds the class `done` when the expression is `true`, and removes it when `false`. Change `status` to `'done'` and `'locked'` in the class, saving each time, to see the colors change.

### Step 3: A progress bar with a style binding
Add this below the paragraph in `topic-card.html`:
```html
<div class="bar">
  <div class="bar-fill" [style.width.%]="progress"></div>
</div>
```
In `topic-card.css`:
```css
.bar { background: #ddd; height: 8px; border-radius: 4px; }
.bar-fill { background: #14606a; height: 8px; border-radius: 4px; }
```
**You should see:** a half-filled bar.
**Why:** `[style.width.%]="progress"` sets the CSS `width` in percent from the `progress` number. Change `progress` to 80, then 100.

### Step 4: A color from data
Add to the class: `accent: string = '#14606a';` and change the heading:
```html
<h3 [style.color]="accent">{{ title }}</h3>
```
**You should see:** the title in teal.

### Step 5: Attribute binding for accessibility
```html
<div class="bar" [attr.aria-label]="'Progress: ' + progress + ' percent'">
```
**Why:** Some HTML attributes (like `aria-label`, used by screen readers) are not properties. For those you use `[attr.name]`. Right-click the bar in the browser, choose Inspect, and see the attribute in the HTML.

## Check yourself
Changing `status` and `progress` in the class changes the card's color and bar.

## Recap
- `[class.name]="condition"`: add or remove a class.
- `[style.property]="value"`: set one style. Add a unit after, like `[style.width.%]`.
- `[attr.name]="value"`: set an attribute.

## If something breaks
- **Class never applies:** check the CSS class name matches exactly (`in-progress` has a dash).
- **Bar doesn't move:** make sure you wrote `[style.width.%]` and `progress` is a number.
