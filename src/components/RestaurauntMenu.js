import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=377316&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setResInfo(json?.data?.cards[0]?.card?.card);

    const uber = await fetch("https://corsproxy.io/?https://www.ubereats.com/_p/api/getFeedV1");
    const uberJson = await uber.json();
    console.log(uberJson);
  };

  if(resInfo === null){
    return (
        <Shimmer />
      ) ; 
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")} - {costForTwoMessage}</p>
      <ul>
        <li>Biriyani</li>
        <li>Desserts</li>
        <li>Beverages</li>
      </ul>
    </div>
  );
};

export default RestaurauntMenu;
