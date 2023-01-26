import "../styles/Legalnotice.css";

function PageLegalNotice() {
  return (
    <div>
      <h1 className="titre_legal">Mentions legales</h1>
      <h2>Identité</h2>
      <p className="texte_legal">
        Morgan Strohl
        <br />
        Nom commercial: WeDev
        <br />
        76 rue de la clef des chammps
        <br />
        95180 MENUCOURT
        <br />
        FRANCE
        <br />
        contact: contact.wedev@gmail.com
        <br />
        SIRET: 947 872 644 00010
      </p>
      <h2>Propriété intellectuelle</h2>
      <p className="texte_legal">
        Photo d'illustration de la page d'accueil: libre de droit, photo prise
        par Lukas et mis à disposition sur le site pexels
      </p>
      <h2>Hébergement du site</h2>
      <p className="texte_legal">
        Amet minim sunt proident cupidatat cupidatat aliqua et ullamco quis
        aliquip.
      </p>
    </div>
  );
}

export default PageLegalNotice;
