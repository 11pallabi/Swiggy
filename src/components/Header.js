import { LOGO_URL } from "../utils/const";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  console.log("header Render");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-8 ">
          <li className="px-4">online-status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
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
