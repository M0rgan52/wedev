import "../styles/Footer.css";
import Logo from "../assets/WeDev_v1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_name">
        <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
        <p> - Morgan Strohl</p>
      </div>

      <a href="#home">
        <img src={Logo} alt="Logo WeDev" className="footer_img" />
      </a>
    </div>
  );
}

export default Footer;
