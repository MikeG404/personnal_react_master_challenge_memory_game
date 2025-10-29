import { useState, useEffect } from "react";
import Card from "./Card";

const cardElements = [
  { id: 0, value: "🌧️" },
  { id: 1, value: "📚" },
  { id: 2, value: "🌈" },
  { id: 3, value: "🌧️" },
  { id: 4, value: "🔥" },
  { id: 5, value: "💡" },
  { id: 6, value: "🌞" },
  { id: 7, value: "🐶" },
  { id: 8, value: "🎮" },
  { id: 9, value: "🍕" },
  { id: 10, value: "🌈" },
  { id: 11, value: "🐶" },
  { id: 12, value: "🌞" },
  { id: 13, value: "🍕" },
  { id: 14, value: "📚" },
  { id: 15, value: "💡" },
  { id: 16, value: "❄️" },
  { id: 17, value: "🔥" },
  { id: 18, value: "❄️" },
  { id: 19, value: "🎮" }
];

const CardGrid = () => {
    const [flippedCard, setFlippedCard] = useState({})
    const [selectedCards, setSelectedCards] = useState([]);
    const [hasWon, setHasWon] = useState(false);

    useEffect(() => {
    if (selectedCards.length === 2) {
        const [first, second] = selectedCards        

        if (first.value === second.value) {
            if (Object.entries(flippedCard).length === cardElements.length) {
                setTimeout(() => {
                    setFlippedCard({})
                }, 1000)
                setHasWon(true);
            }
        } else {
            setTimeout(() => {  
                setFlippedCard((prev) => {
                    const updated = { ...prev };
                    delete updated[first.id];
                    delete updated[second.id];
                    return updated;
                })
            }, 1500)
        }
        setSelectedCards([]);
        }
    }, [selectedCards])

    const handleFlip = (card) => {
        if (flippedCard[card.id] || selectedCards.length >= 2) return;

        setFlippedCard((prev) => ({
            ...prev,
            [card.id]: true,
        }))

        setSelectedCards((prev) => [...prev, card])
    }

    return (
        <section className="w-screen grid grid-cols-5 gap-5 p-10">
            {hasWon && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <h2 className="text-white text-3xl">Vous avez gagné !</h2>
                    <button className="mt-4 px-4 py-2 bg-white text-black rounded" onClick={() => {
                        setHasWon(false);
                        setFlippedCard({});
                    }}>
                        Rejouer
                    </button>
                </div>
            )}
            { cardElements.map((elem) => {
                return (
                    <Card 
                        key={elem.id} 
                        elem={elem.value}
                        isFlipped={!!flippedCard[elem.id]}
                        handleFlip={() => handleFlip(elem)}
                        />
                )
            })}
        </section>
    )
}

export default CardGrid;