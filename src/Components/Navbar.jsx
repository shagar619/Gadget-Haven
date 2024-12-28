import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";



const Navbar = () => {
    return (
            <div className="py-9 px-16">
            <div className=" mx-auto flex justify-between items-center">
            <h3 className="text-[#0B0B0B] text-xl font-bold">Gadget Heaven</h3>

            <div className="flex items-center gap-8 text-[#0b0b0bb3] text-base font-medium">
                <NavLink className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to="/statistics">Dashboard</NavLink>
                <NavLink className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to="/dashboard">Statistics</NavLink>
            </div>

            <div className="flex items-center gap-4">

                <p className="border-2 border-[#0b0b0b1a] p-3 rounded-full"><BsCart></BsCart></p>
                <p className="border-2 border-[#0b0b0b1a] p-3 rounded-full"><FaRegBookmark></FaRegBookmark></p>

            </div>
        </div>
            </div>
    );
};

export default Navbar;