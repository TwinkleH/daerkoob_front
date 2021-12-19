import React from "react";
// import "components/List/NewList.scss";
const NewList = ({ data, title }) => {
  //   console.log("newList");
  //   console.log(data);
  return (
    <div className="home__newList__line__one">
      {title && title}
      <ul>
        {data.user.nickName}:{data.content}
      </ul>
    </div>
  );
};

export default NewList;
