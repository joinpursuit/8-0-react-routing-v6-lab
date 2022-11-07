import "./Footer.css";
// import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <p>Northwest Animal Hospital. 2022.</p>
      {/* <Link to="/">Home</Link> */}
      <a href="/">Home</a>

      <aside>
      <ul>
          <li>
            <a href="/StaffList">All Staff</a>
          </li>
          <li>
            <a href="/PetsList/pets">All Pets</a>
          </li>
        </ul>
      </aside>

    </footer>
  );
}

export default Footer;
