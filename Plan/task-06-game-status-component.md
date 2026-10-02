# Task 6: GameStatus Component

## Goal
Display current turn, winner, or draw message

## File: `src/components/GameStatus.jsx`

## Props
- `isXTurn`: boolean
- `winner`: 'X' | 'O' | 'draw' | null

## Rendering
- Container: `text-center mb-4 text-xl font-medium`
- **Turn** (no winner): 
  - "Player X's turn" / "Player O's turn"
  - X: `text-blue-600`, O: `text-red-600`
- **Winner**:
  - "🎉 Player X Wins!" / "🎉 Player O Wins!"
  - `text-green-600 text-2xl font-bold animate-pulse`
- **Draw**:
  - "🤝 It's a Draw!"
  - `text-yellow-600 text-2xl font-bold`

## Acceptance Criteria
- Shows correct message for each state
- Color-coded by player
- Winner message prominent with animation
- Updates reactively when props change

## Estimated Time: 15 minutes