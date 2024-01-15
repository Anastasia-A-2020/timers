import { Button } from "../Button/Button";
import { ClearButton } from "../ClearButton/ClearButton";

export const Actions = () => {
  return (
    <div
      className="rounded-lg  w-[90vw] min-h-[90vh] p-2 
        flex  justify-around flex-wrap content-start sm:justify-center gap-2
       bg-teal-600 md:bg-sky-800"
    >
      <Button seconds={1} />
      <Button seconds={2} />
      <Button seconds={3} />
      <ClearButton />
    </div>
  );
};
