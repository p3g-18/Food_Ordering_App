import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="Nav-items">
        <ul className="Header-link">
          <li>
            <Link to="/" className="Header-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="Header-link">
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="Header-link">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
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
