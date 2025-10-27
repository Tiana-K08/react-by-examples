function ChildProfile(props) {
  return (
    <>
      <p>First name: {props.user.firstName}</p>
      <p>Last name: {props.user.lastName}</p>
      <p>Email: {props.user.email}</p>
    </>
  );
}

export default ChildProfile;
