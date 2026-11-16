
import { useEffect } from 'react'

function MentionsLegales() {
  useEffect(() => {
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex, follow'
    document.head.appendChild(robots)

    return () => {
      robots.remove()
    }
  }, [])

  return (

    <main className="container py-5">
      <div className="text-center mb-5">
        <h1>Mentions légales</h1>
        <div
          className="mx-auto bg-primary"
          style={{ width: '100px', height: '4px' }}
        ></div>
      </div>

      
<div className="accordion" id="accordionMentions">

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#editeur"
        aria-expanded="true"
        aria-controls="editeur"
      >
        Éditeur du site
      </button>
    </h2>

    <div
      id="editeur"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionMentions"
    >
      <div className="accordion-body">
        <p><strong>Nom :</strong> John Doe</p>
        <p>Site de présentation du CV et des réalisations de John Doe.</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#hebergeur"
        aria-expanded="false"
        aria-controls="hebergeur"
      >
        Hébergeur
      </button>
    </h2>

    <div
      id="hebergeur"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionMentions"
    >
      <div className="accordion-body">
        <p>
          Les informations concernant l'hébergeur seront
          complétées après le choix du service d'hébergement.
        </p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#credits"
        aria-expanded="false"
        aria-controls="credits"
      >
        Crédits des images
      </button>
    </h2>

    <div
      id="credits"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionMentions"
    >
      <div className="accordion-body">
        <p>
          Certaines photographies utilisées sur ce site
          proviennent de Pixabay.
        </p>
        <p>
          <a
            href="https://pixabay.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visiter Pixabay
          </a>
        </p>
      </div>
    </div>
  </div>

</div>

    </main>
  )
}

export default MentionsLegales
