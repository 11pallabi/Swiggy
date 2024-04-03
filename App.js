
import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className="header">
           <div className="logo-container">
              <img className="logo" 
                src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1702891826~exp=1702892426~hmac=4e906855afd156fd933175b550a67d2815b6ab1b59313c672a6a374958864ccd"
              />

           </div>
           <div className="nav-items">
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
               </ul>
           </div>
        </div>
    );
};

const ResturantCard = () =>{
    return (
        <div className="res-card">
            <img 
            className="res-logo" 
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"
            />
            <h3>Meghna Foods</h3>
            <h4>Biriyani,North Indian,Asians</h4>
            <h4>4.4 Star</h4>
            <h4>38 Min</h4>
        </div>
    )
}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);