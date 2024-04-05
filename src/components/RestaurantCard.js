import { CDN_URL } from "../utils/const";

const ResturantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    deliveryTime,
  } = resData?.info;
  const starColor = avgRating >= 4.5 ? "🟩" : "🟥";

  return (
    <div className="shadow-xl shadow-red-400 m-4 p-4 w-[270px] rounded-lg bg-gray-100 hover:bg-gray-300 transition-all duration-[0.3s]">
      <img
        className="rounded-lg "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold">{name}</h3>
      <h4>
        {cuisines.slice(0, 3).join(", ")}
        {cuisines.length > 3 ? "..." : ""}
      </h4>

      <h4>
        {" "}
        {avgRating} {starColor}
      </h4>
      <h4 className="text-lg ">{costForTwo}</h4>
      <h4>{sla.deliveryTime} Min </h4>
    </div>
  );
};

export default ResturantCard;
