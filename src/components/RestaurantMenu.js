import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);

    // const uber = await fetch("https://corsproxy.io/?https://www.ubereats.com/_p/api/getFeedV1");
    // const uberJson = await uber.json();
    // console.log(uberJson);
  };

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
          <div className="menu-items" key = {id}>
            <ul>
              <li className="itemName">
                {name} - Rs.{price/100}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
