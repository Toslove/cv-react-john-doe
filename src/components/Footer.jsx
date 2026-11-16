
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-6 col-lg-3">
            <h3 className="h5">John Doe</h3>
            <p>Développeur web</p>
            <p>Disponible pour des collaborations partout.</p>

            <div className="d-flex gap-3">
              <a href="https://github.com/" target="_blank" rel="nofollow noopener noreferrer" className="text-white" aria-label="GitHub">
                <i className="fa-brands fa-github fa-xl"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="nofollow noopener noreferrer" className="text-white" aria-label="Twitter">
                <i className="fa-brands fa-twitter fa-xl"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="nofollow noopener noreferrer" className="text-white" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h3 className="h5">Liens utiles</h3>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Accueil</Link></li>
              <li><Link to="/services" className="text-white">Services</Link></li>
              <li><Link to="/realisations" className="text-white">Réalisations</Link></li>
              <li><Link to="/blog" className="text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-white">Contact</Link></li>
              <li><Link to="/mentions-legales" className="text-white">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h3 className="h5">Mes dernières réalisations</h3>
            <ul className="list-unstyled">
              <li><Link to="/realisations" className="text-white">Fresh Food</Link></li>
              <li><Link to="/realisations" className="text-white">Restaurant Akira</Link></li>
              <li><Link to="/realisations" className="text-white">Espace bien-être</Link></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h3 className="h5">Mes derniers articles</h3>
            <ul className="list-unstyled">
              <li><Link to="/blog" className="text-white">Coder son site en HTML/CSS</Link></li>
              <li><Link to="/blog" className="text-white">Vendre ses produits sur le web</Link></li>
              <li><Link to="/blog" className="text-white">Se positionner sur Google</Link></li>
            </ul>
          </div>

        </div>

        <hr className="my-4" />

        <p className="text-center mb-0">
          © {new Date().getFullYear()} John Doe. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer
