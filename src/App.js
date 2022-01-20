import { useEffect, useRef } from "react";

const useConfirm = (message = "", onConfirm, onCancle) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancle && typeof onCancle !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const confiemDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confiemDelete}>Delete the world</button>
    </div>
  );
};

export default App;
