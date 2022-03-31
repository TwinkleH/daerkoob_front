import React, { useCallback, useEffect, useState } from "react";
import TransList from "components/List/TransList";
import TransRegister from "../../components/Card/TransRegister";
import useCurrentUser from "Hooks/useCurrentUser";
import api from "api/api";

const TransDetail = ({ isbn, title }) => {
  const { currentUser } = useCurrentUser();
  const [otherTrans, setOtherTrans] = useState([]);
  const [transPage, setTransPage] = useState(0);
  const [totalTransPage, setTotalTransPage] = useState(0);
  const [inView, setInView] = useState(false);
  const [loading, setLoading] = useState(false); //trans
  const handleThumb = () => {
    handleTransExist();
    setTransPage(totalTransPage / 5 + 1);
  };
  const handleTransExist = useCallback(async () => {
    setLoading(true);
    const response = await api.get(
      `transcription/inquiry/${currentUser.id}/${isbn}/${transPage}`
    );
    //검색
    let preData = [];
    if (response.data.totalSize > 0) {
      response.data.list.forEach((item) => {
        preData.push(item);
      });
      setOtherTrans([...otherTrans, ...preData]);
    }
    setTotalTransPage(response.data.totalSize);
    setLoading(false);
  }, [transPage]);
  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setTransPage(transPage + 1);
    }
  }, [inView, loading]);
  useEffect(() => {
    handleTransExist();
  }, [handleTransExist]);
  return (
    <div className="detail__trans">
      <TransList
        data={otherTrans}
        onThumb={handleThumb}
        title={title}
        setInView={setInView}
        totalTransPage={totalTransPage}
      />
      <TransRegister isbn={isbn} update={handleTransExist} />
    </div>
  );
};

export default TransDetail;
