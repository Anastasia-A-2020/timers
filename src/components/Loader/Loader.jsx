import { useSelector } from "react-redux";
import { ClockLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "10px auto",
};

export const Loader = () => {
  const isLoading = useSelector(state => state.app.isLoading);
  return (
    <ClockLoader
      loading={isLoading}
      size={25}
      aria-label="Loading Spinner"
      color={window.innerWidth < 768 ? "rgb(13, 148, 136)" : "rgb(7, 89, 133)"}
      cssOverride={override}
    />
  );
};
