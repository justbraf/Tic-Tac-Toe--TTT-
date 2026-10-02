# Task 2: Game Logic Hook (`useGameLogic`)

## Goal
Create custom hook managing all game state and logic

## File: `src/hooks/useGameLogic.js`

## State to Manage
- `board`: Array(9) — null/'X'/'O'
- `isXTurn`: Boolean — true = X's turn
- `winner`: null/'X'/'O'/'draw'
- `winningLine`: Array(3) — indices of winning squares (for highlighting)
- `xWins`, `oWins`, `draws`: Numbers — persisted in localStorage

## Functions to Expose
- `makeMove(index)` — place mark, check win/draw, toggle turn
- `resetGame()` — clear board, reset turn, clear winner/line
- `resetScores()` — zero all counters, update localStorage

## Win Detection
- Import `WIN_PATTERNS` from `utils/winPatterns.js`
- Check after each move; set `winner` + `winningLine`
- If full board + no winner → `winner = 'draw'`

## localStorage
- Load scores on mount: `JSON.parse(localStorage.getItem('ttt-scores'))`
- Save on any score change

## Acceptance Criteria
- Hook returns all state + functions
- Scores persist across refresh
- Win/draw detected correctly
- No mutations of state directly

## Estimated Time: 30-40 minutes