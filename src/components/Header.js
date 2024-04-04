import { LOGO_URL } from "../utils/const";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  console.log("header Render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnname == "Login" ? setbtnname("Logout") : setbtnname("Login");
            }}
          >
            {" "}
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
