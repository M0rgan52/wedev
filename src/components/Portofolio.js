import "../styles/Portofolio.css";
import ImgOMFood from "../assets/omfood_portofolio.PNG";

function Portofolio() {
  return (
    <div>

      <h2 className="titre_portofolio" >Portofolio</h2>

      <div className="box_parent_portofolio" id="portofolio">
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
