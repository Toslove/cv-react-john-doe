
import johnDoeImg from '../assets/john-doe.jpg'
import GitHubProfile from '../components/GitHubProfile.jsx'

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary">
            En savoir plus
          </a>
        </div>
      
      </section>
    
    <section id="about" className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h2>À propos de moi</h2>
          
          <p>
            Je suis John Doe, développeur web en formation.
            Passionné par le développement web, je conçois
            des sites internet modernes et responsive.
          </p>
    
          <p>
            Je suis actuellement à la recherche d'une
            alternance afin de développer mes compétences
            et de participer à des projets professionnels.
          </p>
        </div>
    
        <div className="col-md-6">
          
    <img
      src={johnDoeImg}
      alt="Portrait de John Doe"
      className="img-fluid rounded mb-3"
      width="300"
    />
    
          <h2>Mes compétences</h2>
    
          <p>HTML5 - 90%</p>
          <div className="progress mb-3">
            <div
              className="progress-bar"
              style={{ width: '90%' }}
              role="progressbar"
              aria-label="HTML5"
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
    
          <p>CSS3 - 80%</p>
          <div className="progress mb-3">
            <div
              className="progress-bar"
              style={{ width: '80%' }}
              role="progressbar"
              aria-label="CSS3"
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
    
          <p>JavaScript - 70%</p>
          <div className="progress mb-3">
            <div
              className="progress-bar"
              style={{ width: '70%' }}
              role="progressbar"
              aria-label="JavaScript"
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        
        </div>
      </div>
    
        </section>

    <section className="container py-5" id="github">
      <div className="text-center mb-5">
        <h2>Mon profil GitHub</h2>
        <p>Découvrez mon activité et mes projets sur GitHub.</p>
        <div
          className="mx-auto bg-primary"
          style={{ width: '100px', height: '4px' }}
        ></div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <GitHubProfile />
        </div>
      </div>
    </section>

    </main>
  )
}

export default Home
