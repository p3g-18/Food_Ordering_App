import RestaurantCard, { WithIsOpen } from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithIsOpen = WithIsOpen(RestaurantCard);

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.603760605239895&lng=73.78488410264254&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  // online

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        OOPS! it seems that you are not connected. PLease check your internet
        Connection!!
      </h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="search flex items-center px-[250] justify-between ">
        <div className="search m-4 px-2 py-4 items-center">
          <input
            type="text"
            placeholder="Find Your Favourite Dish"
            className="border border-solid border-black rounded-[50px] p-2 w-96 items-center"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-slate-800  
             text-white  m-2 py-2 rounded-[25px]"
            onClick={() => {
              console.log(searchText);

              const filteredSearch = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredSearch);
            }}
          >
            Search
          </button>
        </div>
        <div className="filtering flex items-center justify-end  ">
          <button
            className="border border-solid   m-4 px-6 py-2 rounded-[25px] bg-slate-800 text-white"
            onClick={() => {
              console.log("button clicked");
              const filter = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filter);
              console.log(filter);
            }}
          >
            Top Rating
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mx-10 p-10">
        {filteredRestaurants.map((restaurant) => {
          // mapping over restaurants array list && changing routes dynamically
          return (
            <Link
              className="Restaurant-link"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardWithIsOpen
                  key={restaurant.info.id}
                  resData={restaurant}
                />
              ) : (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
