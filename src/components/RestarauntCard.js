import { RES_IMG } from "../utils/constants";
const RestarauntCard = (props) => {
    const {resData} = props;
    const {name, avgRatingString, totalFee, costForTwo, cloudinaryImageId} = resData?.info;
    return (
      <div className="res-card">
        <img className="res-image" src={RES_IMG + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h5>{avgRatingString}</h5>
        <h5>{totalFee}</h5>
        <h5>{costForTwo}</h5>
      </div>
    );
  }

  export default RestarauntCard;