import InfoCard from "components/Card/InfoCard";
import React from "react";
import Grass from "components/Card/Grass";
import "pages/Mypage/index.scss";
const FriendPage = ({ match }) => {
  const id = match.params.id;
  const year = new Date().getFullYear();
  return (
    <div className="friendPage">
      <InfoCard id={id} />
      <div className="grass">
        <Grass userId={id} year={year} />
      </div>
    </div>
  );
};

export default FriendPage;
