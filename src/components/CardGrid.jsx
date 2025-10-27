import { useState } from "react";
import Card from "./Card";

const cardElement = [
  "🌧️",
  "📚",
  "🌈",
  "🌧️",
  "🔥",
  "💡",
  "🌞",
  "🐶",
  "🎮",
  "🍕",
  "🌈",
  "🐶",
  "🌞",
  "🍕",
  "📚",
  "💡",
  "❄️",
  "🔥",
  "❄️",
  "🎮"
];



const CardGrid = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const handleFlip = (id) => {
        const flipped =  Object.entries(flippedCards).filter(([_, value]) => value)
        if (flipped.length >= 2) return

        setFlippedCards((prev) => ({
        ...prev,
        [id]: !prev[id],
        }));
    };

    return (
        <section className="grid grid-cols-5 gap-5 p-10">
            { cardElement.map((elem, idx) => {
                return (
                    <Card 
                        key={idx} 
                        elem={elem}
                        isFlipped={!!flippedCards[idx]}
                        handleFlip={() => handleFlip(idx)}/>
                )
            })}
        </section>
    )
}

export default CardGrid;