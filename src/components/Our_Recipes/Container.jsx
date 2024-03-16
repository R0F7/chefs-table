import { useState } from "react";
import CardDetail from "./CardDetail";
import Cards from "./Cards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = () => {
    const [cards, setCards] = useState([]);
    const [cook, setCook] = useState([]);
    const notify = () => toast("all ready added!");

    const handleWantToCook = (item) => {
        const isExist = cards.find((card) => card.recipe_id == item.recipe_id);
        if (!isExist) {
            setCards([...cards, item]);
        }else{
            notify();
        }
    }
    // console.log(cards);

    const handleCurrentlyCooking = () => {
        // setCook([...cards]);
        // setCards([]);
    }
    // console.log(cook);

    return (
        <div >
            <div className="text-center">
                <h1 className="text-[#150B2B] text-[40px] font-semibold mb-6">Our Recipes</h1>
                <p className="text-[rgba(21,11,43,0.60)] text-base font-normal w-[55%] mx-auto mb-12">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="flex mb-[100px]">
                <Cards
                handleWantToCook = {handleWantToCook}
                ></Cards>
                <CardDetail
                cards = {cards}
                handleCurrentlyCooking = {handleCurrentlyCooking}
                cook = {cook}
                ></CardDetail>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Container;