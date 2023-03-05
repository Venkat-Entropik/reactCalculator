
import React, { useState } from 'react'
import './calculator.css'

const Calculator = () => {
    const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);

  const handleClick = value => {
    setDisplay(value);
    setExpression([...expression, value]);
  };

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression("");
  };
  return (
    <div className='main'>
        <div id="body">
        <div className='display'>{display}</div>
        <div className='display'>{expression}</div>
        <div className="row1">
            <button className='but' style={{
                backgroundColor:"red",color:"white"
            }} onClick={()=>{
                setDisplay("")
                setExpression([])
            }} value="clear">AC</button>
            <button className='but' onClick={() => handleClick("÷")} >/</button>
            <button className='but' onClick={() => handleClick("x")}>X</button>
        </div>
        <div className="row2">
            <button onClick={() => handleClick(7)} >7</button>
            <button onClick={() => handleClick(8)} >8</button>
            <button onClick={() => handleClick(9)} >9</button>
            <button onClick={() => handleClick("-")} >-</button>
        </div>
        <div className="row3">
            <button onClick={() => handleClick(4)} >4</button>
            <button onClick={() => handleClick(5)} >5</button>
            <button onClick={() => handleClick(6)}>6</button>
            <button onClick={() => handleClick("+")} >+</button>
        </div>
        <div className="row4">
            <button onClick={() => handleClick(1)} >1</button>
            <button onClick={() => handleClick(2)} >2</button>
            <button onClick={() => handleClick(3)}>3</button>
            <button onClick={() => handleClick(".")}>.</button>
        </div>
        <div className="row5">
            <button className='but1' onClick={() => handleClick(0)}>0</button>
            <button className='but1' style={{
                backgroundColor:"blue",
                color:"white"
            }} onClick={() => handleResult()} >=</button>
        </div>
 
        </div>
    </div>
  )
}

export default Calculator