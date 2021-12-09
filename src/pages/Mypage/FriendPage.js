import InfoCard from "components/Card/InfoCard";
import React from "react";

const FriendPage = ({ match }) => {
  console.log(match);
  const id = match.params.id;
  return (
    <div>
      <InfoCard id={id} />
    </div>
  );
};

export default FriendPage;
