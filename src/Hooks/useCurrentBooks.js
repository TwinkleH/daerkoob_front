import { useRecoilState } from "recoil";
import { currentBooksState } from "Store";
const useCurrentBooks = () => {
  const [currentBooks, setCurrentBooks] = useRecoilState(currentBooksState);

  return { currentBooks, setCurrentBooks };
};

export default useCurrentBooks;
