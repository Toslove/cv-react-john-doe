
import coderHtmlCssImg from '../assets/blog/coder-html-css.png'
import vendreWebImg from '../assets/blog/vendre-web.jpg'
import googleImg from '../assets/blog/google.jpg'
import responsiveImg from '../assets/blog/responsive.png'
import seoImg from '../assets/blog/seo.jpg'
import apprendreCoderImg from '../assets/blog/apprendre-coder.jpg'

function Blog() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1>Mon blog</h1>
        <p>Retrouvez ici mes articles sur le développement web.</p>
        <div
          className="mx-auto bg-primary"
          style={{ width: '100px', height: '4px' }}
        ></div>
      </div>

      
<div className="row g-4">
  {[
    {
    image: coderHtmlCssImg,
      titre: 'Coder son site en HTML/CSS',
      description: 'Découvrez les bases du HTML et du CSS pour créer votre premier site web.',
      categorie: 'Développement web',
    },
    {
    image: vendreWebImg,
      titre: 'Vendre ses produits sur le web',
      description: 'Découvrez les solutions pour développer votre activité commerciale en ligne.',
      categorie: 'E-commerce',
    },
    {
    image: googleImg,
      titre: 'Se positionner sur Google',
      description: 'Découvrez les bonnes pratiques pour améliorer la visibilité de votre site.',
      categorie: 'Référencement',
    },
    {
    image: responsiveImg,
      titre: 'Coder en responsive design',
      description: 'Apprenez à adapter vos pages aux smartphones, tablettes et ordinateurs.',
      categorie: 'Développement web',
    },
    {
    image: seoImg,
      titre: 'Techniques de référencement',
      description: 'Découvrez les principales techniques pour optimiser le référencement naturel.',
      categorie: 'Référencement',
    },
    {
    image: apprendreCoderImg,
      titre: 'Apprendre à coder',
      description: 'Découvrez les étapes essentielles pour commencer la programmation.',
      categorie: 'Développement web',
    },
  ].map((article, index) => (
    <div className="col-md-6 col-lg-4" key={index}>
      
<div className="card h-100">
  <img
    src={article.image}
    className="card-img-top"
    alt={article.titre}
  />
  <div className="card-body text-center">

          <h2 className="h5">{article.titre}</h2>
          <p className="card-text">{article.description}</p>
          <a href="#" className="btn btn-primary">
            Lire la suite
          </a>
        </div>
        <div className="card-footer text-center">
          {article.categorie}
        </div>
      </div>
    </div>
  ))}
</div>

    </main>
  )
}

export default Blog
