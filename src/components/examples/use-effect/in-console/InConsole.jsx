import { useState, useEffect } from 'react';

import './InConsole.css';

export default function InConsole() {
  const [firstState, setFirstState] = useState(0);
  const [secondState, setSecondState] = useState(0);

  useEffect(() => {
    console.log('Effect is working (1)');
  }, [firstState]);

  useEffect(() => {
    console.log('Effect is working (2)');
  }, [secondState]);

  const handleChangeFirstState = () => {
    setFirstState(firstState + 1);
  };

  const handleChangeSecondState = () => {
    setSecondState(secondState + 1);
  };

  return (
    <div className="console-example-wrapper">
      {console.log('Component render')}
      <h2>Example №1</h2>
      <p>The first state has been changed {firstState} times.</p>
      <button onClick={handleChangeFirstState}>Change the first state</button>
      <p>The second state has been changed {secondState} times.</p>
      <button onClick={handleChangeSecondState}>Change the second state</button>
    </div>
  );
}
