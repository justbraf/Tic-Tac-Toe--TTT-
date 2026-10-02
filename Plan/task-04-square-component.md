# Task 4: Square Component

## Goal
Individual clickable board cell

## File: `src/components/Square.jsx`

## Props
- `value`: 'X' | 'O' | null
- `onClick`: () => void
- `isWinning`: boolean — highlight if part of winning line
- `disabled`: boolean — prevent clicks after game over

## Rendering
- `<button>` with Tailwind classes:
  - Base: `aspect-square w-full border-2 border-gray-300 text-4xl font-bold transition-colors`
  - Hover (enabled): `hover:bg-gray-100`
  - Winning: `bg-green-200 border-green-400`
  - Disabled: `cursor-not-allowed opacity-75`
  - X color: `text-blue-600`
  - O color: `text-red-600`

## Accessibility
- `aria-label` showing position or "empty"
- `disabled` attribute when prop true
- Focus visible styles

## Acceptance Criteria
- Displays X/O/empty correctly
- Click calls onClick
- Visual feedback for hover, winning, disabled
- Accessible keyboard navigation

## Estimated Time: 20 minutes