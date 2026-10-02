# Task 7: ResetButton Component

## Goal
Button to start a new game (preserves scores)

## File: `src/components/ResetButton.jsx`

## Props
- `onClick`: () => void
- `label`: string (default: "New Game")

## Rendering
- `<button>` with Tailwind:
  - `px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`
- Disabled state not needed (always clickable)

## Acceptance Criteria
- Calls onClick when clicked
- Styled consistently with app
- Accessible (focus ring, semantic button)

## Estimated Time: 10 minutes