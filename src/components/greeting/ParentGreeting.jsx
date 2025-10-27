import ChildGreeting from './ChildGreeting.jsx';

function ParentGreeting() {
  let userName = 'Alex';

  return (
    <div className="parent-wrapper">
      <h3>Passing data to props via component attributes</h3>
      <p>Passing a prop value from a variable:</p>
      <ChildGreeting userName={userName} />
      <p>Passing a prop value directly (as a string):</p>
      <ChildGreeting userName="Mary" />
    </div>
  );
}

export default ParentGreeting;
