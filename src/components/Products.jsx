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
                console.log(url)
                const response = await axios.get(url);
                const data = response.data;
                // console.log(data.products);
                setisLoading(prev=>!prev)
                setProducts(prev => [...prev, ...data.products]);
                
                
            } catch (error) {
                console.error("Error in fetching data")
            }
        }
        getData();
    },[skip])

    console.log(products);
    console.log(isLoading)
    const loadMoreHandler = ()=>{
        console.log(`load more btn is clicked`);
        setSkip(prev=>prev+15); 
    }
    
  return (
    <div>
            
                {products.map((val)=>{
                return <li key={val.id}><Items 
                    title = {val.title}
                    category = {val.category}
                    price = {val.price}
                    img = {val.images[0]}
                /></li>
            })}
           

            <button onClick={loadMoreHandler} disabled={isLoading} >load more products</button>
    </div>
  )
}

export default Products