import ChildButton from './ChildButton.jsx';

export default function ParentButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <div className="parent-container">
      <h3>Passing an event handler function via props</h3>
      <ChildButton onClick={handleClick} />
    </div>
  );
}
