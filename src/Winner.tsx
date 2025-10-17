const Winner = (props) => {
    const handleReset = () => {
        props.rstGame()
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">{props.sqState?"Squashed Game!" : "Winner!"}</h1>
            <button className="border-2 rounded-full p-2 hover:bg-red-600 hover:text-white" onClick={handleReset}>Reset Game</button>
        </div>
    )
}

export default Winner