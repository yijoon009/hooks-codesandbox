import { useState } from "react";
import "./styles.css";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    // console.log(event.target);
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(event.target.value);
    }
    if (willUpdate) {
      setValue(event.target.value);
    }
  };
  return { value, onChange };
};

export const App = () => {
  // const maxLen = (value) => value.length <= 10;
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        placeholder="Name"
        // value={name.value}
        // onChange={name.onChange}
        {...name}
      />
    </div>
  );
};

export default App;
