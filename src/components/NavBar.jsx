import { useContext } from "react";
import { globalProductContext } from "../App";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";

function NavBar() {
  const { products } = useContext(globalProductContext);
  const numProducts = products.length;
  // console.log(numProducts)
  return (
    <nav className="mb-8 flex justify-between items-center bg-white p-6 rounded-lg shadow-sm">
      <NavLink to={"/"} >
        <h1 className="text-2xl font-bold text-gray-800">ShopSphere</h1>
      </NavLink>
      <div className="space-x-4 flex">
        <NavLink to="/cart" >
           <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium cursor-pointer">
          <ShoppingCart />
          cart
        </span>
        </NavLink>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          Products: {numProducts || 0}
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
