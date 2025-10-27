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

    return (
        <section className="grid grid-cols-5 gap-5 p-10">
            { cardElement.map((elem, idx) => {
                return (
                    <Card 
                        key={idx} 
                        elem={elem}
                        />
                )
            })}
        </section>
    )
}

export default CardGrid;