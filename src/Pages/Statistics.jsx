import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CardContext from "../Context/CardContext";
import { FaSortNumericDownAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Statistics = () => {

    const { cartItem, removeFromCart, wishlist, removeFromWishlist, isActive, handleIsActive } = useContext(CardContext);

    const [allCart, setAllCart] = useState(cartItem)

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
        toast("Removed From Cart Successfully!");
    }

    const handleRemoveFromWishlist = (id) => {
        removeFromWishlist(id);
        toast('Remove From Wishlist Successfully!');
    }

    const handleSort = (sortBy) => {
        if(sortBy == 'price') {
            const sorted = [...cartItem].sort((a, b) => b.price - a.price);
            setAllCart(sorted);

        }
    }

    const handlePurchase = () => {
        Swal.fire({
            title: "Payment Successfully!",
            icon: "success",
            draggable: true
        });
    }


    return (
        <div className="bg-[#ECECEC] pb-64">
            
            <div className='bg-[#9538E2] text-white pt-8 pb-12'>
                <h3 className='text-[32px] font-bold text-center mb-5'>Dashboard</h3>
                <p className='text-[16px] font-normal text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
            <div className="flex items-center justify-center gap-6 mt-12">


                <button 
                onClick={() => handleIsActive("cart")}
                className={`${isActive.cart ?
                    "btn bg-white text-[#9538E2] text-lg font-bold py-[6px] px-6 rounded-[32px]"
                    :
                    "btn bg-[#9538E2] text-white text-lg font-bold py-[6px] px-6 rounded-[32px]"
                }`}><NavLink>Cart</NavLink></button>


                <button 
                onClick={() => handleIsActive("wishlist")}
                className={`${isActive.cart ?
                    "btn bg-[#9538E2] text-white text-lg font-bold py-[6px] px-6 rounded-[32px]"
                    :
                    "btn bg-white text-[#9538E2] text-lg font-bold py-[6px] px-6 rounded-[32px]"
                }`}><NavLink>Wishlist</NavLink></button>
            </div>
            </div>


            {
                isActive.cart ? 

<div>

            {/* cartList */}
                <div className="mb-36">
<div className="flex justify-between items-center w-9/12 mx-auto py-16">
    <h3 className="text-2xl text-[#0B0B0B] font-bold">Cart</h3>
    <div className="flex items-center gap-6">
        <h3 className="text-2xl text-[#0B0B0B] font-bold">Total Cost : 999.99</h3>
        <button
        onClick={() => handleSort('price')}
        className="btn text-[#9538E2] text-lg font-semibold border border-[#9538E2]">Sort By Price <FaSortNumericDownAlt></FaSortNumericDownAlt> </button>
        <button 
        onClick={handlePurchase}
        className="btn text-[#9538E2] text-lg font-semibold border border-[#9538E2]">Purchase</button>
    </div>
</div>



<div className="flex flex-col gap-6">
    {
        allCart.map(cart => 
            <div key={cart.product_id}
            className="flex justify-between items-center bg-white p-6 w-9/12 mx-auto rounded-lg"
            >

            <div className="flex gap-8">
            <div>
                <img className="w-56 h-32 rounded-lg" src={cart.product_image} alt="" />
            </div>
            <div>
                <h3 className="text-[#09080F] text-2xlfont-semibold">{cart.product_title}</h3>
                <p className="text-[#09080f99] text-lgfont-normal my-3">{cart.description}</p>
                <h4 className="text-[#09080fcc] text-xl font-semibold">Price : {cart.price}</h4>
            </div>
            </div>

                <div>
                    <button 
                    onClick={() => handleRemoveFromCart(cart.product_id)}
                    className="btn">Delete</button>
                </div>
            </div>
        )
    }
</div>

</div>
</div>


                :


<div>

                                
{/* wishlist */}

<div>

<div className="flex justify-between items-center w-9/12 mx-auto py-16">
        <h3 className="text-2xl text-[#0B0B0B] font-bold">Wishlist</h3>
    </div>

    <div>
    <div className="flex flex-col gap-6">
        {
            wishlist.map(list => 
                <div key={list.product_id}
                className="flex justify-between items-center bg-white p-6 w-9/12 mx-auto rounded-lg"
                >

                <div className="flex gap-8">
                <div>
                    <img className="w-56 h-32 rounded-lg" src={list.product_image} alt="" />
                </div>
                <div>
                        <h3 className="text-[#09080F] text-2xl font-semibold">{list.product_title}</h3>
                        <p className="text-[#09080f99] text-lg font-normal my-3">{list.description}</p>
                        <h4 className="text-[#09080fcc] text-xl font-semibold">Price : {list.price}</h4>
                </div>
                </div>

                    <div>
                        <button 
                        onClick={() => handleRemoveFromWishlist(list.product_id)}
                        className="btn">Delete</button>
                    </div>
                </div>
            )
        }
</div>
</div>

</div>

</div>
            }












        </div>
    );
};

export default Statistics;