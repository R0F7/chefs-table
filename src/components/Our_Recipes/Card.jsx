import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Card = ({ card, handleWantToCook }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = card;
    // console.log(parseFloat(calories));
    // console.log(card);

    return (
        <div>
            <div className="card card-compact bg-base-100 border border-[rgba(40,40,40,0.20)] p-6">
                <div className=' h-[270px]'><img className='rounded-2xl mb-6 w-full h-full' src={recipe_image} alt={recipe_name} /></div>
                <div className="mt-6">
                    <h2 className="card-title mb-4 text-[#282828] text-xl font-semibold">{recipe_name}</h2>
                    <p className='text-[#878787] font-normal text-base mb-4'>{short_description}</p>
                    <hr />
                    <div className='mt-6 mb-[14px]'>
                        <h4 className='text-[#282828] text-lg font-medium'>Ingredients: {ingredients.length}</h4>
                        <ul className='text-[#878787] text-base font-normal space-y-1 list-disc ml-7 mt-4'>
                            {
                                ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className='flex gap-4 my-6'>
                        <div className='flex gap-x-2 text-[rgba(40,40,40,0.80)] text-base font-normal items-center'><CiClock2 className='text-xl text-black' /> {preparing_time}</div>
                        <div className='flex gap-x-2 text-[rgba(40,40,40,0.80)] text-base font-normal items-center'><AiOutlineFire className='text-xl text-black' /> {calories}</div>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=> handleWantToCook(card)} className="rounded-[50px] bg-[#0BE58A] py-3 px-6 text-[#150B2B] text-lg font-medium">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handleWantToCook: PropTypes.func,
}


export default Card;