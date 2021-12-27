import React from "react";
const NewList = ({ data, title }) => {
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
