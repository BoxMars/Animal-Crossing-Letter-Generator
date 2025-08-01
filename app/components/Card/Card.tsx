import "./Card.css";

export default function Card() {
	return (
		<div className="card airmail-card" style={{ cursor: "pointer" }}>
			<div className="card-date" mutable-parsed="true">
				July 31st, 2025
			</div>
			<div className="card-message" mutable-parsed="true">
				This is the "Airmail" stationary pattern
			</div>
			<div className="card-signature" mutable-parsed="true">
				Idrees Hassan
			</div>
		</div>
	);
}