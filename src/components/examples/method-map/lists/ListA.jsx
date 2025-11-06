import { useState } from 'react';

import CommonButton from '../../../common-button/CommonButton.jsx';

import './List.css';

export default function ListA() {
  const students = [
    'James Carter',
    'Olivia Bennett',
    'Sophia Harris',
    'Liam Mitchell',
    'Ava Robinson',
  ];

  const [nameList, setNameList] = useState(students);

  // Incorrect: push returns the new length, not the updated array
  // const handleNewStudent = () => {
  //   setNameList(nameList.push('New Student'));
  // };

  // Incorrect: push works, but React state does not detect the change because the array reference does not change
  // const handleNewStudent = () => {
  //   let tempNameList = nameList;
  //   tempNameList.push('New Student');
  //   setNameList(tempNameList);
  // };

  // Correct approach 1: create a new array copy, then push the new element
  // const handleNewStudent = () => {
  //   let newNameList = [...nameList];
  //   newNameList.push('New Student');
  //   setNameList(newNameList);
  // };

  // Correct approach 2: use spread syntax to create a new array with the new element
  const handleNewStudent = () => {
    setNameList([...nameList, 'New Student']);
  };

  return (
    <div className="list-container">
      <h2>List A</h2>
      <h4>Mapping directly inside JSX return</h4>
      <ul className="students-list">
        {nameList.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
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
