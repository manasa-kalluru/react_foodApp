import RestarauntCard from "./RestarauntCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Divider from "./Divider";

// {console.log(typeof(resList))}
// let listOfRes = [];
// {console.log(resList[1].info.avgRating)}
const Body = () => {
  const [listOfRestaraunts, setListOfRestaraunts] = useState([]);
  const [searchedRestaraunts, setSearchedRestaraunts] = useState([]);

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
    setListOfRestaraunts(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchedRestaraunts(
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
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  if (listOfRestaraunts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const searchedList = listOfRestaraunts.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchedRestaraunts(searchedList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setSearchedRestaraunts(filteredList);
          }}
        >
          Top Rated Restaraunts
        </button>
      </div>
      <div className="restaraunt-container">
        {searchedRestaraunts.map((res) => {
          return <RestarauntCard key={res.info.id} resData={res} />;
        })}
        
      </div>
    </div>
  );
};

export default Body;
