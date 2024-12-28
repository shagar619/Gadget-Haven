import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const Dashboard = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('../Products.json')
        .then(data => {
            const productsData = data.data;
            const productsWithFakeData = productsData.map(product => {
                const obj = {
                    name : product.product_title,
                    price : product.price
                }
                return obj;
            })
            setProducts(productsWithFakeData)
        })
    } , [])


    return (
        <div className="bg-[#ECECEC] pb-7">

            <div className='bg-[#9538E2] text-white pt-8 pb-12'>
                <h3 className='text-[32px] font-bold text-center mb-5'>Statistics</h3>
                <p className='text-[16px] font-normal text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
            </div>

            <div className="w-9/12 mx-auto bg-white py-16 my-16 rounded-lg">


            <BarChart width={1200} height={600} data={products}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            </BarChart>


            </div>

        </div>
    );
};

export default Dashboard;