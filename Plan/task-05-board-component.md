# Task 5: Board Component

## Goal
3x3 grid container rendering 9 Square components

## File: `src/components/Board.jsx`

## Props
- `board`: Array(9) — current board state
- `onSquareClick`: (index) => void
- `winningLine`: Array(3) | null — indices to highlight
- `gameOver`: boolean — disable all squares when true

## Rendering
- Wrapper: `grid grid-cols-3 gap-2 max-w-xs mx-auto`
- Map `board` to 9 `<Square />` components
- Pass `isWinning={winningLine?.includes(index)}`
- Pass `disabled={gameOver || board[index] !== null}`

## Acceptance Criteria
- Renders 3x3 grid responsive (scales on mobile)
- Correctly passes props to each Square
- Winning squares highlighted
- No clicks allowed after game over or on filled squares

## Estimated Time: 15-20 minutes