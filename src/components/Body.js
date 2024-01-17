import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import Divider from "./Divider";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);

  let [searchText, setSearchText] = useState("");

  const {loggedInUser, setUserName} = useContext(UserContext);

  const RestaurantCardWithOffer = withOfferLabel(RestaurantCard);

  console.log("Body rendered", listOfRestaurants);

  useEffect(() => {
    console.log("FETCHING DATA");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    //optional chaining
    setListOfRestaurants(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchedRestaurants(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet Connection.
      </h1>
    );

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }


  return (
    <div className="Body w-full">
      <div className="filter flex m-4 w-full justify-center">
        <div>
          <input
            type="text"
            className="border border-solid border-lime-600 w-96 rounded-lg py-1 ml-5"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-1.5 m-4 ml-0 bg-lime-600 hover:text-lime-600 hover:bg-white rounded-lg"
            onClick={() => {
              const searchedList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchedRestaurants(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-1.5 m-4 ml-0 bg-lime-600 hover:text-lime-600 hover:bg-white rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setSearchedRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="filter flex m-4 w-full justify-center">
        <label className="pr-2">UserName </label>
        <input className="border border-black pl-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <div className="flex flex-wrap w-full pl-20">
        {searchedRestaurants.map((res) => {
          return (
            <Link
              className="resCardLink"
              key={res.info.id}
              to={"/restaurants/" + res.info.id}
            >
              {res.info.aggregatedDiscountInfoV3?.header !== undefined ? (
                <RestaurantCardWithOffer resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}

              {/* <RestaurantCard resData={res} /> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
