import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching menu data:", error);
      setError("Error fetching menu data");
      setLoading(false);
    }
  };

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log("resInfo:", resInfo);
  const { name, costForTwoMessage, avgRating, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  const { category, title } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //Shimmer
  return (
    <div className="itemCards">
      <div className="cardList">
        <h1>{name}</h1>
        <p>{costForTwoMessage}</p>
        <p>{avgRating}</p>
        <p>{cuisines.join(",")}</p>
      </div>

      <div className="menuList">
        <h2 className="title">{title}</h2>
        <ul>
          {itemCards.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
                Rs.
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
