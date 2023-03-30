import { useState } from 'react';
import './App.css'

function App() {
  const [calc, setCalc] = useState("");
  const operations = ["+", "-", "*", "/"];

  const calculate = (value) => {
    if ((operations.includes(value) && calc === "") || (operations.includes(value) && operations.includes(calc.slice(-1)))) {
      return;
    }
    setCalc(calc + value);

    /*if (operations.includes(value)) {
      setResult(eval(calc + value).toString());
    }*/
  }
  
  const generateNumbers = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button 
          key={i}
          onClick={() => {
            /* TA DANDO TUDO ERRADO AQUI CONSERTA */
            calculate(i.toString());
          }}
        >
          {i}
        </button>
      );
    }
    return numbers;
  }

  const allClear = () => { 
    setCalc("");
  }

  const equal = () => {
    setCalc(eval(calc).toString());
  }

  return (
    <div className='App'>
      <div className="calculator">
        <div className='display'>
          <span>{calc ? calc : "0"}</span> 
        </div>
        <div className='operators'>
          <button onClick={allClear}>AC</button>
          <button onClick={() => calculate("/")}>/</button>
          <button onClick={() => calculate("*")}>*</button>
          <button onClick={() => calculate("-")}>-</button>
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={equal}>=</button>
        </div>
        <div className='numbers'>
          {generateNumbers()}
          <button 
            onClick={() => {
              if (calc != null) {
                allClear();
              } else {
                calculate((0).toString());
              }
            }}
            >
            0
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
