// import SliderImg from '../../assets/image/slider.jpg'
import './Slider.css'

const Slider = () => {
    return (
        <div className="slider-container flex flex-col justify-center items-center p-[170px] rounded-3xl text-center">
            <h1 className="text-[#FFF] text-[52px] font-bold mb-6">Discover an exceptional cooking <br />
            class tailored for you!</h1>
            <p className="text-[#FFF] text-[18px] font-normal mb-10 w-3/4">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex gap-x-6">
                <button className="text-[#150B2B] text-xl font-semibold bg-[#0BE58A] px-[30px] py-[20px] rounded-[50px]">Explore Now</button>
                <button className="text-[#FFF] text-xl font-semibold bg-transparent border border-[#FFF] px-[30px] py-[20px] rounded-[50px]">Our Feedback</button>
            </div>
        </div>
    );
};

export default Slider;