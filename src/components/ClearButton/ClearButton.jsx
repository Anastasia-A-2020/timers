import { useDispatch } from "react-redux";
import { clearLog } from "../../redux/slices/appSlice";

export const ClearButton = () => {
  const dispatch = useDispatch();

  const onClearButtonClick = () => {
    dispatch(clearLog());
  };

  return (
    <button
      type="button"
      className="outline-0 bg-white"
      onClick={onClearButtonClick}
    >
      ClearButton
    </button>
  );
};
