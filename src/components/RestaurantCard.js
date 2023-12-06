import { RES_IMG } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, avgRatingString, costForTwo, cloudinaryImageId} = resData?.info;
    return (
      <div className="res-card">
        <img className="res-image" src={RES_IMG + cloudinaryImageId}/>
        <h3>{name}</h3>
        <p>{avgRatingString}</p>
        <p>{costForTwo}</p>
      </div>
    );
  }

  export default RestaurantCard;