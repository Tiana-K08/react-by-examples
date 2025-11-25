// export default function ChildProfileDest({ user }) {
//   return (
//     <>
//       <p>First name: {user.firstName}</p>
//       <p>Last name: {user.lastName}</p>
//       <p>Email: {user.email}</p>
//     </>
//   );
// }

// export default function ChildProfileDest({ user }) {
//   const { firstName, lastName, email } = user;

//   return (
//     <>
//       <p>First name: {firstName}</p>
//       <p>Last name: {lastName}</p>
//       <p>Email: {email}</p>
//     </>
//   );
// }

// export default function ChildProfileDest(props) {
//   const { firstName, lastName, email } = props.user;

//   return (
//     <>
//       <p>First name: {firstName}</p>
//       <p>Last name: {lastName}</p>
//       <p>Email: {email}</p>
//     </>
//   );
// }

export default function ChildProfileDest({
  user: { firstName, lastName, email },
}) {
  return (
    <>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Email: {email}</p>
    </>
  );
}
