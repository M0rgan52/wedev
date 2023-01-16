import "../styles/Banner.css";
import logo from "../assets/WeDev_v1.png";

function Banner() {
  return (
    <header id="home" className="wedev_banner">
      <a href="#home"><img src={logo} alt="Logo WeDev" className="banner_img"/></a>
      <ul className="banner_list">
        <li><a href="#about">A propos</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Banner;
