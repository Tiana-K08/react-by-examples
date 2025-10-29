import { useState } from 'react';

import Button from '../useState/Button/Button.jsx';

import './List.css';

function ListB() {
  const students = [
    'Henry Parker',
    'Harper Scott',
    'Isabella Clark',
    'Mia Walker',
    'Samuel Brooks',
  ];

  const [nameList, setNameList] = useState(students);

  const handleNewStudent = () => {
    setNameList([...nameList, 'New Student']);
  };

  function renderNameList() {
    return nameList.map((student, index) => <li key={index}>{student}</li>);
  }

  return (
    <div className="list-wrapper">
      <h2>List B</h2>
      <h4>Mapping using a separate helper function</h4>
      <ul className="students-list">{renderNameList()}</ul>
      <div className="btn-container">
        <Button onClick={handleNewStudent} label="New Student" />
      </div>
    </div>
  );
}

export default ListB;
