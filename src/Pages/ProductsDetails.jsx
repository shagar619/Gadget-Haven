import React, { useContext, useEffect, useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { FaRegBookmark } from 'react-icons/fa6';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import CardContext from '../Context/CardContext';
import { toast } from 'react-toastify';

const ProductsDetails = () => {

    const { addToCart, addToWishlist } = useContext(CardContext);

    const { id } = useParams();
    
    const data = useLoaderData();

    const [product, setProduct] = useState({});

    const { product_image, product_title, price, description, specification, rating } = product;

    useEffect(() => {
        const singleProduct = data.find(item => item.product_id == id);
        setProduct(singleProduct)
    } , [data, id])

    const handleAddToCart = () => {
        addToCart(product);
        toast('Successfully cart added');
    }

    const handleAddToWishlist = () => {
        addToWishlist(product);
        toast("Wishlist added successfully!");
    }




    return (
        <div className='bg-[#ECECEC]'>
            <div className='bg-[#9538E2] text-white pt-8 pb-52'>
                <h3 className='text-[32px] font-bold text-center mb-5'>Product Details</h3>
                <p className='text-[16px] font-normal text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
            </div>

            <div className='relative bottom-[150px] w-7/12 mx-auto flex gap-6 bg-white p-6 rounded-3xl'>
                <div>
                    <img className='w-[420px] h-[550px] rounded-lg' src={product_image} alt="" />
                </div>
                <div>
                    <h3 className='text-[#09080F] text-[28px] font-semibold'>{product_title}</h3>
                    <h4 className='text-[#09080fcc] text-xl font-semibold my-4'>Price : $ {price}</h4>
                    <button className='px-3 py-2 border border-[#309C08] bg-[#309c081a] rounded-[32px] text-[#309C08] text-sm font-medium'>In Stock</button>
                    <p className='text-[#09080f99] text-lg font-normal my-4'>{description}</p>
                    <ol className='space-y-3 ml-7'>
                        <span className='text-[#09080F] text-lg font-bold mb-3'>Specification : </span>
                        {
                                specification && 
                                Object.keys(specification).map((n, idx) => (<li key={idx} className="list-disc text-[#09080f99] text-lg font-normal">{specification[n]}</li>))
                        }
                    </ol>
                    <h4 className='text-[#09080F] text-lg font-bold my-3'>Rating : {rating}</h4>
                    <div className='flex items-center gap-4'>

                        <button 
                        onClick={handleAddToCart}
                        className='bg-[#9538E2] text-white text-lg font-bold py-[6px] px-3 rounded-[32px] hover:bg-[#264653] cursor-pointer'><Link className='flex items-center gap-4'>Add to Card <BsCart></BsCart></Link></button>
                        
                        <button 
                        onClick={handleAddToWishlist}
                        className='btn border-2 border-[#0b0b0b1a]'><Link className=""><FaRegBookmark></FaRegBookmark></Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;