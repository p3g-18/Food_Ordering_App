import ItemList from "./itemList";

const RestaurantCategory = ({ data, showItems, showIndex, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(!showIndex);
  };
  // console.log("Data", data);
  if (!data) {
    console.error("Data is undefined or null:", data);
    return null;
  }
  return (
    <div>
      {/* header */}
      <div className="category w-6/12 mx-auto my-4 shadow-xl bg-slate-100 p-4 text-center cursor-pointer  ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className=" font-extrabold">
            {data.card?.title} ({data.card.itemCards.length})
          </span>

          <span> {showItems ? "🔽" : "🔼"} </span>
        </div>
        {showItems && <ItemList items={data.card.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
