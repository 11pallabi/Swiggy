import ResList from "../utils/ResList";
import ResturantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
    const [ListofRestaurant,setListofRestaurant]=useState(ResList.restaurants);
    return (
        <div className="body">
             <div className="filter">
                <button className="filter-btn"
                           onClick={() => {
                           const filteredList = ListofRestaurant.filter(
                            (res) => res.info.avgRating > 4.5
            );
            setListofRestaurant(filteredList);
          }}>Top Rated restaurant</button>
            </div>
            <div className="res-container">
                {
                    ListofRestaurant.map((data) => (
                        <ResturantCard key={data.info.id} resData={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;