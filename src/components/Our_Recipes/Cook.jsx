import PropTypes from 'prop-types';

const Cook = ({cook}) => {
    // console.log(cook);

    return (
         <div>
                <div className="text-center lg:mb-6">
                    <h4 className="text-[#282828] text-xl lg:text-2xl font-semibold mt-4 lg:mt-8 pb-4 border-b border-[rgba(40,40,40,0.15)] inline-block px-14">Currently cooking: {cook.length}</h4>
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
                                    cook.map((card, idx) => (
                                        <tr key={idx} className="bg-base-200 border-b-2 border-[white]">
                                            <th>{idx + 1}</th>
                                            <td>{card.recipe_name}</td>
                                            <td>{card.preparing_time}</td>
                                            <td>{card.calories}</td>
                                            
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
    );
};

Cook.propTypes = {
    cook: PropTypes.array,
}

export default Cook;