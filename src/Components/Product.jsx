import { Link } from "react-router-dom";


const Product = ({ product }) => {

    const { product_title, price, product_image, product_id } = product;

    return (
        <div className="bg-white p-6 transition hover:scale-105 shadow-xl rounded-lg">
            <div>
                <img className="w-80 h-52 rounded-lg" src={product_image} alt="" />
            </div>
            <h3 className="mt-6 mb-3 text-[#09080F] text-2xl font-semibold">{product_title}</h3>
            <p className="text-[#09080f99] text-xl font-medium mb-5">Price : {price}</p>
            <button className="text-[#9538E2] text-lg font-semibold py-2 px-4 cursor-pointer border border-[#9538E2] rounded-[32px] hover:bg-[#9e2a2b] hover:text-black"><Link to={`/product/${product_id}`}>View Details</Link></button>
        </div>
    );
};

export default Product;