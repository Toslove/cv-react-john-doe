
function Services() {
  return (
    <main className="container py-5">
      
<div className="text-center mb-5">
  <h1>Mon offre de services</h1>
  <p>
    Voici les prestations sur lesquelles je peux intervenir.
  </p>
  <div
    className="mx-auto bg-primary"
    style={{ width: '100px', height: '4px' }}
  ></div>
</div>

<div className="row g-4">
  <div className="col-md-4">
    <div className="card h-100 text-center p-4">
      <div className="card-body">
        <i className="fa-solid fa-display fa-3x text-primary mb-3" aria-hidden="true"></i>
        <h2 className="h4">UX Design</h2>
        <p className="card-text">
          L'UX Design consiste à concevoir des interfaces
          adaptées aux besoins des utilisateurs.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card h-100 text-center p-4">
      <div className="card-body">
        <i className="fa-solid fa-code fa-3x text-primary mb-3" aria-hidden="true"></i>
        <h2 className="h4">Développement web</h2>
        <p className="card-text">
          Création de sites internet modernes,
          performants et adaptés à tous les écrans.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card h-100 text-center p-4">
      <div className="card-body">
        <i className="fa-solid fa-magnifying-glass-chart fa-3x text-primary mb-3" aria-hidden="true"></i>
        <h2 className="h4">Référencement</h2>
        <p className="card-text">
          Optimisation des sites internet pour améliorer
          leur visibilité sur les moteurs de recherche.
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}

export default Services
