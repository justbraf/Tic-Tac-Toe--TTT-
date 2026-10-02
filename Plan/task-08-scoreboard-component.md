# Task 8: Scoreboard Component

## Goal
Display X wins, O wins, Draws with reset button

## File: `src/components/Scoreboard.jsx`

## Props
- `xWins`, `oWins`, `draws`: numbers
- `onResetScores`: () => void

## Rendering
- Wrapper: `flex justify-center gap-4 mb-6 flex-wrap`
- Three score cards (X, O, Draws):
  - `flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-200 min-w-[80px]`
  - Label: `text-sm text-gray-500 uppercase tracking-wide` ("X Wins", "O Wins", "Draws")
  - Value: `text-3xl font-bold` (X: `text-blue-600`, O: `text-red-600`, Draws: `text-yellow-600`)
- Reset Scores button:
  - `mt-4 px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors`
  - Label: "Reset Scores"
  - Confirmation: `window.confirm("Reset all scores?")` before calling onResetScores

## Acceptance Criteria
- Displays three counters with correct colors
- Updates reactively when scores change
- Reset button clears scores after confirmation
- Responsive (stacks on small screens)

## Estimated Time: 20-25 minutes