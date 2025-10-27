import ChildCards from './ChildCards.jsx';

function ParentCardTwo() {
  return (
    <div className="parent-wrapper">
      <h3>
        Passing content from an individual component to a wrapper component
      </h3>
      <ChildCards>
        <h3>Second Product Name</h3>
        <p>Description of the second product</p>
      </ChildCards>
    </div>
  );
}

export default ParentCardTwo;
