import { createContext, useState } from "react";
import Products from "./components/Products"
import NavBar from "./components/NavBar"

export const  globalProductContext = createContext();
    const globalCartContext = createContext();
    
const App = () => {
  const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    


  return (

    <div>
      <globalProductContext.Provider value={{products, setProducts} }>
        
        <NavBar />
        <Products/>
      </globalProductContext.Provider>
    </div>
  )
}

export default App