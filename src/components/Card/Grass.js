import React, { useEffect, useState } from "react";
import useCurrentUser from "Hooks/useCurrentUser";
import api from "api/api";
import "components/Card/Grass.scss";
const Grass = ({ userId, year }) => {
  //   const { currentUser } = useCurrentUser();
  //   const response = ""
  const [list, setList] = useState([]);
  useEffect(() => {
    const init = async () => {
      const response = await api.get(`user/record/${userId}/${year}`);
      console.log(response);
      setList([...response.data]);
    };
    init();
    return () => {};
  }, []);
  //   const year = new Date().getFullYear();
  //   console.log(year);
  //   var year = now.getFullYear();	// 연도

  const firstDateOfYear = new Date(year, 0, 1).getDay();
  const lastDateOfYear = new Date(year, 11, 31).getDay();
  console.log(firstDateOfYear);
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  for (let i = 0; i < firstDateOfYear; i++) {
    list.unshift(null);
  }
  for (let i = 7; i > lastDateOfYear + 1; i--) {
    // console.log("a");
    list.push(null);
  }
  console.log(list);
  return (
    <div className="grass__wrapper">
      {day.map((d) => (
        <span>{d}</span>
      ))}
      {list.map((d) => (
        <span className="grass__wrapper__block">{d}</span>
      ))}
    </div>
  );
};

export default Grass;
