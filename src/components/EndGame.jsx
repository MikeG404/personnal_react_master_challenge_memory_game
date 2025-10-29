const EndGame = ({ setHasWon, setFlippedCard }) => {

    const handleEngameReset = () => {
        setHasWon(false);
        setFlippedCard({});
    }

    return (
        <div className="flex flex-col gap-8 absolute inset-0 flex items-center justify-center z-50">

            <h2 className="bg-gradient-to-r from-yellow-200 to-yellow-500 text-9xl text-transparent bg-clip-text drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">You won!</h2>

            <button
            onClick={handleEngameReset}
                class="group/button drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] relative inline-flex items-center justify-center overflow-hidden rounded-md bg-yellow-500 backdrop-blur-lg px-12 py-4 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
            >
                <span class="text-4xl">Replay</span>
                <div
                    class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                >
                    <div class="relative h-full w-10 bg-white/20"></div>
                </div>
            </button>

        </div>
    )
}

export default EndGame;