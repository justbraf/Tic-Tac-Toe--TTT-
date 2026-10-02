import Square from './Square'

const Board = () => {
  return (
    <div className='grid grid-cols-3 gap-1 w-100 h-100 bg-stone-300'>
      {/* the attribute played is the prop defined in the component and we pass the desired value to it */}
      <Square played='X'/>
      <Square played='O'/>
      <Square played='X'/>
      <Square played='X'/>
      <Square played='O'/>
      <Square played='X'/>
      <Square played='O'/>
      <Square played='X'/>
      <Square played='O'/>
    </div>
  )
}

export default Board