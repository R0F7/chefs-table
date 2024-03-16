import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('../../../public/fakeData.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    // console.log(cards);

    return (
        <div className="w-2/3 grid grid-cols-2 gap-10">
            {/* <h4 className="text-4xl">cart</h4> */}
            {
                cards.map((card) => <Card
                key={card.recipe_id}
                card = {card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;