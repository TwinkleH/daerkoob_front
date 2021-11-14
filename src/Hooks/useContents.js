import { useRecoilState } from "recoil";
import { currentContentState } from "Store";
const useContents = () => {
  const [currentContent, setCurrentContents] =
    useRecoilState(currentContentState);

  return { currentContent, setCurrentContents };
};

export default useContents;
