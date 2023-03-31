import { useState } from 'react';
import './App.css'

import { FaPlus , FaTimes, FaMinus, FaDivide, FaEquals } from 'react-icons/fa'


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("0");
  const [verify, setVerify] = useState(false);
  const operations = ["+", "-", "*", "/"];

  const calculate = (value) => {
    if (calc.includes(value) && operations.includes(value)) {
      return;
    }
    if (calc === "" && operations.includes(value) || (calc === "" && value === ".")){
      return;
    }
    

    setCalc(calc + value);
  }

  const verifyPoint = () => {
    if (verify === true) {
      return;
    } else {
        setVerify(true);
        calculate(".");
    }
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
    setVerify(false);
  }

  const equal = async () => {
    if (calc === "") {
      return;
    }
    setCalc(calc.toString());
    setResult(eval(calc));
    setCalc("");
    setVerify(false);
  }

  return (
    <div className='App'>
      <div className="calculator">
        <div className='display'>
          <span>{calc ?  calc : result}</span>
        </div>
        <div className='operators'>
          <button onClick={Clear}>C</button>
          <button onClick={() => {
              calculate("/");
              setVerify(false);
            }}>
            <FaDivide />
          </button>
          <button onClick={() => {
              calculate("*");
              setVerify(false);
            }}>
            <FaTimes />
          </button>
          <button onClick={() => {
              calculate("-");
              setVerify(false);
            }}>
            <FaMinus />
          </button>
          <button onClick={() => {
              calculate("+");
              setVerify(false);
            }}>
            <FaPlus />
          </button>
          <button onClick={equal}>
            <FaEquals />
          </button>
        </div>
        <div className='numbers'>
          {generateNumbers()}
          <button className='point' onClick={() => {
              verifyPoint();
            }}>.</button>
        </div>
      </div>
    </div>
  )
}

export default App
