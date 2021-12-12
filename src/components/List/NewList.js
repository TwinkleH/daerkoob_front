import React from "react";
// import "components/List/NewList.scss";
const NewList = ({ data, title }) => {
  //   console.log("newList");
  //   console.log(data);
  return (
    <div className="newList">
      {title && title}
      <ul>
        {data.user.nickName}:{data.content}
      </ul>
    </div>
  );
};

export default NewList;
