import ChildButton from './ChildButton.jsx';

function ParentButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <div className="parent-wrapper">
      <h3>Passing an event handler function via props</h3>
      <ChildButton onClick={handleClick} />
    </div>
  );
}

export default ParentButton;
