import {CDN_URL} from "../utils/constants"

const RestroCard = ({ restData }) => {
  const {title, description, rating, image} = restData;
  return (
    <div className='m-4 p-4 w-[250px] h-[600px] rounded-lg bg-gray-100 hover:bg-gray-400'>
      <img className='items-center h-1/4 w-5/6 rounded-lg' src={image} alt="Restaurant Food" />
      <h3 className="font-bold py-2 h-1/6">{title}</h3>
      <h4 className="line-clamp-[5] h-1/2">{description}</h4>
      <h4 className="font-bold end-0 h-1/12">Rating: {rating.rate} Star</h4>
    </div>
  );
};

export default RestroCard;