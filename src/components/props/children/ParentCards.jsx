import ChildCards from './ChildCards.jsx';

function ParentCards() {
  return (
    <div className="parent-wrapper">
      <h3>Passing content to a wrapper component</h3>
      <ChildCards>
        <h3>First Product Name</h3>
        <p>Description of the first product</p>
      </ChildCards>

      <ChildCards>
        <h3>Second Product Name</h3>
        <p>Description of the second product</p>
      </ChildCards>

      <ChildCards>
        <h3>Third Product Name</h3>
        <p>Description of the third product</p>
      </ChildCards>
    </div>
  );
}

export default ParentCards;
