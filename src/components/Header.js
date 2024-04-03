import { LOGO_URL } from "../utils/const";
import { useState } from "react";

const Header = () => {
    const [btnname, setbtnname] = useState("Login")
console.log("header Render")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src= {LOGO_URL}
                />

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login"
                        onClick={() => {
                            btnname == "Login" ? setbtnname("Logout") : setbtnname("Login")
                        }}> {btnname}</button>
                </ul>
            </div>
        </div>
    );
};


export default Header;