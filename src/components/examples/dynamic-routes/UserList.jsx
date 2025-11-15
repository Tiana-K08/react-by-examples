import { Link } from 'react-router-dom';

import users from './users.json';

import './UserList.css';

export default function UserList() {
  return (
    <div className="user-list-wrapper">
      <h2>USERS</h2>
      {users.map((user) => (
        <Link to={`user/${user.id}`} className="user-link" key={user.id}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}
