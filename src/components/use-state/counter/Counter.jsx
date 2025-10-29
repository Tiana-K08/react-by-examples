import { useState } from 'react';

import CommonButton from '../../common-button/CommonButton.jsx';

import './Counter.css';

function Counter() {
  const [counter, setCounter] = useState(0);
  // let x = 0;

  const handleIncrease = () => {
    setCounter(counter + 1);
    // x = x + 1;
    // console.log(x);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
    // x = x - 1;
    // console.log(x);
  };

  return (
    <div className="counter-wrapper">
      <h2>Example №1</h2>
      <div className="result">
        <span>{counter}</span>
      </div>
      <div className="btn-container">
        <CommonButton
          className="state-component-button"
          onClick={handleIncrease}
          label="Increase +"
        />
        <CommonButton
          className="state-component-button"
          onClick={handleDecrease}
          label="Decrease -"
        />
      </div>
    </div>
  );
}

export default Counter;
