import React from "react";
import useCurrentUser from "Hooks/useCurrentUser";
import "pages/Mypage/index.scss";
import "slick-carousel/slick/slick-theme.css";
import InfoCard from "components/Card/InfoCard";
import Grass from "components/Card/Grass";
const Mypage = () => {
  console.log();

  const { currentUser } = useCurrentUser();
  const year = new Date().getFullYear();
  return (
    <div className="mypage">
      <InfoCard person="myself" id={currentUser.id} />
      <Grass userId={currentUser.id} year={year} />
    </div>
  );
};

export default Mypage;
