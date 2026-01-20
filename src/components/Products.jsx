import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Items } from './Items';

const Products = () => {
    const limit = 15;
    const [skip, setSkip] = useState(0);
    const [isLoading, setisLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    
    

    useEffect(()=>{
        
        async function getData() {
            try {
                setisLoading(true)
                console.log(url)
                const response = await axios.get(url);
                // if(skip === 0) {
                //     const data = response.data;
                // }
                // console.log(data.products);
                setProducts(prev =>{
                    // creating id's of existing products
                    const existingId = new Set(prev.map(individualId => individualId.id));
                    //fetching new deta 
                    const newFetch = response.data.products;
                    //filter out if newfetch has products with existing id's and put it into a newProduct array
                    const newProduct = newFetch.filter((item)=>{
                           return  !existingId.has(item.id)
                    })
                    return [...prev, ...newProduct]
                })
                setisLoading(false)
                
                
            } catch (error) {
                console.error("Error in fetching data")
            }
        }
        getData();
    },[skip])

    useEffect(()=>{
        console.log(`product state currently is `,products)
    },[products])

    useEffect(()=>{
        console.log(`isLoading state currently is `,isLoading)
    },[isLoading])

    const loadMoreHandler = ()=>{
        
        console.log(`load more btn is clicked`);
        setSkip(prev=>prev+15); 
    }
    
    
  return (
    <div className='p-10'>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" >
                {products.map((val)=>{
                return <li key={val.id} className=""><Items 
                    title = {val.title}
                    category = {val.category}
                    price = {val.price}
                    img = {val.images[0]}
                /></li>
            })}    
            </ul>           

            <button className={`px-8 py-3 rounded-full font-semibold text-white transition-all
          ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-200'}`} onClick={loadMoreHandler} disabled={isLoading} >
            {isLoading ? "Loading" : "Load More Producst" }
            </button>
    </div>
  )
}

export default Products