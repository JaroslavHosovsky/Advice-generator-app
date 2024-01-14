import mobileDivider from "./img/pattern-divider-mobile.svg";
import desktopDivider from "./img/pattern-divider-desktop.svg";
import imgDice from "./img/icon-dice.svg";
import { useState, useEffect } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");
  const url = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const finalAdvice = data.slip.advice;
    const id = data.slip.id;
    setAdvice(finalAdvice);
    setId(id);
  };

  const anotherAdvice = () => {
    getAdvice();
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <section className="card-wrapper">
      <div className="text-wrapper">
        <p>ADVICE # {id}</p>
        <h1> "{advice}"</h1>
        <img src={mobileDivider} alt="" className="divider" />
        <div className="img-wrapper" onClick={anotherAdvice}>
          <img src={imgDice} alt="" />
        </div>
      </div>
    </section>
  );
};

export default App;

//
