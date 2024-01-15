import { useSelector } from "react-redux";
import { Actions } from "./components/Actions/Actions";
import { Loader } from "./components/Loader/Loader";

function App() {
  const logResults = useSelector(state => state.app.result);

  return (
    <div className="relative flex w-full min-h-screen  items-center justify-center ">
      <Actions />

      <div
        className="absolute p-2 
      flex flex-col items-center justify-start rounded w-[95vw] h-[50vh] sm:h-[70vh]
      overflow-auto bg-white shadow-md"
      >
        {logResults.length > 0 ? (
          logResults.map(({ seconds, log, click }) => {
            const timeDifferenceInSeconds = Number.parseInt(
              (log.getTime() - click.getTime()) / 1000
            );
            return (
              <p key={click.getTime()}>
                <span className="font-bold">Button {seconds}: </span>
                {log.toLocaleTimeString()} - {click.toLocaleTimeString()} (
                {timeDifferenceInSeconds}sec)
              </p>
            );
          })
        ) : (
          <p>Click any button</p>
        )}
        <Loader />
      </div>
    </div>
  );
}

export default App;
