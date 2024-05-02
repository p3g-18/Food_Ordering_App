import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //we are subscribing to the store/ reading my store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-md text-lg">
      <div className="w-36">
        <Link to="/">
          <img src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="flex items-center justify-between ">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-medium">
            Online Status:{onlineStatus ? "🟢" : "🔴"}{" "}
          </li>
          <li className="px-4">
            <Link
              to="/"
              className="Header-link flex justify-between font-semibold"
            >
              Home
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/about" className="Header-link">
              About
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/contact" className="Header-link">
              Contact
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/cart">🛒Cart({cartItems.length})</Link>
          </li>

          <button
            className="login px-4 font-bold"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
