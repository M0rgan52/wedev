import ImgGroupomania from "../assets/groupomania_portofolio.PNG";
import "../styles/Groupomania.css"

export default function PageGroupomania() {
    return (
        <section className="section_box_top">
            <div className="box_top">
                <section className="description_top">
                    <h1 className="titre_top">Réseau social interne Groupomania</h1>
                    <div className="subtitle_top">
                        <p>Groupomania</p>
                        <p>Septembre 2022</p>
                    </div>
                    <p className="text_top">Ce réseaux social interne de la société Groupomania, groupe spécialisé dans la grande distribution, va permettre de faciliter les interactions entre collègues.</p>
                </section>
                <figure className="box_img_top">
                    <img src={ImgGroupomania} alt="" className="img_top" />
                </figure>
            </div>
        </section>
    )
}