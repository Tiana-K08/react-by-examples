import { Component } from 'react';

class InClassPageItem extends Component {
  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          link
        </a>
      </>
    );
  }
}

export default InClassPageItem;
