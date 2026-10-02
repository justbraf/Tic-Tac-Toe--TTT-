# Task 1: Project Setup

## Goal
Initialize Vite + React project and install/configure TailwindCSS

## Steps
1. Run `npm create vite@latest . -- --template react` in project root
2. Run `npm install`
3. Install TailwindCSS:
   - `npm install -D tailwindcss @tailwindcss/vite` (v4) OR
   - `npm install -D tailwindcss postcss autoprefixer` + `npx tailwindcss init -p` (v3)
4. Configure Tailwind in Vite config / CSS entry
5. Add Tailwind directives to `src/index.css`
6. Run `npm run dev` to verify

## Acceptance Criteria
- `npm run dev` starts without errors
- Tailwind utility classes work in components
- Hot module replacement works

## Estimated Time: 15-20 minutes