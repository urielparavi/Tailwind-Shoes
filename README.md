# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 📦 Installing Code Formatting and SVG Tools

To install Prettier, Tailwind class sorting support, and SVG importing as React components in a Vite-based project:

```bash
npm install -D prettier prettier-plugin-tailwindcss vite-plugin-svgr
```

## 📦 Installing React Icons

To install the `react-icons` package for easy access to popular icons in your React project, run the following command:

```bash
npm install react-icons
```

### 🖋️ Font

We use the **Nunito Sans** variable font in this project to achieve a modern and clean typographic style, with smooth control over font weights using a single file.

The font is added using the [@fontsource-variable/nunito-sans](https://www.npmjs.com/package/@fontsource-variable/nunito-sans) package, which allows self-hosting the font directly from `node_modules`, without relying on external CDNs.

To install, import, and apply the font:

```bash
npm install @fontsource-variable/nunito-sans
```

```js
// Import the font in your entry file (e.g., index.js)
import '@fontsource-variable/nunito-sans';
```

```css
/* Apply the font in your global styles */
body {
  font-family: 'Nunito Sans Variable', sans-serif;
}
```

Using a variable font improves performance and flexibility, since it includes multiple weights and styles in one file — perfect for responsive and scalable UI design.

---

## ✨ Tailwind Class Merge with `tw-merge`

When working with Tailwind CSS, it’s common to accidentally apply conflicting utility classes. For example:

```js
<div className="text-sm text-lg text-red-500 text-blue-500" />
```

Tailwind applies **all** of these, but only the **last one wins**, which can lead to messy or redundant code.

---

### ✅ Solution: [`tw-merge`](https://github.com/dcastil/twmerge)

`tw-merge` is a utility that **merges Tailwind classes intelligently**, keeping only the relevant ones.

---

### 📦 Installation

```bash
npm install tw-merge
```

or with yarn:

```bash
yarn add tw-merge
```

---

### 🚀 Basic Usage

```js
import { twMerge } from 'tw-merge';

const buttonClass = twMerge('px-4 py-2 bg-blue-500 bg-red-500');
// Result: "px-4 py-2 bg-red-500"
```

It automatically resolves conflicts:

- `bg-*`, `text-*`, `flex` vs `inline-flex`, etc.
- Responsive classes (`md:*`)
- Pseudo classes (`hover:*`, `focus:*`)

---

### 🧠 Why Use It?

- Prevents class bloat and conflicts.
- Keeps your components clean.
- Plays nicely with tools like `clsx`, `tailwind-variants`, and `cva`.

---

### 🔁 Combine with `clsx` or `classnames`

```js
import { twMerge } from 'tw-merge';
import clsx from 'clsx';

const className = twMerge(
  clsx('px-4', isPrimary ? 'bg-blue-500' : 'bg-gray-500', 'bg-red-500'),
);
// Result: "px-4 bg-red-500"
```

---

### 🧩 Works great with component libraries and conditional styles!

Want to take it further? Use it with:

- `tailwind-variants`
- `cva` (class variance authority)

---

### 📚 More Info

GitHub: [dcastil/twmerge](https://github.com/dcastil/twmerge)

---

Happy Tailwinding! 🌬️
