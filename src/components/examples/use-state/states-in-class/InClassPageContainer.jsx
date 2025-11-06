import { Component } from 'react';

import InClassPageItem from './InClassPageItem.jsx';

import './InClassPageContainer.css';

export default class InClassPageContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: 'Example №4 (In Class)',
      pageItems: [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' },
      ],
    };

    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }

  handlePageTitleUpdate() {
    this.setState({
      pageTitle: 'Welcome to my page (In Class)',
    });
  }

  renderPageItems() {
    return this.state.pageItems.map((item, idx) => {
      return (
        <div key={idx}>
          <InClassPageItem title={item.title} url={'https://google.com'} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="page-container">
        <h2 onClick={this.handlePageTitleUpdate}>{this.state.pageTitle}</h2>
        {this.renderPageItems()}
      </div>
    );
  }
}
