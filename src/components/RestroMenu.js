import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";

import RestroMenuShimmer from "./RestroMenuShimmer";

const RestroMenu = () => {

  const { resId } = useParams();
  const product = useRestroMenu(resId);

  if (!product) {
    return <RestroMenuShimmer />;
  }

  const { title, category, image, description } = product;

  return (
    <div className="p-4 m-4 text-center hover:bg-gray-500">
      <h1 className="font-bold">{title}</h1>
      <img className="w-56 h-56 items-center"  src={image} />
      <h2 className="font-bold">{category}</h2>
      <h4>{description}</h4>
    </div>
  );
};

export default RestroMenu;
