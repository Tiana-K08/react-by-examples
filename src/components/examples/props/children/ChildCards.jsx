export default function ChildCards(props) {
  return (
    <div
      style={{
        border: '2px solid #4CAF50',
        padding: '20px',
        marginTop: '20px',
        borderRadius: '10px',
        backgroundColor: '#e8f5e9',
      }}
    >
      {props.children}
    </div>
  );
}
