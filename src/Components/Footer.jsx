import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="py-24">
            <h2 className="text-center mb-4 text-[#09080F] text-3xl font-bold">Gadget Heaven</h2>
            <p className="text-center text-[#09080f99] text-base font-medium">Leading the way in cutting-edge technology and innovation.</p>
            <hr className="my-9 w-9/12 mx-auto" />

        <div className="flex justify-center items-center gap-40">
            <div className="text-[#09080f99] text-base font-medium space-y-4">
                <Link className="text-[#09080F] text-lg font-bold">Services</Link>
                <p>Product Support</p>
                <p>Order Tracking</p>
                <p>Shipping & Delivery</p>
                <p>Returns</p>
            </div>
            
            <div className="text-[#09080f99] text-base font-medium space-y-4">
                <Link className="text-[#09080F] text-lg font-bold">Company</Link>
                <p>About Us</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>

            <div className="text-[#09080f99] text-base font-medium space-y-4">
                <Link className="text-[#09080F] text-lg font-bold">Legal</Link>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </div>

        </div>

        </div>
    );
};

export default Footer;