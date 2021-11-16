import { useRecoilState } from "recoil";
import { currentContentState } from "Store";
const useContent = () => {
  const [currentContent, setCurrentContent] =
    useRecoilState(currentContentState);

  return { currentContent, setCurrentContent };
};

export default useContent;
