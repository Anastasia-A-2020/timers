import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addNewObjToResult } from "../../redux/slices/appSlice";

export function Button({ seconds }) {
  const dispatch = useDispatch();

  const onButtonClick = async () => {
    const click = new Date();

    const obj = {
      seconds: Number(seconds),
      click,
    };
    dispatch(addNewObjToResult(obj));
  };

  return (
    <button
      data-seconds={seconds}
      type="button"
      className="bg-white"
      onClick={onButtonClick}
    >
      {seconds} sec
    </button>
  );
}

Button.propTypes = {
  seconds: PropTypes.number.isRequired,
};
