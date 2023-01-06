import "../styles/Banner.css";
import logo from "../assets/WeDev_v1.png";

function Banner() {
  return (
    <header id="home" className="wedev_banner">
      <a href="#home"><img src={logo} alt="Logo WeDev" className="banner_img"/></a>
      <ul className="banner_list">
        <li><a href={undefined}>A propos</a></li>
        <li><a href={undefined}>Portofolio</a></li>
        <li><a href={undefined}>Skills</a></li>
        <li><a href={undefined}>Contact</a></li>
      </ul>
    </header>
  );
}

export default Banner;
