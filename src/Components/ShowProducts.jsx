
import { NavLink } from "react-router-dom";
import Product from "./Product";

const ShowProducts = ({ products }) => {



    return (
        <div className="container mx-auto py-20">
            <h3 className="text-[#0B0B0B] text-4xl font-bold text-center mb-12">Explore Cutting-Edge Gadgets</h3>

            <div className="grid grid-cols-12 gap-6">


                <div className="col-span-3 flex flex-col gap-6 bg-white p-6">
                    <button className="text-[#09080f99] text-lg font-medium bg-[#09080f0d] py-2 rounded-[32px] hover:bg-[#9538E2] hover:text-white cursor-pointer"><NavLink>All Products</NavLink></button>
                    <button className="text-[#09080f99] text-lg font-medium bg-[#09080f0d] py-2 rounded-[32px] hover:bg-[#9538E2] hover:text-white cursor-pointer"><NavLink>Laptops</NavLink></button>
                    <button className="text-[#09080f99] text-lg font-medium bg-[#09080f0d] py-2 rounded-[32px] hover:bg-[#9538E2] hover:text-white cursor-pointer"><NavLink>Accessories</NavLink></button>
                    <button className="text-[#09080f99] text-lg font-medium bg-[#09080f0d] py-2 rounded-[32px] hover:bg-[#9538E2] hover:text-white cursor-pointer"><NavLink>Smart Watches</NavLink></button>
                    <button className="text-[#09080f99] text-lg font-medium bg-[#09080f0d] py-2 rounded-[32px] hover:bg-[#9538E2] hover:text-white cursor-pointer"><NavLink>MacBook</NavLink></button>
                    <button className="text-[#09080f99] text-lg font-medium bg-[#09080f0d] py-2 rounded-[32px] hover:bg-[#9538E2] hover:text-white cursor-pointer"><NavLink>Iphone</NavLink></button>
                </div>

                <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        products.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>


            </div>
        </div>
    );
};

export default ShowProducts;