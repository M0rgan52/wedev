import "../styles/Banner.css";
import logo from "../assets/WeDev_v1.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <header id="home" className="wedev_banner">
      <Link to={`/`}>
        <img src={logo} alt="Logo WeDev" className="banner_img" />
      </Link>
      <ul className="banner_list">
        <li className="banner_about">
          <Link to={`/#about`}>A propos</Link>
        </li>
        <li className="banner_portofolio">
          <Link to={`/#portofolio`}>Portofolio</Link>
        </li>
        <li className="banner_contact">
          <Link to={`/#contact`}>Contact</Link>
        </li>
        {/* <label className="banner_switch">
          <input type="checkbox" name="contrast" className="switch_box" />
          <span className="switch_btn"></span>
        </label> */}
      </ul>
    </header>
  );
}

export default Banner;
