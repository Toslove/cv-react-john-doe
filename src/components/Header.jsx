import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            John Doe
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Afficher le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                    Accueil
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                    Services
                </NavLink>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="/realisations">
                  Réalisations
                </a>
              </li>
              <li className="nav-item">
                
            <NavLink className="nav-link" to="/blog">
                 Blog
            </NavLink>

              </li>
              <li className="nav-item">
               
            <NavLink className="nav-link" to="/contact">
                 Contact
            </NavLink>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
