// import SliderImg from '../../assets/image/slider.jpg'
import './Slider.css'

const Slider = () => {
    return (
        <div className="slider-container flex flex-col justify-center items-center p-[170px] rounded-3xl text-center">
            <h1 className="text-[#FFF] text-[52px] font-bold mb-6">Discover an exceptional cooking <br />
            class tailored for you!</h1>
            <p className="text-[#FFF] text-[18px] font-normal mb-10 w-3/4">Explore bespoke culinary courses designed just for you! Unveil the art of cooking with our exclusive classes, curated to elevate your skills and delight your taste buds.</p>
            <div className="flex gap-x-6">
                <button className="text-[#150B2B] text-xl font-semibold bg-[#35f3a3] px-[30px] py-[20px] rounded-[50px]">Explore Now</button>
                <button className="text-[#FFF] text-xl font-semibold bg-transparent border border-[#FFF] px-[30px] py-[20px] rounded-[50px]">Our Feedback</button>
            </div>
        </div>
    );
};

export default Slider;