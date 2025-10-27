import ChildCards from './ChildCards.jsx';

function ParentCardOne() {
  return (
    <div className="parent-wrapper">
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

export default ParentCardOne;
