import { useRecoilState } from "recoil";
import { currentBookState } from "Store";
const useCurrentBook = () => {
  const [currentBook, setCurrentBook] = useRecoilState(currentBookState);

  return { currentBook, setCurrentBook };
};

export default useCurrentBook;
