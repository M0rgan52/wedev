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
    </div>
  );
}

export default About;
