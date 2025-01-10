import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import Search from "./Search";

import restList from "../utils/mockData";

const RestroContainer = () => {
  const [listOfRest, setListOFRest] = useState([]);
  const [filterdRest, setFilterRest] = useState(listOfRest);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    setListOFRest(products);
    setFilterRest(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterRestro = (val) => {
    const filterdRest = listOfRest.filter((rest) => rest.rating?.rate > 4);

    setFilterRest(filterdRest);
  };

  return !listOfRest.length ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex m-4 p-4">
        <Search />
        <div className="items-center">
          <button className="px-4 py-1 m-4  bg-gray-100 rounded-lg" onClick={filterRestro}>
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterdRest.map((restObj) => {
          return (
            <Link
              className="link"
              key={restObj.id}
              to={"restaurants/" + restObj.id}
            >
              <RestroCard restData={restObj} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestroContainer;
