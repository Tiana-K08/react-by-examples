// function ChildProfileDest({ user }) {
//   return (
//     <>
//       <p>First name: {user.firstName}</p>
//       <p>Last name: {user.lastName}</p>
//       <p>Email: {user.email}</p>
//     </>
//   );
// }

// function ChildProfileDest({ user }) {
//   const { firstName, lastName, email } = user;

//   return (
//     <>
//       <p>First name: {firstName}</p>
//       <p>Last name: {lastName}</p>
//       <p>Email: {email}</p>
//     </>
//   );
// }

function ChildProfileDest({ user: { firstName, lastName, email } }) {
  return (
    <>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Email: {email}</p>
    </>
  );
}

export default ChildProfileDest;
