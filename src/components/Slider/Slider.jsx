// import SliderImg from '../../assets/image/slider.jpg'
import './Slider.css'

const Slider = () => {
    return (
        <div className="slider-container flex flex-col justify-center items-center py-20 lg:p-[170px] rounded-3xl text-center mb-[25px] lg:mb-[100px]">
            <h1 className="text-[#FFF] lg:text-[52px] font-bold mb-6 hidden lg:grid">Discover an exceptional cooking <br />
            class tailored for you!</h1>
            <h1 className="text-[#FFF] lg:text-[52px] font-bold mb-4 lg:hidden grid">Customized Cooking Class Unveiled</h1>
            <p className="text-[#FFF] text-sm lg:text-lg font-normal mb-10 w-3/4 hidden lg:grid">Explore bespoke culinary courses designed just for you! Unveil the art of cooking with our exclusive classes, curated to elevate your skills and delight your taste buds.</p>
            <p className="text-[#FFF] text-sm lg:text-lg font-normal mb-8 w-3/4 lg:hidden grid">Unlock culinary excellence with personalized cooking classes tailored to your taste buds!</p>
            <div className="lg:flex gap-x-6">
                <button className="text-[#150B2B] text-sm lg:text-xl font-semibold bg-[#35f3a3] px-3 py-2 lg:px-[30px] lg:py-[20px] rounded-[50px] mr-5 lg:mr-0">Explore Now</button>
                <button className="text-[#FFF] text-sm lg:text-xl font-semibold bg-transparent border border-[#FFF] px-3 lg:px-[30px] py-2 lg:py-[20px] rounded-[50px]">Our Feedback</button>
            </div>
        </div>
    );
};

export default Slider;