import ListA from './ListA.jsx';
import ListB from './ListB.jsx';

import './ListsContainer.css';

function ListsContainer() {
  return (
    <div className="lists-container">
      <ListA />
      <ListB />
    </div>
  );
}

export default ListsContainer;
