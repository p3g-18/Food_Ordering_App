import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating } = resData?.info;
  if (!resData || !resData.info) {
    return null; // or display some default content or an error message
  }
  return (
    <div id="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      ></img>
      <div className="content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4> {avgRating}</h4>
        <h4> {costForTwo}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
