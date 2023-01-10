import "../styles/Career.css"

function Career() {
    return (
        <div className="career">
            <article className="career-1">
                <h2>Développeur Web Freelance</h2>
                <p>Je créé vos projets from scratch ou je reprends vos projets actuels</p>
            </article>
            <article className="career-2">
                <h2>Frontend Développeur</h2>
                <p>Je développe le visuel de votre site internet ou de vos applications</p>
                <h3>Langages :</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </article>
            <article className="career-3">
                <h2>Backend Développeur</h2>
                <p>Je développe votre base de donnée et l'ensemble des fetch nécessaire au bon fonctionnement du votre projet</p>
                <h3>Langages :</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
            </article>

        </div>
    )
};

export default Career;