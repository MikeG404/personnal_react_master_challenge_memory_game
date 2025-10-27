const Card = ({elem, handleFlip, isFlipped}) => {

    return (
        <div onClick={handleFlip} className="w-full flex justify-center items-center aspect-square rounded-2xl border border-black">
            <div id="front" className={`text-xl ${isFlipped ? "hidden" : ""}`}>
                <h3>FRONT</h3>
            </div>
            <div id="back" className={`${isFlipped ? "" : "hidden"} text-7xl`}>
                {elem}
            </div>
        </div>
    )
}

export default Card;