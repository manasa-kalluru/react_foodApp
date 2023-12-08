import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Divider from "./Divider";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// {console.log(typeof(resList))}
// let listOfRes = [];
// {console.log(resList[1].info.avgRating)}
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);

  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("FETCH DATA");
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("POST DATA");
  //   postData();
  // }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/api/seo/getListing?lat=17.385044&lng=78.486671"
    );
    const json = await data.json();
    console.log(json);
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

  const postData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            contentType: "application/json",
            path: "/dapi/restaurants/list/update",
            Origin: "https://www.swiggy.com",
          },
          redirect: "follow",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: JSON.stringify({
            lat: 17.385044,
            lng: 78.486671,
            nextOffset: "COVCELQ4KICg3JD4m/m4JTCnEw==",
            widgetOffset: {
              NewListingView_Topical_Fullbleed: "",
              NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
              Restaurant_Group_WebView_PB_Theme: "",
              Restaurant_Group_WebView_SEO_PB_Theme: "",
              collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "70",
              inlineFacetFilter: "",
              restaurantCountWidget: "",
            },
            filters: {},
            seoParams: {
              seoUrl: "https://www.swiggy.com/",
              pageType: "FOOD_HOMEPAGE",
              apiName: "FoodHomePage",
            },
            page_type: "DESKTOP_WEB_LISTING",
            _csrf: "Qo7Zjg1Mzc1i-tg4mm3IO4qBvq8jEGfCjwKDSUo8",
          }),
        }
      );
      const data = await response.json();
      console.log("post data is");
      console.log(data);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
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
    <div className="Body" >
      <div className="filter flex m-4">
        <div>
        <input
          type="text"
          className="border border-solid border-black py-1 ml-5"
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
      <div className="flex flex-wrap align-super">
        {searchedRestaurants.map((res) => {
          return (
            <Link
              className="resCardLink"
              key={res.info.id}
              to={"/restaurants/" + res.info.id}
            >
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
