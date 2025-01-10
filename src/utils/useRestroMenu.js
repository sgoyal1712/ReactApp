import { useEffect, useState } from "react";

import { MENU_URL } from "./constants";

const useRestroMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    const completeUrl = MENU_URL + resId;

    const res = await fetch(completeUrl);
    const productObj = await res.json();
    setResInfo(productObj);

  }
  useEffect(()=> {
    fetchData();
  }, [])

  return resInfo;

}

export default useRestroMenu;