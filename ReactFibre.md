## React Fibre

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

### **Reconciliation: Core Concept Summary**

#### **1. What It Is**

- **Algorithm:** Compares the **new Virtual DOM (VDOM)** tree with the **previous VDOM tree** to determine minimal changes needed.

- **Goal:** Update the real DOM efficiently (avoid full re-renders).

#### **2. Why It Exists**

- **Declarative API:** React lets you describe UI for any state ("re-render whole app on update").

- **Performance Reality:** Actually re-rendering everything is too slow. Reconciliation makes it _feel_ instantaneous.

#### **3. How It Works**

1.  **On Update** (e.g., `setState`):

- Generates a new VDOM tree.

2.  **Diffing:** Compares new tree with old tree:

- **Rule 1:** Different root component types? → **Replace entire tree.**

```jsx
// Old: <div>...<div>

// New: <section>...</section> → Full rebuild!
```

- **Rule 2:** Same component? → **Update props/children.**

- **Rule 3 (Lists):** Uses `key` to track identity → Minimizes reorders/adds/deletes.

```jsx
// Without keys: Re-renders all list items

// With keys: Only updates changed/moved items
```

#### **4. Key Optimizations**

- **Keys:** Must be **stable, unique, predictable** (e.g., database IDs). Avoid array indices!

- **Batching:** Groups multiple updates into one diff pass.

- **Fiber (React 16+):**

- Rewrote reconciliation to support **paused/prioritized updates** (e.g., animations > data fetches).

- Enables features like Concurrent Mode.

#### **5. Why You Care**

- **Performance:** Avoids costly DOM operations.

- **Predictability:** Keys prevent UI bugs (e.g., form state in wrong list item).

- **Debugging:** Explains _why_ components re-render.

---

### **Key Takeaways**

| Concept             | Impact                                                              |
| ------------------- | ------------------------------------------------------------------- |
| **Diffing**         | Only updates changed parts of the DOM.                              |
| **Component Types** | Changing component type (e.g., `div` → `span`) forces full rebuild. |
| **Keys**            | Critical for list stability. Use unique IDs, not indices!           |
| **Fiber**           | Makes reconciliation interruptible (better UX for heavy updates).   |

> 💡 **Reconciliation = Diffing Algorithm + Update Strategy**

> It’s React’s superpower for making declarative code **fast**.

---

### **Fiber in React: Core Concept Summary**

#### **1. What is a Fiber?**

- **Virtual Stack Frame:** A fiber is a JavaScript object representing a **unit of work** for a React component.
- **Purpose:** Replaces the traditional call stack to enable advanced scheduling and optimization.
- **Analogy:**
  - Traditional call stack: Runs functions to completion (blocking).
  - Fiber stack: Pausable, prioritizable, and interruptible.

#### **2. Why Fiber Exists**

Solve key UI limitations:

1. **Pause/resume work** (e.g., yield to high-priority animations).
2. **Prioritize tasks** (e.g., user input > background data fetching).
3. **Reuse/compute work** (skip redundant updates).
4. **Abort obsolete work** (e.g., outdated API responses).

#### **3. Fiber Structure (Key Fields)**

| Field                 | Purpose                                                  | Example/Impact                                                                             |
| --------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `type` & `key`        | Component identity (copied from React element)           | `type`: `Button` (function) or `'div'` (string). `key` ensures stable identity in lists.   |
| `child` & `sibling`   | Tree structure (singly-linked list)                      | `<Parent><Child1/><Child2/></Parent>` → `Parent.child = Child1`, `Child1.sibling = Child2` |
| `return`              | "Parent" fiber (where to return after current work)      | After `Child1` completes, React resumes work at `Parent`.                                  |
| `pendingProps`        | New props (arguments) for the component                  | Props passed at start of render cycle.                                                     |
| `memoizedProps`       | Props from last render (for comparison)                  | If `pendingProps === memoizedProps`, skip re-render (performance win).                     |
| `pendingWorkPriority` | Task priority (lower number = higher priority)           | `90` (user input) > `100` (data fetch). Scheduler picks highest priority work.             |
| `alternate`           | Pointer to mirror fiber (`current` ↔ `work-in-progress`) | Enables double buffering: work safely on copy, then swap.                                  |
| `output`              | Renderer-specific result (e.g., DOM node)                | Host components (e.g., `div`) produce `output`; passed to renderer (React DOM).            |

#### **4. Key Concepts**

- **Work-in-Progress (WIP):**
  - Fiber being computed (not yet rendered).
  - Alternate of the `current` (on-screen) fiber.
- **Flush:** Commit WIP fiber to screen (make it `current`).
- **Host Components:** Leaf nodes (e.g., `div`, `span`) that produce platform-specific output.

#### **5. How Fiber Enables Advanced Features**

- **Concurrent Mode:**
  - Pause rendering for high-priority events → jank-free UI.
- **Error Boundaries:**
  - Isolate crashes by catching errors per fiber.
- **Suspense:**
  - "Wait" for data by pausing a subtree's rendering.

#### **6. Real-World Impact**

```jsx
// Before Fiber (React 15):
// - Entire tree renders in one blocking pass → dropped frames during heavy updates.

// After Fiber (React 16+):
// - Incremental rendering:
//   High-priority: "Update input field NOW"
//   Low-priority: "Fetch search results in background"
```

#### **Key Takeaways**

1. **Fiber = Virtual Stack Frame**
   - Reimplementation of call stack for UI-specific scheduling.
2. **Unit of Work**
   - Breaks rendering into interruptible chunks.
3. **Double Buffering**
   - `current` (on-screen) vs. `work-in-progress` (in-progress update).
4. **Priority-Driven**
   - Scheduler picks highest-priority fiber to work on next.

> 💡 **Why it matters:** Fiber transforms React from a "all-or-nothing" renderer to a **schedulable, interruptible system**—enabling buttery-smooth UIs even in complex apps.
