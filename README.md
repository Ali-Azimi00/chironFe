# React + TypeScript + Vite

Chiron is a productivity app meant to visualize your progress across
a variety of tasks. Track you're progress with the experience you gain, level
up your avatar while you level up IRL.



## Vite
> npm create vite@latest my-app-name -- --template react-ts

## TailWind CSS set up step-by-step:
CLI:
> npm create vite@latest my-project -- --template react
> cd my-project

> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

tailwind.config.js file:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
./src/index.css file:
```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```
CLI:
> npm run dev


## Other Libraries
> npm install @headlessui/react
> npm install @heroicons/react

