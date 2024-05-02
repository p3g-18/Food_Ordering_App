import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  console.log("items", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch and action
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 relative border-gray-300 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12 ">
              <div className="p-2">
                <span className=" font-bold ">{item.card.info.name}</span>
                <span className=" font-semibold">
                  {" "}
                  - Rs{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>

              <p className="text-s text-gray-400">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-60 px-4 h-40 ml-10 relative  ">
              <div className="absolute  inset-x-0 bottom-0 flex items-center justify-center">
                <button
                  className=" p-2 w-32 rounded-md bg-green-600 hover:bg-green-400 hover:text-black text-white "
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>

              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-full object-cover  rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
