import "../css/NavbarCompsStyles.css"
import logo from "../assets/Imagenes/Logo.jpg"

import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        </a>
        <NavLink className="navbar-brand" to="/"><img className="LogoTipico " src={logo} alt="LogoEmpresa"/></NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                Menus
              </NavLink>
            </li>
            <li className="nav-item">
              {/* Ojo: si el botón es de clientes ¿Por qué te dirige a la ruta /Menus?  */}
              <NavLink className="nav-link" to="/Cliente">
                Clientes
              </NavLink>
            </li>
            <li className="nav-item">
              {/* Lo mismo. Si lleva al Login ¿Por qué la ruta te dirige al /Custumers?  */}
              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              
            </li>
            <li className="nav-item">
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;