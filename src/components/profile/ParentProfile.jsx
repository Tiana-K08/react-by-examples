import ChildProfile from './ChildProfile.jsx';

function ParentProfile() {
  const user = {
    firstName: 'William',
    lastName: 'Jones',
    email: 'test@email.com',
  };

  return (
    <div className="parent-wrapper">
      <h3>Passing an object via props</h3>
      <ChildProfile user={user} />
    </div>
  );
}

export default ParentProfile;
