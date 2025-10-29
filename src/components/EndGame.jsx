const EndGame = ({setHasWon, setFlippedCard}) => {

    const handleEngameReset = () => {
        setHasWon(false);
        setFlippedCard({});
    }

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <h2 className="text-white text-3xl">You won!</h2>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded" onClick={handleEngameReset}>
                Replay
            </button>
        </div>
    )
}

export default EndGame;