import ListA from '../lists/ListA.jsx';
import ListB from '../lists/ListB.jsx';

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
