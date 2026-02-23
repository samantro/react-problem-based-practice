Perfect 😎
Now I’ll give you a **new 30-minute logical React challenge** — slightly harder than cart.

This one will test:

- State structure design
- Derived values
- Filtering logic
- Sorting logic
- Conditional rendering
- Clean thinking

---

# 🧠 Problem 2: Smart Task Manager (Mini Trello Logic)

⏱ Time Limit: 30 Minutes
🎯 Focus: Logical filtering + derived state + UI behavior

---

## 📌 Scenario

You are building a **Task Management Dashboard**.

You are given initial tasks:

```js
const initialTasks = [
  { id: 1, title: "Learn React", priority: "High", completed: false },
  { id: 2, title: "Go to Gym", priority: "Medium", completed: false },
  { id: 3, title: "Read Book", priority: "Low", completed: true },
  { id: 4, title: "Build Project", priority: "High", completed: false },
];
```

---

# ✅ Requirements

## 1️⃣ Display Tasks

Each task should show:

- Title
- Priority
- Completed / Not Completed
- Button to toggle complete

---

## 2️⃣ Add New Task

- Input field for title
- Dropdown for priority (High / Medium / Low)
- Default completed = false
- Add button

---

## 3️⃣ Filters

Add filter buttons:

- All
- Completed
- Pending
- High Priority

Only show tasks based on selected filter.

---

## 4️⃣ Sorting

Add sorting dropdown:

- Sort by Priority (High → Low)
- Sort by Title (A-Z)

---

## 5️⃣ Dashboard Summary

Show:

- Total Tasks
- Completed Tasks
- Pending Tasks
- High Priority Pending Tasks

---

## 🔥 Bonus (If Time Remains)

- Disable Add button if input empty
- Highlight High priority tasks
- Show message: "All tasks completed 🎉" when no pending tasks

---

# 🧠 Important Thinking Questions

Before coding, think:

- What should be stored in state?
- What should be derived?
- Should filter result be stored or computed?
- How to structure filtering + sorting cleanly?

---

# 🚀 Your Move

Reply:

👉 `Start solving`

Then you design state first.
I will guide like interviewer — without giving solution immediately.
