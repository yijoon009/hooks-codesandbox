import { useEffect, useRef } from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(
    `Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`
  );
  return (
    <div className="App">
      <h2>{data && data.status}</h2>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
