import { useRef } from "react";

const App = () => {
  const potato = useRef();
  // setTimeout(() => console.log(potato.current), 5000);
  setTimeout(() => potato.current.focus(), 5000);
  return (
    <div className="App">
      <h2>Hello!</h2>
      <input ref={potato} placeholder="la" />
    </div>
  );
};

export default App;
