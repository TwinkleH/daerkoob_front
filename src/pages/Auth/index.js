import { useState } from "react";
import { SignIn } from "components/Auth/SignIn";
import { SignUp } from "components/Auth/SignUp";
import "pages/Auth/index.scss";
import { useHistory } from "react-router";

const Auth = ({ location }) => {
  const history = useHistory();
  console.log(location);
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const beforeLocation = () => {
    !location.state
      ? history.push("/")
      : location.state.isRegister
      ? history.push({
          pathname: location.state.from,
          state: {
            isRegister: location.state.isRegister,
            isTranscription: location.state.isTranscription,
          },
        })
      : history.push(location.state.from);
  };
  return (
    <div className="sign">
      {isSignIn ? (
        <SignIn toggleIsSignIn={toggleIsSignIn} from={beforeLocation} />
      ) : (
        <SignUp toggleIsSignIn={toggleIsSignIn} />
      )}
    </div>
  );
};

export default Auth;
