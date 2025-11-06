import ChildCards from './ChildCards.jsx';

export default function ParentCardOne() {
  return (
    <div className="parent-container">
      <h3>
        Passing content from an individual component to a wrapper component
      </h3>
      <ChildCards>
        <h3>First Product Name</h3>
        <p>Description of the first product</p>
      </ChildCards>
    </div>
  );
}
