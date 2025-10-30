import { Component } from 'react';

class InClassChildGreeting extends Component {
  render() {
    return <p>Welcome, {this.props.userName}!</p>;
  }
}

export default InClassChildGreeting;
