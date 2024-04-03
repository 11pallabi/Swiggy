import ResList from "../utils/ResList";
import ResturantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState(ResList.restaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("Restaurant",
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListofRestaurant(
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListofRestaurant(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {
          ListofRestaurant.map((data) => (
            <ResturantCard key={data.info.id} resData={data} />
          ))}
      </div>
    </div>
  );
};

export default Body;
