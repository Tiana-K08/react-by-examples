import { useParams } from 'react-router-dom';

import users from './users.json';
import UserNotFound from './UserNotFound.jsx';

export default function UserFile() {
  const { id } = useParams();
  const parsedId = Number(id);

  if (Number.isNaN(parsedId)) {
    return <UserNotFound />;
  }

  const user = users.find((u) => u.id === parsedId);

  if (!user) return <UserNotFound />;

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
