import ListA from './ListA.jsx';
import ListB from './ListB.jsx';

import './ListsContainer.css';

export default function ListsContainer() {
  return (
    <div className="lists-wrapper">
      <ListA />
      <ListB />
    </div>
  );
}
