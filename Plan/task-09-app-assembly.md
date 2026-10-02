# Task 9: App Assembly

## Goal
Wire all components together in main App component

## File: `src/App.jsx`

## Structure
```jsx
function App() {
  const { 
    board, isXTurn, winner, winningLine,
    makeMove, resetGame, resetScores,
    xWins, oWins, draws
  } = useGameLogic();

  const handleSquareClick = (index) => {
    if (!winner && !board[index]) makeMove(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Tic Tac Toe</h1>
        <p className="text-gray-500 mt-1">Two Player Local</p>
      </header>

      <Scoreboard 
        xWins={xWins} oWins={oWins} draws={draws}
        onResetScores={resetScores}
      />

      <GameStatus isXTurn={isXTurn} winner={winner} />

      <Board
        board={board}
        onSquareClick={handleSquareClick}
        winningLine={winningLine}
        gameOver={!!winner}
      />

      <div className="mt-6 text-center">
        <ResetButton onClick={resetGame} />
      </div>
    </div>
  );
}
```

## main.jsx
- Standard Vite React entry
- Import `./index.css` (Tailwind)

## Acceptance Criteria
- All components connected to hook
- Game plays correctly end-to-end
- Scores update and persist
- New Game resets board only
- Reset Scores clears all counters

## Estimated Time: 20-25 minutes