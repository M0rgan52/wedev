import "../styles/Banner.css";
import logo from "../assets/WeDev_v1.png";

function Banner() {
  return (
    <header className="wedev_banner">
      <img src={logo} alt="Logo WeDev" />
      <ul>
        <li><a>A propos</a></li>
        <li><a>Portofolio</a></li>
        <li><a>Skills</a></li>
        <li><a>Contact</a></li>
      </ul>
    </header>
  );
}

export default Banner;
