import { useState } from 'react';
import './App.css'

import { FaPlus , FaTimes, FaMinus, FaDivide, FaEquals } from 'react-icons/fa'


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("0");
  const operations = ["+", "-", "*", "/"];

  const calculate = (value) => {
    if (calc.includes(value) && operations.includes(value)) {
      return;
    }
    if (calc === "" && operations.includes(value)) {
      return;
    } 

    setCalc(calc + value);
  }
  
  const generateNumbers = () => {
    const numbers = [];

    for (let i = 9; i >= 0; i--) {
      numbers.push(
        <button key={i}
          onClick={ () => {
            calculate(i);
          }}>
          {i}
        </button>
      );
    }
    return numbers;
  }

  const Clear = () => { 
    setCalc("");
    setResult("0");
  }

  const equal = async () => {
    setCalc(calc.toString());
    setResult(eval(calc));
    setCalc("");
  }

  return (
    <div className='App'>
      <div className="calculator">
        <div className='display'>
          <span>{calc ?  calc : result}</span>
        </div>
        <div className='operators'>
          <button onClick={Clear}>C</button>
          <button onClick={() => calculate("/")}>
            <FaDivide />
          </button>
          <button onClick={() => calculate("*")}>
            <FaTimes />
          </button>
          <button onClick={() => calculate("-")}>
            <FaMinus />
          </button>
          <button onClick={() => calculate("+")}>
            <FaPlus />
          </button>
          <button onClick={equal}>
            <FaEquals />
          </button>
        </div>
        <div className='numbers'>
          {generateNumbers()}
        </div>
      </div>
    </div>
  )
}

export default App
