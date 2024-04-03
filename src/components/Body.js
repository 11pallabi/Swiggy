import ResList from "../utils/ResList";
import ResturantCard from "./RestaurantCard";
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    ResList.restaurants.map((data) => (
                        <ResturantCard key={data.info.id} resData={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;