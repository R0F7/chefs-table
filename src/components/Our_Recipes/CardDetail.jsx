
const CardDetail = () => {
    return (
        <div className="w-1/3 border border-[rgba(40,40,40,0.20)] rounded-2xl ml-6">
            <div className="text-center mb-6">
                <h4 className="text-[#282828]  text-2xl font-semibold mt-8 pb-4 border-b border-[rgba(40,40,40,0.15)] inline-block px-14">Want to cook: 01</h4>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td><button className="text-[#150B2B] font-medium text-base bg-[#0BE58A] px-[18px] rounded-[50px] py-1">Preparing</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default CardDetail;