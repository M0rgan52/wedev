import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
      <h4>On discute ensemble ?</h4>
      <a
        href={"https://www.linkedin.com/in/morgan-strohl/"}
        rel="noreferrer"
        target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href={"https://github.com/M0rgan52"} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={"mailto:contact.wedev@gmail.com"}
        rel="noreferrer"
        target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default Contact;
