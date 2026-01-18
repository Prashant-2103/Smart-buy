import { useState } from "react"
import { Items } from "./Items"
const url = 'https://fakestoreapi.com/products'

const Products = () => {
    //state to hold products recieved after fetching
    const [ProductArray, setProductArray] = useState([])
    //state to hold the cart for items selected by user
    //notice it is in the parent component
    const [Cart, setCart] = useState([])
    async function getData() {
        try{
            const res = await fetch(url)
            if(res.status !== 200){
                throw new Error(`HTTP code ${res.status}`);
            }
            const result = await res.json();
            setProductArray(result)
            console.log(result);
        }catch(error){
            console.log(error.message);
        }
    }
    //handle add to cart function
    function handleAddToCart(product) 
    {
        //check if there exist any object in the cart with same id as product
       const  isAdded = Cart.some((item)=> {return item.id === product.id})
        if(!isAdded){
            console.log(`${product.title} is added to Cart` );
            
         setCart([...Cart, product])
        }    
    }
    console.log(Cart)
  return (
    <div>
            {
                ProductArray.length === 0 ? 
                <button onClick={getData}>Load Products</button> : 
                (
                <ul> {ProductArray.map((val)=>
                    {
                    const isAdded = Cart.some(it=>it.id === val.id)
                       return (<li key={val.id}> 
                       <Items 
                       img={val.image}
                        title = {val.title}
                        price = {val.price}
                        //callback func() so that it doesnt run automatically
                        handleAdd = {()=>handleAddToCart(val)}
                        //to change button after click
                        isAdded = {isAdded}
                       />
                       </li>);
                       
                    })}
                </ul>
                )
            }
    </div>
  )
}

export default Products