import { useEffect, useRef } from "react";

const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  if (typeof onHover !== "function") {
    return;
  }
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello!</h1>
    </div>
  );
};

export default App;
