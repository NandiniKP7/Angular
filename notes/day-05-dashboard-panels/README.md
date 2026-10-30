# Day 5: Parent and Child Components

**Project today:** Dashboard with panels (see `exercises.md`)
**Time:** 15 minutes reading, then practice

## What you will learn
- A screen as a tree of components
- Parent and child components
- Where styles belong

Keep `ng serve` running.

---

**1. A screen is a tree of components**

Components can contain other components. The app contains the dashboard, the dashboard contains the panels, and a panel could contain a small badge.

```
App
 ├── Sidebar
 └── Dashboard
      ├── ProgressPanel
      ├── TodayPanel
      └── StreakPanel
```

---

**2. Parent and child**

The component that **places** another one in its template is the **parent**. The one that is placed is the **child**.

```html
<!-- dashboard.html: the parent -->
<h2>Dashboard</h2>
<app-progress-panel />
<app-today-panel />
<app-streak-panel />
```

Here `Dashboard` is the parent of the three panels.

---

**3. The parent imports the child**

Each component only knows about the components **it** imports. The dashboard uses the panels, so **the dashboard** imports them, not the app:

```ts
// dashboard.ts
import { ProgressPanel } from '../progress-panel/progress-panel';
import { TodayPanel } from '../today-panel/today-panel';
import { StreakPanel } from '../streak-panel/streak-panel';

@Component({
  selector: 'app-dashboard',
  imports: [ProgressPanel, TodayPanel, StreakPanel],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard { }
```

(Older versions add `Component` to each class name and `.component` to each file name.)

The app only imports `Dashboard`, because that is the only component the app's template uses.

---

**4. Generating several components**

You can generate more than one by running the command several times:

```
ng generate component dashboard
ng generate component progress-panel
ng generate component today-panel
ng generate component streak-panel
```

---

**5. Laying out children in a grid**

CSS grid arranges children in rows and columns.

```css
.panels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
```

- `display: grid` turns the container into a grid.
- `repeat(auto-fit, minmax(220px, 1fr))` means "as many columns as fit, each at least 220px wide".
- `gap` is the space between items.

---

**6. Where do styles go?**

- CSS in a component's own `.css` file only affects **that component's** template. This stops one component's CSS from breaking another.
- CSS in `src/styles.css` affects the **whole app**. Use it for styles shared by many components, such as a `.panel` look.

```css
/* src/styles.css */
.panel {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
```

---

**7. Why split a screen into components?**

Small components are easier to understand, test and reuse. To decide whether something should be its own component, ask: "is this a self-contained piece with its own purpose?"

---

**Recap**

- Big screens are made of small components inside each other.
- The **parent** places the **child** with its tag.
- A component must import the children it uses.
- Component CSS stays inside the component. Shared CSS goes in `src/styles.css`.

**Next:** open `exercises.md` for today's project and challenges.
