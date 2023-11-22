import ResterauntCard from "./ResterauntCard";
import resList from "../utils/mockData";
const Body = () => {
    return (
      <div className="resteraunt-container">
        {
          resList.map((res) => {
            return <ResterauntCard key = {res.info.id} resData = {res} />
          })
        }
        
      </div>
    );
  }

  export default Body;