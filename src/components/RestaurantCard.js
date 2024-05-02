import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  if (!resData || !resData.info) {
    return null; // or display some default content or an error message
  }

  const { name, cuisines, costForTwo, avgRating } = resData.info;
  console.log("ResData ", resData);
  return (
    <div className="m-4 p-4 w-[300px] h-[95%] text-black hover:bg-green-300 hover:shadow-2xl rounded-2xl">
      <img
        className="object-cover w-[100%] h-[250px] rounded-[10px]"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <div className="content">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export const WithIsOpen = (WrappedComponent) => {
  return ({ resData }) => {
    if (!resData) {
      return null; // or handle this case as needed
    }

    return (
      <div>
        <label className="absolute bg-slate-800 text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <WrappedComponent resData={resData} />
      </div>
    );
  };
};

const RestaurantCardWithIsOpen = WithIsOpen(RestaurantCard);
export default RestaurantCardWithIsOpen;
