import { useState } from 'react';

import PageItem from './PageItem.jsx';

import './PageContainer.css';

function PageContainer() {
  // --- Single state object ---
  // const [state, setState] = useState({
  //   pageTitle: 'Example №3',
  //   pageItems: [{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }],
  // });

  // --- Separate states ---
  const [pageTitle, setPageTitle] = useState('Example №3');
  const [pageItems, setPageItems] = useState([
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ]);

  // --- Updating page title with single state object ---
  // const handlePageTitleUpdate = () => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     pageTitle: 'Welcome to my page',
  //   }));
  // };

  // --- Updating page title with separate state ---
  const handlePageTitleUpdate = () => {
    setPageTitle('Welcome to my page');
  };

  // --- Rendering list items with single state object ---
  // function renderPageItems() {
  //   return state.pageItems.map((item, idx) => (
  //     <div key={idx}>
  //       <PageItem title={item.title} url={'https://google.com'} />
  //     </div>
  //   ));
  // }

  // --- Rendering list items with separate state ---
  function renderPageItems() {
    return pageItems.map((item, idx) => (
      <div key={idx}>
        <PageItem title={item.title} url="https://google.com" />
      </div>
    ));
  }

  // --- Rendering component with single state object ---
  //   return (
  //     <div className="page-wrapper">
  //       <h2 onClick={handlePageTitleUpdate}>{state.pageTitle}</h2>
  //       {renderPageItems()}
  //     </div>
  //   );

  // --- Rendering component with separate states ---
  return (
    <div className="page-wrapper">
      <h2 onClick={handlePageTitleUpdate}>{pageTitle}</h2>
      {renderPageItems()}
    </div>
  );
}

export default PageContainer;
