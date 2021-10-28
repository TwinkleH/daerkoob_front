import { useRecoilState } from "recoil";
import { currentFormState } from "Store";
const useCurrentForm = () => {
  const [currentForm, setCurrentForm] = useRecoilState(currentFormState);

  return { currentForm, setCurrentForm };
};

export default useCurrentForm;
