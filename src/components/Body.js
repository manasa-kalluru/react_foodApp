import ResterauntCard from "./ResterauntCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// {console.log(typeof(resList))}
// let listOfRes = [];
// {console.log(resList[1].info.avgRating)}
const Body = () => {
  const [listOfResteraunts, setListOfResteraunts] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=17.385044&lng=78.486671"
    );
    const json = await data.json();
    console.log(json);
    //optional chaining
    setListOfResteraunts(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(listOfResteraunts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResteraunts.filter(
              (res) =>  res.info.avgRating > 3.7
            );
            setListOfResteraunts(filteredList);
          }}
        >
          Top Rated Resteraunts
        </button>
      </div>
      <div className="resteraunt-container">
          
        {listOfResteraunts.map((res) => {
          return <ResterauntCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
