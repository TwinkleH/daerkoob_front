import React from "react";
import { FaThumbsUp } from "react-icons/fa";
const NewList = ({ data, title }) => {
  console.log(data);
  return (
    <div className="home__newList__line__one">
      {title && title}
      <span>
        {data.user.nickName}:{data.content}
      </span>
      <p>
        <FaThumbsUp />
        {data.thumbCount}
      </p>
    </div>
  );
};

export default NewList;
