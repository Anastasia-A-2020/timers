import { useSelector } from "react-redux";
import { Button } from "./components/Button/Button";
import { ClearButton } from "./components/ClearButton/ClearButton";

function App() {
  const logResults = useSelector(state => state.app.result);

  return (
    <div className="relative flex w-full min-h-screen  items-center justify-center ">
      <div
        className="rounded-lg  w-[90vw] min-h-[90vh] p-2 
        flex items-start justify-around sm:justify-center sm:gap-2
       bg-teal-600 md:bg-sky-800"
      >
        <Button seconds={1} />
        <Button seconds={2} />
        <Button seconds={3} />
        <ClearButton />
      </div>

      <div
        className="absolute p-2 
      flex flex-col items-center justify-start rounded w-[95vw] h-[70vh]
      overflow-auto bg-white shadow-md"
      >
        {logResults?.length > 0 ? (
          logResults.map(({ button, log, click }) => {
            const timeDifferenceInSeconds = Number.parseInt(
              (log.getTime() - click.getTime()) / 1000
            );

            return (
              <p key={click.getTime()}>
                <span className="font-bold">Button {button}: </span>
                {log.toLocaleTimeString()} - {click.toLocaleTimeString()} (
                {timeDifferenceInSeconds}sec)
              </p>
            );
          })
        ) : (
          <p>Click some button</p>
        )}
      </div>
    </div>
  );
}

export default App;
