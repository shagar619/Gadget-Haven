import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero";
import ShowProducts from "../Components/ShowProducts";


const Home = () => {

    const products = useLoaderData();

    return (
        <div className="bg-[#09080f0d]">
            <Hero></Hero>
            <ShowProducts products={products}></ShowProducts>
        </div>
    );
};

export default Home;