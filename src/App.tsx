import { useState } from "react"
import Square from "./Square"
import Winner from "./Winner"

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
    ],
    winner: false,
    squash: false
  })

  const checkWinner = (theGrid) => {
    // check for horizontal winner
    for (let offset = 0; offset <= 6; offset += 3) {
      if (theGrid[0 + offset] != EMPTY && theGrid[0 + offset] == theGrid[1 + offset] && theGrid[1 + offset] == theGrid[2 + offset]) {
        return true
      }
    }
    // check for vertical winner
    for (let offset = 0; offset <= 2; offset++) {
      if (theGrid[0 + offset] != EMPTY && theGrid[0 + offset] == theGrid[3 + offset] && theGrid[3 + offset] == theGrid[6 + offset]) {
        return true
      }
    }
    // check for diagonal winner
    for (let offset = 0; offset <= 2; offset += 2) {
      if (theGrid[0 + offset] != EMPTY && theGrid[0 + offset] == theGrid[4 + offset] && theGrid[4 + offset] == theGrid[8 - offset]) {
        return true
      }
    }

    return false
  }

  const checkSquash = (theGrid) => {
    return !theGrid.includes(EMPTY) && !board.winner
  }

  const handleTurn = (pos) => {
    const allBoardPositions = [...board.position]
    allBoardPositions[pos] = board.player
    setBoard({
      player: board.player == CROSS ? CIRCLE : CROSS,
      position: allBoardPositions,
      winner: checkWinner(allBoardPositions),
      squash: checkSquash(allBoardPositions)
    })
  }

  const resetGame = () => {
    setBoard({
      player: CROSS,
      position: [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
      ],
      winner: false,
      squash: false
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
      {board.winner && <Winner rstGame={resetGame} sqState={board.squash}/>}
      {board.squash && <Winner rstGame={resetGame} sqState={board.squash}/>}
    </div>
  )
}

export default App
