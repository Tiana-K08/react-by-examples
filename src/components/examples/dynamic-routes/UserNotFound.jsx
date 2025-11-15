import { Link } from 'react-router-dom';

export default function UserNotFound() {
  return (
    <div>
      <h1>Oops! This user not found</h1>
      <Link to="/dynamic-routes">Return to the list of users</Link>
    </div>
  );
}
