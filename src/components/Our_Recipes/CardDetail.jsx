import PropTypes from 'prop-types'
import Cook from './Cook';
import Calculation from './calculation';

const CardDetail = ({ cards, handleCurrentlyCooking, cook, calories, time }) => {
    // console.log(cards);

    return (
        <div className="lg:w-1/3 border border-[rgba(40,40,40,0.20)] rounded-2xl lg:ml-6 mb-5 lg:mb-0">

            <div>
                <div className="text-center lg:mb-6">
                    <h4 className="text-[#282828] text-xl lg:text-2xl font-semibold mt-4 lg:mt-8 pb-4 border-b border-[rgba(40,40,40,0.15)] inline-block px-14">Want to cook: {cards.length}</h4>
                </div>

                <div className=''>
                    <div className="overflow-x-auto">
                        <table className="table">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    cards.map((card, idx) => (
                                        <tr key={idx} className="bg-base-200 border-b-2 border-[white] ">
                                            <th className='hidden lg:flex'>{idx + 1}</th>
                                            <td>{card.recipe_name}</td>
                                            <td>{card.preparing_time}</td>
                                            <td>{card.calories}</td>
                                            <td><button onClick={()=>handleCurrentlyCooking(card)} className="text-[#150B2B] font-medium text-sm lg:text-base bg-[#35f3a3] px-3.5 lg:px-[18px] rounded-[50px] py-1">Preparing</button></td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

            <div>
                <Cook
                cook = {cook}
                ></Cook>
            </div>

            <div>
                <Calculation
                time = {time}
                calories = {calories}
                ></Calculation>
            </div>
            
        </div>
    );
};

CardDetail.propTypes = {
    cards: PropTypes.array,
    handleCurrentlyCooking: PropTypes.func,
    cook: PropTypes.any,
    time: PropTypes.number,
    calories: PropTypes.number,
}

export default CardDetail;