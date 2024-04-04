import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUi";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [ResMenu, SetResMenu] = useState(null);
  const { resId } = useParams();

  const fetchMenu = async () => {
    try {
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId=${resId}`);
      const json = await data.json();
      
  console.log("ResMenu",json);
      SetResMenu(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (ResMenu === null) return <ShimmerUI />;

  console.log("ResMenu",ResMenu?.cards[2]?.card?.card?.info);
  console.log("itemCards",ResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card);

  const { name, cloudinaryImageId, costForTwoMessage, cuisines } = ResMenu?.cards[2]?.card?.card?.info;
  const { itemCards } = ResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  console.log(name);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3><p>{cuisines.join(", ")} {costForTwoMessage}</p></h3>
      {/* Add any other relevant information you want to display */}
      <h2>Menu</h2>
      <ul>
        {itemCards && itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} ₹{item.card.info.price/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;