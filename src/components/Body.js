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
    <div className="body bg-green-200">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
           <button className="px-4 py-2 bg-green-100 m-4 rounded-r-lg"
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
        <div className="search m-4 p-4 flex items-center"></div>
        <button
             className="px-4 py-2 bg-gray-100 rounded-lg"
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
      <div className="flex flex-wrap">
        {FilterderListofRestaurant.map((data) => (
           <Link to={"/restaurants/"+ data.info.id}>  <ResturantCard key={data.info.id} resData={data} /></Link>   
        ))}
      </div>
    </div>
  );
};

export default Body;
