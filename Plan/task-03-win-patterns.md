# Task 3: Win Patterns Utility

## Goal
Define all 8 winning combinations for tic-tac-toe

## File: `src/utils/winPatterns.js`

## Export
```js
export const WIN_PATTERNS = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // cols
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6]
];
```

## Usage
Imported by `useGameLogic.js` to check for wins after each move.

## Acceptance Criteria
- Exports constant array of 8 patterns
- Each pattern is array of 3 indices (0-8)
- Covers all rows, columns, diagonals

## Estimated Time: 5 minutes