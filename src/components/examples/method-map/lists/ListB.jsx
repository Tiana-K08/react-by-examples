import { useState } from 'react';

import CommonButton from '../../../common-button/CommonButton.jsx';

import './List.css';

export default function ListB() {
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
    <div className="list-container">
      <h2>List B</h2>
      <h4>Mapping using a separate helper function</h4>
      <ul className="students-list">{renderNameList()}</ul>
      <div className="btn-container">
        <CommonButton
          className="map-component-button"
          onClick={handleNewStudent}
          label="New Student"
        />
      </div>
    </div>
  );
}
