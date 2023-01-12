import ImgAbout from "../assets/Photo_about_v1.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <img
        src={ImgAbout}
        alt="Elément de présentation d'un homme en train de coder sur un ordinateur portable. Crédit Lukas"
        className="about_img"
      />
      <article id="about" className="about_description">
        Je m'appelle Morgan Strohl et mon savoir faire englobe la création, la
        maintenance et la mise à jour de site internet, de vos logiciel et de la
        vie digitale de votre entreprise plus généralement. <br />
        Travailleur indépendant, réactif et organisé, je serai heureux de vous
        accompagner dans vos différents projets professionnels ou personnels sur
        du front-end ou du back-end.
      </article>
    </div>
  );
}

export default About;
