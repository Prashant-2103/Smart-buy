import { useContext } from "react"
import { globalProductContext } from "../App"
const Cart = () => {
    const {cart} = useContext(globalProductContext);
    // console.log((cart))
    const totalPrice = (cart.reduce((prev,curr)=>{
        return prev + curr.price;
    }, 0)).toFixed(2);
     console.log((totalPrice))
  return (
    
    <div>
      {cart.map((val)=>{
            return <div key={val.id}>
               <img src={val.img} alt="product img" className="w-full h-40 object-contain mb-2" />
      
      {/* Product Details */}
      <h3 className="font-bold text-lg">{val.title}</h3>
      {/* <p className="text-gray-500 text-sm">{category}</p> */}
      <p className="text-blue-600 font-bold my-2">${val.price}</p>

            </div>
      })}

      <div className="total">
        {totalPrice > 0 ?  totalPrice : "0"}
      </div>
    </div>
  )
}

export default Cart