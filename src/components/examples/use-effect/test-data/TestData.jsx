import { useState, useEffect } from 'react';

import './TestData.css';

export default function TestData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="test-data-container">
      {console.log('List of User render')}
      <h2>Example №2</h2>
      <h3>List of Users:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
