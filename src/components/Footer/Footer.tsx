import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text" style={{ textAlign: "left" }}>
        Privacy Policy
      </div>
      <div className="footer-text">
        Made with ❤️ by Idrees
      </div>
      <div className="footer-text" style={{ textAlign: "right" }}>
        Animal Crossing, characters, and images are property of Nintendo.
        <br />
        This fan project is not affiliated with or endorsed by Nintendo.
      </div>
    </footer>
  );
}