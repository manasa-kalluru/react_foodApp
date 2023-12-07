import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p className="menu-cuisines">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      {itemCards.map((card) => {
        const { name, id, price } = card?.card?.info;
        return (
          <div className="menu-items" key={id}>
            <ul>
              <li className="itemName">
                {name} - Rs.{price / 100}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
