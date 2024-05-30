import { useEffect, useState } from "react";
import "./index.css";

function App() {
  let words = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const [index, setIndex] = useState(0);

  let randomLetter = () => {
    setIndex(Math.floor(Math.random() * words.length));
  };

  useEffect(() => {
    let interval = setInterval(randomLetter, 1000);

    console.log(interval);

    return interval;
  }, []);

  return (
    <div className="App">
      <h1>{words[index]}</h1>
    </div>
  );
}

export default App;
