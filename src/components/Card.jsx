import { useState } from "react";


const Card = ({elem}) => {
    const [isFlipped, setFlipped] = useState(false);

    const onFlipCard = () => {
        setFlipped(true)
    }

    return (
        <div onClick={onFlipCard} className="w-full flex justify-center items-center aspect-square rounded-2xl border border-black">
            <div id="front" className={`text-xl ${isFlipped ? "hidden" : ""}`}>
                <h3>FRONT</h3>
            </div>
            <div id="back" className={`${isFlipped ? "" : "hidden"}`}>
                {elem}
            </div>
        </div>
    )
}

export default Card;