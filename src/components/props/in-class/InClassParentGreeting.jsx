import { Component } from 'react';

import InClassChildGreeting from './InClassChildGreeting.jsx';

class InClassParentGreeting extends Component {
  render() {
    let userName = 'Alex';

    return (
      <div className="parent-wrapper">
        <h3>
          Passing data to props via component attributes (Class Components)
        </h3>
        <p>Passing a prop value from a variable:</p>
        <InClassChildGreeting userName={userName} />
        <p>Passing a prop value directly (as a string):</p>
        <InClassChildGreeting userName="Mary" />
      </div>
    );
  }
}

export default InClassParentGreeting;
