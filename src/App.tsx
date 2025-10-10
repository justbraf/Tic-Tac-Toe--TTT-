import { useState } from "react"
import Square from "./Square"

function App() {
  const CIRCLE = "CIRCLE"
  const CROSS = "CROSS"
  const EMPTY = "EMPTY"

  const [board, setBoard] = useState({
    player: CROSS,
    position: [
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY
    ]
  })

  const handleTurn = (pos) => {
    const allBoardPositions = [...board.position]
    allBoardPositions[pos] = board.player
    setBoard({
      player: board.player == CROSS ? CIRCLE : CROSS,
      position: allBoardPositions
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl">Tic Tac Toe</h1>
      {/* st grid box */}
      <div className="grid grid-cols-3 gap-1 bg-stone-400">
        <Square position={0} value={board.position[0]} takeTurn={handleTurn} />
        <Square position={1} value={board.position[1]} takeTurn={handleTurn} />
        <Square position={2} value={board.position[2]} takeTurn={handleTurn} />
        <Square position={3} value={board.position[3]} takeTurn={handleTurn} />
        <Square position={4} value={board.position[4]} takeTurn={handleTurn} />
        <Square position={5} value={board.position[5]} takeTurn={handleTurn} />
        <Square position={6} value={board.position[6]} takeTurn={handleTurn} />
        <Square position={7} value={board.position[7]} takeTurn={handleTurn} />
        <Square position={8} value={board.position[8]} takeTurn={handleTurn} />
      </div>
      {/* end grid box */}
      <p className="text-xl">Player {board.player == CROSS ? "X's" : "O's"} Turn</p>
    </div>
  )
}

export default App
