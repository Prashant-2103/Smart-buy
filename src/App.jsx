import { createContext, useState } from "react";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router";

export const globalProductContext = createContext();
// export const globalCartContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <globalProductContext.Provider
        value={{ products, cart, setCart, setProducts }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
      </globalProductContext.Provider>
    </div>
  );
};

export default App;
