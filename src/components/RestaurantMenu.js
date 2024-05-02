import Shimmer from "./Shimmer";
import Skeleton from "./ShimmerMenu";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(true);

  if (resInfo === null) {
    return <Skeleton />;
  }

  console.log("resInfo:", resInfo);
  // const { name, costForTwoMessage, avgRating, cuisines } =
  //   resInfo?.cards[0]?.card?.card?.info;
  const { name, costForTwoMessage, avgRating, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(
    "resinfo",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  console.log("categories: ", categories);
  if (!categories || categories.length === 0) {
    return <p>No categories found.</p>;
  }

  //Shimmer
  return (
    <div className="itemCards text-center">
      <div className="border border-solid m-12 p-4 rounded-2xl shadow-2xl">
        <div className="cardList">
          <h1 className="font-bold my-6 text-3xl ">{name}</h1>
          <p className=" text-gray-400">{costForTwoMessage}</p>
          <p className=" text-gray-400">{avgRating}</p>
          <p className=" text-gray-400">{cuisines.join(",")}</p>
        </div>
      </div>

      <div className="text-center align-middle ">
        {categories.map((category, index) => {
          console.log("DATATATATAT", category?.card);
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card}
              showItems={index === showIndex ? true : false}
              // setShowIndex={() => setShowIndex(index)}
              setShowIndex={() =>
                setShowIndex((prevIndex) =>
                  prevIndex === index ? false : index
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
