import { Link } from "react-router-dom";
import "./Nav.css";

// NOTA: Las etiquetas <a> </a> NO FUNCIONAN con el CLIENT SIDE ROUTING, ya que ejecutan el comportamiento por defecto de recarga de pagina
function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to='/staff'>
              All Staff
            </Link>
          </li>
          <li>
            <Link to="/pets">
              All Pets
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
