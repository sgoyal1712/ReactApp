import RestroContainer from "./RestroContainer";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const isUserOnline = useOnlineStatus();

  if (!isUserOnline) {
    return <div className="">Looks Like You Are Offline</div>;
  }

  return (
    <div className="body">
      <RestroContainer />
    </div>
  );
};

export default Body;