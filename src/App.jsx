import { useEffect, useState } from "react";
import "./App.css";

let render = "";

const App = () => {
  const [data, Setdata] = useState("");

  const api = () => {
    fetch("https://catfact.ninja/fact")
      .then((resp) => resp.json())
      .then((resp) => Setdata(resp.fact))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api();
  }, []);

  const handleClick = () => {
    api();
    console.log(data);
    render = data;
  };

  return (
    <>
      <div className="wrapper">
        <h2>Press the button for a random cat fact!</h2>
        <hr />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleClick()}
        >
          Get Cat fact
        </button>
        <div>
          <p>{render}</p>
        </div>
      </div>
    </>
  );
};

export default App;
