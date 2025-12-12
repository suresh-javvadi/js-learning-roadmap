# JavaScript Execution Context & Call Stack

## What is JavaScript?

- **JavaScript (JS)** is a programming language used to make websites interactive.
- It runs in the **browser (frontend)** and can also be used on the **server-side** using Node.js.
- Everything in JavaScript happens inside an **Execution Context**.

---

## Execution Context

An **Execution Context** is like a container, and it has two main parts:

1. **Variable Environment (Memory Component)**

   - Stores all variables and functions as **key-value pairs**.

2. **Thread of Execution (Code Component)**
   - Like a thread — executes JS code **one line at a time**.

---

## Nature of JavaScript

- JavaScript is a **synchronous, single-threaded language**.
- It executes **one command at a time** in a specific order.
- JS moves to the next line **only after** the current line is executed.

---

## JS Code Execution Process

When JS code runs, a **Global Execution Context (GEC)** is created.  
This process happens in **two phases**:

### 1. Memory Creation Phase

- JS allocates memory for **every variable and function**. In that memory
- Variables → stores a spacial value called `undefined` initially.
- Functions → entire function definition is stored.

### 2. Code Execution Phase

- JS executes code **line by line**.
- Variables → `undefined` is replaced with actual values.
- When a function is invoked:

  - A **new execution context** is created.
  - Memory is allocated for variables inside that function.
  - Function code executes line by line.
  - After execution, that **execution context is deleted**.

- After the last line executes, the **Global Execution Context (GEC)** is also deleted.

---

## Call Stack

The **Call Stack** manages creation and deletion of execution contexts:

1. At program start → **GEC is pushed** into the Call Stack.
2. When a function is invoked → a **new Execution Context (EC)** is created and **pushed on top** of the GEC.
3. When the function finishes → its EC is **popped off** the stack, and control returns to the GEC.
4. This continues for all functions.
5. After program finishes → the **GEC is also popped out**, leaving the stack empty.

---

## Visual Summary (Call Stack Behavior)

```
Start: Call Stack = [ GEC ]

Function invoked → stack = [ GEC, EC1 ]
Function completed → stack = [ GEC ]

Another function invoked → stack = [ GEC, EC2 ]
Execution completed → stack = [ GEC ]

End of program → stack = [ ]
```
