import { GoSearch } from "react-icons/go";  

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 my-5 lg:my-10">
                <div className="flex-1">
                    <a className="text-xl lg:text-3xl font-bold text-[#150B2B]">Recipe Calories</a>
                </div>
                <div className="lg:flex-1">
                    <ul className="hidden lg:flex gap-10 space-x-12 text-[rgba(21,11,43,0.70)] text-base font-normal">
                        <li><button>Home</button></li>
                        <li><button>Recipes</button></li>
                        <li><button>About</button></li>
                        <li><button>Search</button></li>
                    </ul>
                </div>
                <div className="flex-none gap-2 lg:gap-4">
                    <div className="form-control relative">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto placeholder:pl-5 " />
                        <span className="absolute top-4 left-4"><GoSearch className="text-[17px]" /></span>
                    </div>
                    <div className="bg-[#35f3a3] rounded-full lg:p-2 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M23.9761 24.9668C23.0444 23.7333 21.8391 22.7329 20.455 22.0446C19.0709 21.3562 17.5459 20.9987 16.0001 21.0001C14.4543 20.9987 12.9292 21.3562 11.5451 22.0446C10.1611 22.7329 8.95571 23.7333 8.02406 24.9668M23.9761 24.9668C25.7941 23.3497 27.0762 21.2182 27.655 18.8549C28.2337 16.4916 28.0804 14.0082 27.2153 11.7341C26.3503 9.45992 24.8144 7.50246 22.8113 6.12129C20.8081 4.74012 18.4325 4.00049 15.9994 4.00049C13.5663 4.00049 11.1906 4.74012 9.18753 6.12129C7.18443 7.50246 5.6485 9.45992 4.78344 11.7341C3.91838 14.0082 3.76506 16.4916 4.34382 18.8549C4.92257 21.2182 6.20606 23.3497 8.02406 24.9668M23.9761 24.9668C21.7814 26.9243 18.9409 28.0043 16.0001 28.0001C13.0588 28.0046 10.219 26.9246 8.02406 24.9668M20.0001 13.0001C20.0001 14.061 19.5786 15.0784 18.8285 15.8285C18.0783 16.5787 17.0609 17.0001 16.0001 17.0001C14.9392 17.0001 13.9218 16.5787 13.1716 15.8285C12.4215 15.0784 12.0001 14.061 12.0001 13.0001C12.0001 11.9392 12.4215 10.9218 13.1716 10.1717C13.9218 9.42152 14.9392 9.00009 16.0001 9.00009C17.0609 9.00009 18.0783 9.42152 18.8285 10.1717C19.5786 10.9218 20.0001 11.9392 20.0001 13.0001Z" stroke="#150B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

