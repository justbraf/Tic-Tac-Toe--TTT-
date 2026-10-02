
// import the only the CellValue type for use
import type { CellValue } from "../types/game"
// import the two React components needed
import Circle from "./Circle"
import Cross from "./Cross"

// define a child property (prop) called played and declare its type as CellValue
const Square = ({ played }: { played: CellValue }) => {
  return (
    <div className="bg-white flex justify-center items-center">
      {
        // everything defined between curly braces here is seen as JavaScript
        // Below uses a ternary operator which is like a short-hand if-else statement
        // it reads if played is equal to X then show the Cross component else show the Circle component
        played == 'X' ? <Cross /> : <Circle />
      }
    </div>
  )
}

export default Square