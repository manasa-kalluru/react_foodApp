import { RES_IMG } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRatingString, costForTwo, cloudinaryImageId, cuisines } =
    resData?.info;
  return (
    <div className="m-2 p-2 w-[275px] hover:scale-[1.03] rounded-lg h-[275px]">
      <img className="res-image rounded-lg h-[160px] w-full" alt="res-logo" src={RES_IMG + cloudinaryImageId} />
      <h3 className="font-bold pt-4 text-lg line-clamp-1">{name}</h3>
      <div className="flex flex-wrap p-2 pl-0"><p className="pr-4">{avgRatingString}</p>
      <p>{costForTwo}</p> </div>
      <p className="line-clamp-1 pr-1">{cuisines.join(",")}</p>
    </div>
  );
};

//Higher Order Component

// input - resCard output - Res card with offer

export const withOfferLabel = (RestaurantCard) => {
  return () => {
    <div>
      <label>{props}</label>
      <RestaurantCard />
    </div>
  }
}


export default RestaurantCard;