# Tic Tac Toe Implementation Plan (React + TailwindCSS)

## Project Setup
- **Build tool**: Vite (fast, modern, minimal config)
- **Styling**: TailwindCSS v4 (or v3 with PostCSS)
- **Structure**: Component-based architecture

```
src/
├── components/
│   ├── Board.tsx       # 3x3 grid container
│   ├── Square.tsx      # Individual cell
│   ├── GameStatus.tsx  # Turn indicator, winner/draw message
│   ├── ResetButton.tsx # New game button
│   └── Scoreboard.tsx  # Shows X/O/Draw counts
├── hooks/
│   └── useGameLogic.ts # Custom hook for game state/logic + scores
├── utils/
│   └── winPatterns.ts  # Winning combinations
├── App.tsx
├── main.tsx
└── index.css           # Tailwind imports
```

## Core Features

| Feature | Implementation |
|---------|----------------|
| **Board State** | `useState` array of 9 nulls ('X'/'O'/null) |
| **Turn Management** | Boolean `isXTurn` toggles after valid move |
| **Win Detection** | Check 8 winning patterns after each move |
| **Draw Detection** | Board full + no winner |
| **Reset Game** | Clear board, reset turn to X |
| **Score Tracking** | `xWins`, `oWins`, `draws` counters in localStorage |
| **Reset Scores** | Separate button to clear scoreboard |

## TailwindCSS Design

- **Grid**: `grid grid-cols-3 gap-2` (responsive sizing)
- **Squares**: `aspect-square border-2 border-gray-300 text-4xl font-bold hover:bg-gray-100`
- **Winning line**: Highlight 3 winning squares with `bg-green-200`
- **Status**: Large text, color-coded (blue for X, red for O, green for win)
- **Scoreboard**: Flex row with three score cards
- **Mobile-first**: Scales down on small screens

## Game Flow (Two Player Local)
1. X always starts
2. Players alternate clicking empty squares
3. After each move: check win → check draw → toggle turn
4. On win: highlight winning line, increment score, show winner
5. On draw: increment draws, show draw message
6. "New Game" resets board only (keeps scores)
7. "Reset Scores" clears all counters

## Implementation Order
1. **Project init** → `npm create vite@latest . -- --template react` + Tailwind install
2. **Game logic hook** → `useGameLogic` with board, turn, winner, scores + localStorage
3. **Core components** → Square → Board → GameStatus → ResetButton
4. **Scoreboard component** → Reads scores from hook, displays + reset button
5. **App assembly** → Wire everything together
6. **Polish** → Responsive tweaks, hover states, winning highlight