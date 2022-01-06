import InfoCard from "components/Card/InfoCard";
import React from "react";
import Grass from "components/Card/Grass";

const FriendPage = ({ match }) => {
  console.log(match);
  const id = match.params.id;
  const year = new Date().getFullYear();
  return (
    <div>
      <InfoCard id={id} />
      <div className="grass">
        <Grass userId={id} year={year} />
      </div>
    </div>
  );
};

export default FriendPage;
