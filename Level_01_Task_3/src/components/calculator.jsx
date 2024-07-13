import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleEquals = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      alert('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleClick('1')} className='number'>1</button>
        <button onClick={() => handleClick('2')} className='number'>2</button>
        <button onClick={() => handleClick('3')} className='number'>3</button>
        <button onClick={handleClear} className='operator'>C</button>
        <button onClick={() => handleClick('4')} className='number'>4</button>
        <button onClick={() => handleClick('5')} className='number'>5</button>
        <button onClick={() => handleClick('6')} className='number'>6</button>
        <button onClick={() => handleClick('/')} className='operator'>/</button>
        <button onClick={() => handleClick('7')} className='number'>7</button>
        <button onClick={() => handleClick('8')} className='number'>8</button>
        <button onClick={() => handleClick('9')} className='number'>9</button>
        <button onClick={() => handleClick('+')} className='operator'>+</button>
        <button onClick={() => handleClick('-')} className='operator'>-</button>
        <button onClick={() => handleClick('0')} className='number'>0</button>
        <button onClick={() => handleClick('*')} className='operator'>*</button>
        <button onClick={handleEquals} className='operator'>=</button>
      </div>
    </div>
  );
};

export default Calculator;
