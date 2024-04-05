import ShimmerUI from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const ResInfo = useRestaurantMenu(resId);
  const [showIndex , SetShowIndex] = useState(null)

  if (ResInfo === null) return <ShimmerUI />;

  console.log("Restaurant Name",ResInfo?.cards[2]?.card?.card?.info);
  console.log(
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
  );

  const { name, cloudinaryImageId, costForTwoMessage, cuisines } =
    ResInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  const categories =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} {costForTwoMessage}
        </p>
      </h3>
      {/* Add any other relevant information you want to display */}
      {categories.map((category,index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card.card}
          showItems={index === showIndex ? true : false}
          SetShowIndex={()=>SetShowIndex(index)}
                  />
      ))}
    </div>
  );
};

export default RestaurantMenu;
