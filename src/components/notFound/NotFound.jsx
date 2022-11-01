import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <img src="/ceo.webp" alt="crying jordan" className="cry" />
      <h1 className="not-found">404</h1>
      <p>
        <Link to="/">Go back to Home Page</Link>
      </p>
    </div>
  );
}
