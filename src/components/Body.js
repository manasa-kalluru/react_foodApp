import ResterauntCard from "./ResterauntCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="Body">
        <div className="filter">
            <button className="filter-btn" >Top Rated Resteraunts</button>
        </div>
      <div className="resteraunt-container">
        {resList.map((res) => {
          return <ResterauntCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
