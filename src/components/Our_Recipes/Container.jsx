import CardDetail from "./CardDetail";
import Cards from "./Cards";

const Container = () => {

    const handleWantToCook = () => {
        console.log('cook');
    }

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
                <CardDetail></CardDetail>
            </div>

        </div>
    );
};

export default Container;