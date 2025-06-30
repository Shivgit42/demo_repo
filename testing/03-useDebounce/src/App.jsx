import { useEffect, useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

//useDebounce
function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedInput = useDebounce(inputValue, 200);

  useEffect(() => {
    console.log("send request to the backend");
  }, [debouncedInput]);

  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
    </div>
  );
}

export default App;
