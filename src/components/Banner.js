import "../styles/Banner.css";
import logo from "../assets/WeDev_v1.png";

function Banner() {
  return (
    <header className="wedev_banner">
      <img src={logo} alt="Logo WeDev" />
      <ul>
        <li><a href={undefined}>A propos</a></li>
        <li><a href={undefined}>Portofolio</a></li>
        <li><a href={undefined}>Skills</a></li>
        <li><a href={undefined}>Contact</a></li>
      </ul>
    </header>
  );
}

export default Banner;
