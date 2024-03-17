import { useState } from "react";
import CardDetail from "./CardDetail";
import Cards from "./Cards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = () => {
    const [cards, setCards] = useState([]);
    const [cook, setCook] = useState([]);
    const [time, setTime] = useState(0)
    const [calories, setCalories] = useState(0);

    const notify = () => toast("Already Exist!");

    const handleWantToCook = (item) => {
        const isExist = cards.find((card) => card.recipe_id == item.recipe_id);
        if (!isExist) {
            setCards([...cards, item]);
        } else {
            notify();
        }
    }
    // console.log(cards);

    const handleCurrentlyCooking = (item) => {
        const newCart = cards.filter((card) => card !== item);
        const newCook = cards.find((card) => card == item);
        setCards(newCart);
        setCook([...cook, newCook]);
        // setCalories()
        setCalories(parseFloat(newCook.calories) + calories);
        setTime(parseFloat(newCook.preparing_time) + time);
    }
    // console.log(calories);

    return (
        <div >
            <div className="text-center">
                <h1 className="text-[#150B2B] text-2xl lg:text-[40px] font-semibold mb-2 lg:mb-6">Our Recipes</h1>
                <p className="text-[rgba(21,11,43,0.60)] text-sm lg:text-base font-normal lg:w-[55%] mx-auto mb-8 lg:mb-12">Discover mouthwatering recipes for every craving. From savory delights to sweet treats, explore our diverse collection of culinary creations. </p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row mb-[100px]">
                <Cards
                    handleWantToCook={handleWantToCook}
                ></Cards>
                <CardDetail
                    cards={cards}
                    handleCurrentlyCooking={handleCurrentlyCooking}
                    cook={cook}
                    time = {time}
                    calories = {calories}
                ></CardDetail>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Container;