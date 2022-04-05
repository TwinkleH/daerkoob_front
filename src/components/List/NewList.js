import React from "react";
import { FaThumbsUp } from "react-icons/fa";
const NewList = ({ data, title }) => {
  console.log(data);
  return (
    <tr className="home__newList__line__one">
      {title && title}

      <span className="home__newList__line__one__title">{data.book.title}</span>
      <span className="home__newList__line__one__nickName">
        {/* <FaThumbsUp /> */}

        {data.user.nickName}
      </span>
    </tr>
  );
};

export default NewList;
