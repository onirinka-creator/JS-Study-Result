import { useState } from 'react'
import './App.css'

const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const opers = ['+', '-', '*', '/'];

function App() {
  const [inputValue, setInputValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  function addToInput(num) {
    if (inputValue === "0" || opers.includes(inputValue)) {
      setInputValue(num);
    } else {
      setInputValue(inputValue + num);
    }
  }

  function chooseOperation(oper) {
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate();
      setInputValue(result);
      setFirstOperand(result);
    }
    setOperator(oper);
    setInputValue(oper);
  }

  function calculate() {
    if (!operator || firstOperand === null) {
      return inputValue;
    }

    const second = inputValue;
    let res = 0;

    switch (operator) {
      case "+":
        res = Number(firstOperand) + Number(second);
        break;
      case "-":
        res = Number(firstOperand) - Number(second);
        break;
      case "*":
        res = Number(firstOperand) * Number(second);
        break;
      case "/":
        res = Number(firstOperand) / Number(second);
        break;
      default:
        return inputValue;
    }
    setOperator(null);
    return String(res);
  }

  function handleEquals() {
    const result = calculate();
    setInputValue(result);
    setFirstOperand(null);  
    setOperator(null);
  }

  function handleCancel() {
    setInputValue('0');
    setFirstOperand(null);
    setOperator(null);
  }

  return (
    <>
      <div>
        <input type="text" value={inputValue} readOnly />
        <div>
          {nums.map((num) => (
            <button key={num} onClick={() => addToInput(num)}>
              {num}
            </button>
          ))}
        </div>
        <div>
          {opers.map((oper) => (
            <button key={oper} onClick={() => chooseOperation(oper)}>
              {oper}
            </button>
          ))}
        </div>
        <div>
          <button onClick={handleEquals}>=</button>
          <button onClick={handleCancel}>C</button>
        </div>
      </div>
    </>
  );
}

export default App
