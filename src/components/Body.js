import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    resObj.restaurants
  );
  const [filteredRestaurants, setFilteredRestaurants] = useState(
    resObj.restaurants
  );
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            const filter = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filter);
            console.log(filter);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {resObj.restaurants.map((restaurant) => {
          // mapping over restaurants array list
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
