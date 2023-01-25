import "../styles/Portofolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import ImgOMFood from "../assets/omfood_portofolio.PNG";
import ImgLapanthere from "../assets/lapanthere_portofolio.png";

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
              <FontAwesomeIcon icon={faHtml5} className="icon_portofolio html5"/>
              <FontAwesomeIcon icon={faCss3} className="icon_portofolio css3" />
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
          <article className="text_portofolio">
              <h3>Agence La Panthère</h3>
              <p>Site d'une agence Web design</p>
              <FontAwesomeIcon icon={faHtml5} className="icon_portofolio html5"/>
              <FontAwesomeIcon icon={faCss3} className="icon_portofolio css3" />
              <FontAwesomeIcon icon={faJs} className="icon_portofolio js" />
            </article>
            <img
              src={ImgLapanthere}
              alt="Illustration du site Agence la Panthère"
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
