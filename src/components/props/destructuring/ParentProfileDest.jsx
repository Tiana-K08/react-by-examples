import ChildProfileDest from './ChildProfileDest.jsx';

function ParentProfileDest() {
  const user = {
    firstName: 'Olivia',
    lastName: 'Davis',
    email: 'test@email.com',
  };

  return (
    <div className="parent-wrapper">
      <h3>Passing an object via props with destructuring in child component</h3>
      <ChildProfileDest user={user} />
    </div>
  );
}

export default ParentProfileDest;
