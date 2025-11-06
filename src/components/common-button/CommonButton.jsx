import './CommonButton.css';

export default function Button(props) {
  return (
    <button
      className={props.className}
      style={{ color: props.activeColor }}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
