import ResList from "../utils/ResList";
import ResturantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [FilterderListofRestaurant, setFilterderListofRestaurant] = useState(
    []
  );
  const [SearchText, setSearchText] = useState("");
  console.log("render");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      "Restaurant",
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListofRestaurant(
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterderListofRestaurant(
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1>Look's Like you are Offline Check your Internet connection</h1>;
  }
  return (FilterderListofRestaurant.length) === 0 ? (<ShimmerUI />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(SearchText);
              const filteredRestaurant = ListofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              console.log("filteredRestaurant", filteredRestaurant);
              setFilterderListofRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterderListofRestaurant(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {FilterderListofRestaurant.map((data) => (
           <Link to={"/restaurants/"+ data.info.id}>  <ResturantCard key={data.info.id} resData={data} /></Link>   
        ))}
      </div>
    </div>
  );
};

export default Body;
