# 🎓 Student Scoreboard

A React-based student score management application built with Vite. View, update, and manage student records with a clean dark-themed UI featuring real-time pass/fail status and dynamic score updates.

---

## 📸 Features

- 📋 **View Students** — Display all students in a structured table with name, score, grade, and status
- ✏️ **Update Scores** — Inline score editing per student with instant UI feedback
- ➕ **Add Students** — Form to add new students with validation and success feedback
- ✅ **Pass/Fail Status** — Automatically determined (Pass ≥ 40, Fail < 40) with color-coded badges
- 📊 **Live Stats** — Real-time cards showing Total Students, Passed, Failed, and Class Average
- 💅 **Dark UI** — Aurora-themed dark background with neon glows, shimmer effects, and animated hover states

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| JavaScript (JSX) | Component logic |
| Pure CSS | Styling — no Tailwind, no UI libraries |
| Google Fonts | `Outfit` + `Space Mono` typefaces |

---

## 📁 Project Structure

```
student-scoreboard/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root component — holds all state
    ├── App.css               # Global styles
    ├── index.css             # Base reset
    └── components/
        ├── Header.jsx        # App title & subtitle
        ├── StudentTable.jsx  # Table wrapper with header
        ├── StudentRow.jsx    # Individual student row (reusable)
        └── AddStudentForm.jsx # Controlled form to add students
```

---

## 🧩 Component Overview

### `App.jsx`
The root component. Owns all state (`students` array) and passes data/handlers down via props.

- `students` — array of `{ id, name, score }` objects
- `updateScore(id, newScore)` — updates a student's score by id
- `addStudent(name, score)` — appends a new student to the list
- Computes `passCount`, `failCount`, and `avgScore` for the stats grid

### `Header`
Displays the app title with an animated icon, gradient text, and subtitle.

### `StudentTable`
Receives the `students` array and `onUpdateScore` handler. Renders the `<table>` structure and maps each student to a `StudentRow`. Shows an empty state if no students exist.

### `StudentRow`
Reusable row component. Manages its own local `inputScore` state for the inline update field. Calls `onUpdateScore` on button click or Enter key press. Clamps score between 0–100.

### `AddStudentForm`
Controlled form with `name` and `score` fields. Validates inputs, calls `onAddStudent` on success, clears the form, and shows a timed success message.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone or unzip the project
cd student-scoreboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local dev server at `localhost:5173` |
| `npm run build` | Bundle the app for production |
| `npm run preview` | Preview the production build locally |

---

## 📐 Pass / Fail Logic

| Score | Status |
|-------|--------|
| ≥ 40  | ✅ Pass (green badge) |
| < 40  | ❌ Fail (red badge) |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.2"
  }
}
```

---

## 👨‍💻 Assignment Info

- **Assignment:** React Component Architecture (Assignment 3)
- **Tools:** React + Vite, JSX, Pure CSS
- **Concepts covered:** Functional components, useState, props, conditional rendering, controlled forms, reusable components

---

> Built with React + Vite · Pure CSS · No external UI libraries
