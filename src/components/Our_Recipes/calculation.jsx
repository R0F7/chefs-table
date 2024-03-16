import PropTypes from 'prop-types'

const Calculation = ({time, calories}) => {
    // console.log(calories);
    return (
        <div> 
            <div className="overflow-x-auto mt-5">
                <table className="table ">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Total Time = </th>
                            <th>Total Calories =</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>{time} min</td>
                            <td>{calories} calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Calculation.propTypes = {
    time: PropTypes.number,
    calories: PropTypes.number,
}

export default Calculation;