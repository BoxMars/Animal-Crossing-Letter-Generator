import "./Button.css";

export default function Button({ label, onClick }: { label: string, onClick?: () => void }) {
  return (
	<button className="blob-button" onClick={onClick}>
	  {label}
	</button>
  );
}