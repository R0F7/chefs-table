import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import PropTypes from 'prop-types';

const Cards = ({handleWantToCook}) => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    // console.log(cards);

    return (
        <div className="lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            {/* <h4 className="text-4xl">cart</h4> */}
            {
                cards.map((card) => <Card
                key={card.recipe_id}
                card = {card}
                handleWantToCook = {handleWantToCook}
                ></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    handleWantToCook: PropTypes.func,
}

export default Cards;