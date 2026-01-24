import { useContext } from "react";
import { globalProductContext } from "../App";

export const Items = ({ title, category, price, img }) => {
  const {products} = useContext(globalProductContext);
  const {cart, setCart} = useContext(globalProductContext);
  // console.log(products);
  // console.log(title);
  
  // console.log(`this is cart ${cart}`);
  
  const handleAddToCart= ()=> {
      const toCart = {
        title, category, price, img
      }
      console.log(toCart);
      
      setCart(prev=>(
          [
        ...prev,
        toCart
      ]
        
      ));

      console.log(cart);
      
  }

  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      {/* Product Image */}
      <img src={img} alt={title} className="w-full h-40 object-contain mb-2" />
      
      {/* Product Details */}
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm">{category}</p>
      <p className="text-blue-600 font-bold my-2">${price}</p>
      
      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-3 py-2 rounded flex-1 hover:bg-blue-600 active:scale-95">
          Buy Now
        </button>
        <button className=" text-black border-2 px-3 py-2 rounded flex-1 hover:bg-blue-400 active:scale-95" 
        onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};