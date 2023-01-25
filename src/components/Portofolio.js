import "../styles/Portofolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ImgOMFood from "../assets/omfood_portofolio.PNG";

function Portofolio() {
  return (
    <div>

      <h2 id="portofolio" className="titre_portofolio" >Portofolio</h2>

      <div className="box_parent_portofolio">
        <a href={undefined} className="link_portofolio">
          <figure>
            <article className="text_portofolio">
              <h3>Oh my food</h3>
              <p>Site de réservation dans des restaurants gastronomique</p>
              <FontAwesomeIcon icon={faHtml5} className="icon_portofolio"/>
              <FontAwesomeIcon icon={faCss3} className="icon_portofolio" />
            </article>
            <img
              src={ImgOMFood}
              alt="Illustration du site Oh My Food"
              className="img_portofolio"
            />
          </figure>
        </a>

        <a href={undefined} className="link_portofolio">
          <figure>
            <img
              src={ImgOMFood}
              alt="Illustration du site Oh My Food"
              className="img_portofolio"
            />
          </figure>
        </a>

        <a href={undefined} className="link_portofolio">
          <figure>
            <img
              src={ImgOMFood}
              alt="Illustration du site Oh My Food"
              className="img_portofolio"
            />
          </figure>
        </a>

        <a href={undefined} className="link_portofolio">
          <figure>
            <img
              src={ImgOMFood}
              alt="Illustration du site Oh My Food"
              className="img_portofolio"
            />
          </figure>
        </a>

        <a href={undefined} className="link_portofolio">
          <figure>
            <img
              src={ImgOMFood}
              alt="Illustration du site Oh My Food"
              className="img_portofolio"
            />
          </figure>
        </a>
      </div>
    </div>
  );
}

export default Portofolio;
