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

    useEffect(() => {
    if (selectedCards.length === 2) {
        const [first, second] = selectedCards        

        if (first.value === second.value) {
            console.log("You got one");
        } else {
            console.log("Bad match");
            setFlippedCard((prev) => {
                const updated = { ...prev };
                delete updated[first.id];
                delete updated[second.id];
                return updated;
            })
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
        <section className="grid grid-cols-5 gap-5 p-10">
            { cardElements.map((elem) => {
                return (
                    <Card 
                        key={elem.id} 
                        elem={elem.value}
                        isFlipped={!!flippedCard[elem.id]} // Si il y a une carte retourné on passe true
                        handleFlip={() => handleFlip(elem)}
                        />
                )
            })}
        </section>
    )
}

export default CardGrid;