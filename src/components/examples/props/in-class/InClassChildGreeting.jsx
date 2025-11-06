import { Component } from 'react';

export default class InClassChildGreeting extends Component {
  render() {
    return <p>Welcome, {this.props.userName}!</p>;
  }
}
