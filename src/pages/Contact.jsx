
function Contact() {
  return (
    

<main className="contact-page py-5">
  <div className="container bg-white rounded shadow p-4 p-md-5">
    <div className="text-center mb-5">

        <h1>Contact</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future
          collaboration, merci de remplir le formulaire de contact.
        </p>
        <div
          className="mx-auto bg-primary"
          style={{ width: '100px', height: '4px' }}
        ></div>
      </div>

      <div className="row">
        
<div className="col-lg-6">
  <h2 className="mb-4">Formulaire de contact</h2>

  <form onSubmit={(e) => e.preventDefault()}>
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Votre nom"
        aria-label="Votre nom"
        required
      />
    </div>

    <div className="mb-3">
      <input
        type="email"
        className="form-control"
        placeholder="Votre adresse email"
        aria-label="Votre adresse email"
        required
      />
    </div>

    <div className="mb-3">
      <input
        type="tel"
        className="form-control"
        placeholder="Votre numéro de téléphone"
        aria-label="Votre numéro de téléphone"
        required
      />
    </div>

    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Sujet"
        aria-label="Sujet"
        required
      />
    </div>

    <div className="mb-3">
      <textarea
        className="form-control"
        rows="5"
        placeholder="Votre message"
        aria-label="Votre message"
        required
      ></textarea>
    </div>

    <div className="text-center">
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </div>
  </form>
</div>


        
<div className="col-lg-6">
  <h2 className="mb-4">Mes coordonnées</h2>

  <p>
    Je suis disponible pour discuter de vos projets et
    répondre à vos questions.
  </p>

  <div className="mb-3">
    <i className="fa-solid fa-location-dot text-primary me-2"></i>
    <span>Disponible pour des collaborations partout</span>
  </div>

  <div className="mb-3">
    <i className="fa-solid fa-mobile-screen-button text-primary me-2"></i>
    <span>Numéro de téléphone de John Doe</span>
  </div>

  <div className="mb-3">
    <i className="fa-solid fa-envelope text-primary me-2"></i>
    <span>Adresse email de John Doe</span>
  </div>


<div className="mt-4">
  <iframe
    title="Localisation de John Doe"
    src="https://www.google.com/maps?q=France&output=embed"
    width="100%"
    height="300"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

</div>

      </div>
      </div>
    </main>
  )
}

export default Contact
