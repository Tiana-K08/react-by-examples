import ChildCards from './ChildCards.jsx';

function ParentCardThree() {
  return (
    <div className="parent-wrapper">
      <h3>
        Passing content from an individual component to a wrapper component
      </h3>
      <ChildCards>
        <h3>Third Product Name</h3>
        <p>Description of the third product</p>
      </ChildCards>
    </div>
  );
}

export default ParentCardThree;
