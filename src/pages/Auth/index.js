import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

// import Header from "components/Auth/Header";
// import Main from "components/Auth/Main";
// import Layout from "components/Common/Layout";

const Auth = () => {
  const history = useHistory();
  const location = useLocation();

  const [kind, setKind] = useState("로그인");

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/signup") setKind("회원가입");
    else if (pathname === "/login") setKind("로그인");
    else history.push("/");
  }, [history, location]);

  return (
    // <Layout>
    //   <Header kind={kind} />
    //   <Main kind={kind} />
    // </Layout>
    <div>{kind}</div>
  );
};

export default Auth;
