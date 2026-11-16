
import freshFoodImg from '../assets/realisations/fresh-food.jpg'
import restaurantAkiraImg from '../assets/realisations/restaurant-akira.jpg'
import espaceBienEtreImg from '../assets/realisations/espace-bien-etre.jpg'


function Realisations() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1>Mes réalisations</h1>
        <p>
          Découvrez quelques-uns de mes projets.
        </p>
        <div
          className="mx-auto bg-primary"
          style={{ width: '100px', height: '4px' }}
        ></div>
      </div>

      
<div className="row g-4">
  <div className="col-md-4">
    
<div className="card h-100">
  <img
    src={freshFoodImg}
    className="card-img-top"
    alt="Légumes frais - Projet Fresh Food"
  />
  <div className="card-body text-center">
    <h2 className="h5">Fresh Food</h2>

        <p className="card-text">
          Réalisation d'un site de vente de produits frais.
        </p>
        <a href="#" className="btn btn-primary">
          Voir le projet
        </a>
      </div>
      <div className="card-footer text-center">
        Site réalisé avec PHP et MySQL
      </div>
    </div>
  </div>

  <div className="col-md-4">
    
<div className="card h-100">
  <img
    src={restaurantAkiraImg}
    className="card-img-top"
    alt="Sushis japonais - Projet Restaurant Akira"
  />
  <div className="card-body text-center">
    <h2 className="h5">Restaurant Akira</h2>

        <p className="card-text">
          Création d'un site vitrine pour un restaurant.
        </p>
        <a href="#" className="btn btn-primary">
          Voir le projet
        </a>
      </div>
      <div className="card-footer text-center">
        Site réalisé avec WordPress
      </div>
    </div>
  </div>

  <div className="col-md-4">
    
<div className="card h-100">
  <img
    src={espaceBienEtreImg}
    className="card-img-top"
    alt="Ambiance zen - Projet Espace bien-être"
  />
  <div className="card-body text-center">
    <h2 className="h5">Espace bien-être</h2>

        <p className="card-text">
          Développement d'un site de présentation
          de prestations de bien-être.
        </p>
        <a href="#" className="btn btn-primary">
          Voir le projet
        </a>
      </div>
      <div className="card-footer text-center">
        Site réalisé avec HTML et CSS
      </div>
    </div>
  </div>
</div>

    </main>
  )
}

export default Realisations
