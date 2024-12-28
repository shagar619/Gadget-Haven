import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";




const MainLayout = () => {
    return (
        <div className="">
            {/* Navbar */}
            <Navbar></Navbar>
            <ToastContainer></ToastContainer>

            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;