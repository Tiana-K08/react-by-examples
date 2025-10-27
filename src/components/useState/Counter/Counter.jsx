import Button from '../Button/Button.jsx';

import './Counter.css';

function Counter() {
  let x = 0;

  const handleIncrease = () => {
    x = x + 1;
    console.log(x);
  };

  const handleDecrease = () => {
    x = x - 1;
    console.log(x);
  };

  return (
    <div className="counter-wrapper">
      <h2>Example №1</h2>
      <div className="result">
        <span>{x}</span>
      </div>
      <div className="btn-container">
        <Button onClick={handleIncrease} label="Increase +" />
        <Button onClick={handleDecrease} label="Decrease -" />
      </div>
    </div>
  );
}

export default Counter;
