Perfect 💪
Since you want **logical work + solvable in 30 minutes**, here is a strong interview-style React problem.

---

# 🧠 Problem 1: Smart Cart System (Logical React Challenge)

### ⏱ Time Limit: 30 Minutes

### 🎯 Focus: State management, derived values, conditional rendering, business logic

---

## 🛒 Scenario

You are building a **Mini E-Commerce Cart System**.

You are given a list of products:

```js
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];
```

---

## ✅ Requirements

### 1️⃣ Display Products

- Show product name
- Show price
- Add "+" and "-" buttons to increase/decrease quantity

---

### 2️⃣ Quantity Rules

- Default quantity = 0
- Quantity cannot go below 0
- Quantity cannot exceed 5 per product

---

### 3️⃣ Cart Summary Section

Display:

- Total Items (sum of all quantities)
- Total Price
- If total price > ₹50,000 → Apply 10% discount
- Show final payable amount
- Show message:
  - "Free Delivery Applied" if total > ₹30,000
  - "Add ₹X more for Free Delivery" otherwise

---

### 4️⃣ Reset Button

- Reset all quantities to 0

---

## 🧠 Logical Thinking Required

You must figure out:

- How to store quantities?
- How to calculate derived values?
- Where to compute discount logic?
- How to avoid recalculating on every render?
- Should you use `useMemo`?

---

## 🔥 Bonus (If time remains)

- Disable "+" button when quantity = 5
- Highlight product row when quantity > 0
- Show "Cart is Empty" if no items selected

---

# 🎯 What This Tests

- State design
- Derived state
- Business logic handling
- Conditional rendering
- Performance thinking
- Clean component structure

---

# 📌 Rules

- Functional Components only
- Hooks only
- No external libraries
- Clean UI not required, focus on logic

---

When you're ready, reply:

👉 `Start solving`

Then I’ll guide you like a real interviewer (without giving solution immediately). 🚀
