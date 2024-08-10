// import { useState } from "react"
import React from "react"
import { useState } from "react"
import './Calculator.css'

const Calculator = () => {

  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const handleClick = (exp) => {
    setInput(prev => prev + exp)
  }

  const handleClear = () => {
    setInput('')
    setResult('')
  }

  const handleCalculate = () => {
    try {
      if(!input) {
        setResult('Error')
      } else {
      setResult(eval(input))
      }
    } catch (error) {
      console.log('ERROR',error)
      setResult('Error')
      return null
    }
  }

  return (
    <>
      <div id="calculator">
        <div>
          <input type="text" value={input} />
          <div>{result}</div>
        </div>
        <div className="row">
          <button className="button" onClick={() => handleClick('7')}>7</button>
          <button className="button" onClick={() => handleClick('8')}>8</button>
          <button className="button" onClick={() => handleClick('9')}>9</button>
          <button className="button" onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="button" onClick={() => handleClick('4')}>4</button>
          <button className="button" onClick={() => handleClick('5')}>5</button>
          <button className="button" onClick={() => handleClick('6')}>6</button>
          <button className="button" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button className="button" onClick={() => handleClick('1')}>1</button>
          <button className="button" onClick={() => handleClick('2')}>2</button>
          <button className="button" onClick={() => handleClick('3')}>3</button>
          <button className="button" onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="row">
          <button className="button" onClick={handleClear}>C</button>
          <button className="button" onClick={() => handleClick('0')}>0</button>
          <button className="button" onClick={handleCalculate}>=</button>
          <button className="button"  onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </>
  )
}

export default Calculator