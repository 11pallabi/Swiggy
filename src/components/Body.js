import ResList from "../Utils/reslist";
import ResturantCard from "./RestaurantCard";
import { useEffect, useState ,useContext } from "react";
import ShimmerUI from "./shimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
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
    console.log("Restaurant",
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants

    );
    setListofRestaurant(
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterderListofRestaurant(
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <h1>Look's Like you are Offline Check your Internet connection</h1>;
  }
  return FilterderListofRestaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body bg-gray-400">
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
          <button className="px-4 py-2 shadow-blue-400 bg-green-100 m-4 rounded-r-lg"
            onClick={() => {
              console.log(SearchText);
              const filteredRestaurant = ListofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              console.log(filteredRestaurant);
              setFilterderListofRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 shadow-blue-400 bg-green-100 m-4 rounded-r-lg"
          onClick={() => {
            const filteredList = ListofRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log("filteredList", filteredList);
            setFilterderListofRestaurant(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        
      </div>
      <div className="flex flex-wrap">
      {FilterderListofRestaurant.map((data) => (
  <Link to={"/restaurants/" + data.info.id} key={data.info.id}>
    <ResturantCard resData={data} />
  </Link>
))}

      </div>
    </div>
  );
};

export default Body;
