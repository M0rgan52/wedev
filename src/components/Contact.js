import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h4>On discute ensemble ?</h4>
      <a
        href={"https://www.linkedin.com/in/morgan-strohl/"}
        rel="noreferrer"
        target="_blank"
        className="icon_contact icon_linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href={"https://github.com/M0rgan52"}
        rel="noreferrer"
        target="_blank"
        className="icon_contact icon_github">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={"mailto:contact.wedev@gmail.com"}
        rel="noreferrer"
        target="_blank"
        className="icon_contact icon_mail">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default Contact;
