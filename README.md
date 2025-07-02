# Dashboard App

A modern React + TypeScript dashboard application scaffolded with Vite, featuring modular routing, reusable components, and a simple stateful settings form.

---

## Installation & Local Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Project Structure

```
src/
  components/      # Reusable UI components (Header, Sidebar, etc.)
  features/        # Feature modules (Settings, Users, Overview)
  routes/          # Route definitions for TanStack Router
  shared/          # Shared utilities, types, and constants
  assets/          # Static assets (images, etc.)
  index.css        # Global styles
  main.tsx         # App entry point
  routeTree.gen.ts # Auto-generated route tree
```

---

## Routing Implementation

- **Library:** [@tanstack/react-router](https://tanstack.com/router)
- **Structure:**  
  - All routes are defined in `src/routes/` as individual files.
  - The root layout is in `__root.tsx`, which provides the sidebar and main content area.
  - Each feature (e.g., Settings, Users, Overview) has its own route file (e.g., `settings.tsx`) that renders the corresponding feature component.
  - The route tree is auto-generated in `routeTree.gen.ts` and used in `main.tsx` to initialize the router.

---

## State Management Approach

- **Local State:**  
  - The app uses React's built-in `useState` and `useEffect` for local state management within components.
  - Example: The Settings page manages its own form state (theme, notifications, username) locally.
- **No global state management library** is used, keeping the app simple and easy to maintain.

---

## Components Structure & Reusability

- **Reusable Components:**  
  - `src/components/` contains UI elements like `Header` and `Sidebar` that are used across multiple features.
  - Components are designed to be stateless and accept props for maximum reusability.
- **Feature Modules:**  
  - Each feature (Settings, Users, Overview) is isolated in its own folder under `src/features/`.
  - Feature components can use shared components and manage their own state.

---

## Example: Settings Page

- Demonstrates a simple form with:
  - Theme switcher (toggles a class on the body for dark/light mode)
  - Checkbox (Enable notifications)
  - Text input (Username)
  - Live preview of form data

---

## Further Notes

- **Styling:**  
  - The project uses a combination of custom CSS and utility classes for styling.
- **Extensibility:**  
  - The modular structure makes it easy to add new features, routes, or shared components.

---

Feel free to customize this README further to match your project's evolution!
