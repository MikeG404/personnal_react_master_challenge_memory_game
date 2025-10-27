const Card = ({elem}) => {


    return (
        <div className="w-full flex justify-center items-center aspect-square rounded-2xl border border-black">
            <div id="front" className="text-xl">
                <h3>FRONT</h3>
            </div>
            <div id="back" className="text-7xl hidden">
                {elem}
            </div>
        </div>
    )
}

export default Card;