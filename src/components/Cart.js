import { useSelector } from "react-redux";
import ItemList from "./itemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import Body from "./Body";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" text-center m-4 p-4">
      <h1 className=" font-bold text-2xl m-4">Cart</h1>
      <div className="w-6/12 m-auto p-8 ">
        <ItemList items={cartItems} />

        {cartItems.length === 0 && (
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"></img>
        )}

        <button
          className="p-2 w-32 m-auto rounded-lg bg-green-600 hover:bg-green-400 hover:text-black text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <span>
          <Link to="/">
            <button className="p-2 w-32 m-4 rounded-lg bg-green-600 hover:bg-green-400 hover:text-black text-white">
              Restaurants
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Cart;
