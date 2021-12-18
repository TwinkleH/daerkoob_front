import React from "react";
import useCurrentUser from "Hooks/useCurrentUser";
import "pages/Mypage/index.scss";
import "slick-carousel/slick/slick-theme.css";
import InfoCard from "components/Card/InfoCard";
const Mypage = () => {
  console.log();

  const { currentUser } = useCurrentUser();

  return (
    <div className="mypage">
      <InfoCard person="myself" id={currentUser.id} />
    </div>
  );
};

export default Mypage;
