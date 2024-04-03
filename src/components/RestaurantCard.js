import { CDN_URL } from "../utils/const";

const ResturantCard = (props) => {

    const { resData } = props;
    console.log("resData", resData.info)

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, deliveryTime } = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={ CDN_URL
                    +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Min </h4>
        </div>
    )
}

export default ResturantCard;