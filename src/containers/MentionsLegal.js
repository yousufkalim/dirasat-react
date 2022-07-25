import React, { useEffect } from 'react';
import logo from '../assets/img/dlogot.png';

const MentionsLegal = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 11,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {/* <div style={{ minHeight: '100vh', marginTop: '-2%', color: 'white' }}>
        <div style={{ width: '60%', margin: 'auto' }}>
          <p className="cguHeading">
            <img src={logo} className="cgulogo" alt="logo" />
            <br />
            MENTIONS LÉGALES DU SITE
            <br />
          </p>
        </div>
        <div style={{ width: '85%', margin: 'auto' }}>
          <p className="pmargin">
            Conformément aux dispositions des Articles 6-III et 19 de la Loi
            n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie
            numérique, dite L.C.E.N., il est porté à la connaissance des
            utilisateurs et visiteurs du site Dirasat les présentes mentions
            légales.
          </p>
          <p className="pmargin">
            Le site Dirasat est accessible à l'adresse suivante :
            www.dirasat.com (ci-après "le Site"). L'accès et l'utilisation du
            Site sont soumis aux présentes " Mentions légales" détaillées
            ci-après ainsi qu'aux lois et/ou règlements applicables
          </p>
          <p className="pmargin">
            La connexion, l'utilisation et l'accès à ce Site impliquent
            l'acceptation intégrale et sans réserve de l'internaute de toutes
            les dispositions des présentes Mentions Légales.
          </p>
          <h1 className="cguH1 legalh1">ARTICLE 1 - INFORMATIONS LÉGALES</h1>
          <p className="pmargin">
            En vertu de l'Article 6 de la Loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l'économie numérique, il est précisé dans cet
            article l'identité des différents intervenants dans le cadre de sa
            réalisation et de son suivi.
          </p>
          <p className="pmargin">
            <span className="boldText"> A.</span> Editeur du site
          </p>
          <p className="pmargin">
            Le site OrDirasatientator est édité par la SAS Dirasat ayant son
            siège social à l'adresse suivante : 55 avenue Marceau 751116 Paris,
            et immatriculée au numéro suivant : en cours d’immatriculation RCS
            Paris.
          </p>
          <p className="pmargin">Capital social : 1 000 euros</p>
          <p className="pmargin">Téléphone : 01 84 80 74 81</p>
          <p className="pmargin">Adresse e-mail : contact@Dirasat.com</p>
          <p className="pmargin">ci-après " l'Éditeur "</p>
          <p className="pmargin">
            <span className="boldText"> B.</span> Directeur de publication
          </p>
          <p className="pmargin">
            Le Directeur de publication est M. Bilel Rhabi
          </p>
          <p className="pmargin">
            Adresse e-mail de contact : direction@Dirasat.com
          </p>
          <p className="pmargin">ci-après " le Directeur de publication "</p>
          <p className="pmargin">
            <span className="boldText"> C.</span> Hébergeur du site
          </p>
          <p className="pmargin">Le site Dirasat est hébergé par  SCALEWAY</p>
          <p className="pmargin">
            dont le siège est situé à l'adresse suivante : SCALEWAY SAS BP 438
            75366 PARIS CEDEX 08 FRANCE
          </p>
          <p className="pmargin">Téléphone : 01 84 13 00 00</p>
          <p className="pmargin">
            Contact : https://contact.scaleway.com/contactus/s/?language=en_US
          </p>
          <p className="pmargin">ci-après " l'Hébergeur "</p>
          <p className="pmargin">
            <span className="boldText"> D.</span> Utilisateurs
          </p>
          <p className="pmargin">
            Sont considérés comme utilisateurs tous les internautes qui
            naviguent, lisent, visionnent et utilisent le site Dirasat.
          </p>
          <p className="pmargin">ci-après les " Utilisateurs "</p>
          <h1 className="cguH1 legalh1">ARTICLE 2 - ACCESSIBILITÉ</h1>
          <p className="pmargin">
            Le Site est par principe accessible aux Utilisateurs 24/24h et 7/7j,
            sauf interruption, programmée ou non, pour des besoins de
            maintenance ou en cas de force majeure.
          </p>
          <p className="pmargin">
            En cas d'impossibilité d'accès au Site, celui-ci s'engage à faire
            son maximum afin d'en rétablir l'accès. Le Site ne saurait être tenu
            pour responsable de tout dommage, quelle qu'en soit la nature,
            résultant de son indisponibilité.
          </p>
          <h1 className="cguH1 legalh1">
            ARTICLE 3 - LOI APPLICABLE ET JURIDICTION
          </h1>
          <p className="pmargin">
            Les présentes Mentions Légales sont régies par la loi française. En
            cas de différend et à défaut d'accord amiable, le litige sera porté
            devant les tribunaux français conformément aux règles de compétence
            en vigueur.
          </p>
          <h1 className="cguH1 legalh1">ARTICLE 4 - CONTACT</h1>
          <p className="pmargin" style={{ paddingBottom: '30px' }}>
            Pour tout signalement de contenus ou d'activités illicites,
            l'Utilisateur peut contacter l'Éditeur à l'adresse suivante : (mail)
            ou par courrier recommandé avec accusé de réception adressé à
            l'Éditeur aux coordonnées précisées dans les présentes mentions
            légales.
          </p>
        </div>
      </div>
    */}
    </>
  );
};

export default MentionsLegal;
