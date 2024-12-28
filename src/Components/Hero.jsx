import banner from './../assets/banner.jpg'

const Hero = () => {
    return (

        <>
<div className="mx-8 border-2 p-2 rounded-[32px]">

<div className="bg-[#9538E2] py-12 pb-72 rounded-[32px]">
    <h1 className="text-5xl font-bold text-white text-center leading-[72px] mb-6">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
    <p className="text-center text-white text-base font-normal mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
    <p className="text-center"><button className="bg-white text-[#9538E2] text-xl font-bold rounded-[32px] px-5 py-3 hover:text-white hover:bg-warning cursor-pointer">Shop Now</button></p>
</div>

</div>

<div className="relative bottom-[150px] flex justify-center items-center">
    <img className='h-[550px] w-[1000px] border-2 p-3 rounded-3xl' src={banner} alt="" />
</div>

    </>

    );
};

export default Hero;