import { useContext } from "react"
import { globalProductContext } from "../App";

function NavBar() {
    const {products} = useContext(globalProductContext);
    const numProducts = products.length;
    console.log(numProducts)
  return (
    <nav className="mb-8 flex justify-between items-center bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800">ShopSphere</h1>
      <div className="space-x-4">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          Products: {numProducts||0}
        </span>
      </div>
    </nav>
  )
}

export default NavBar