import React, { useEffect } from 'react';
import logo from '../assets/img/dlogot.png';

const CGU = () => {
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
            CONDITIONS GÉNÉRALES D'UTILISATION DU SITE
            <br />
          </p>
        </div>
        <div style={{ width: '85%', margin: 'auto' }}>
          <h1 className="cguH1">ARTICLE 1. INFORMATIONS LÉGALES</h1>
          <p className="pmargin">
            En vertu de l'article 6 de la Loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l'économie numérique, il est précisé dans cet
            article l'identité des différents intervenants dans le cadre de sa
            réalisation et de son suivi.
          </p>
          <p className="pmargin">Le site Dirasat.com est édité par :</p>
          <p className="pmargin">
            Dirasat SAS, dont le siège siège social est situé à l'adresse
            suivante : 55 avenue Marceau 75116 Paris et en cours
            d’immatriculation.
          </p>
          <p className="pmargin">
            Elle est représentée par son Président M. Bilel Rabhi.
          </p>
          <p className="pmargin">
            Téléphone : 01 84 80 74 81/ Adresse e-mail : contact@Dirasat.com.
          </p>
          <p className="pmargin">
            Le directeur de publication du site est : Bilel Rabhi.
          </p>
          <p className="pmargin">Le site Dirasat.com est hébergé par :</p>
          <p className="pmargin">
            SCALEWAY, dont le siège est situé à l'adresse ci-après : SCALEWAY
            SAS BP 438 75366 PARIS CEDEX 08 FRANCE
          </p>
          <p className="pmargin">Numéro de téléphone : + 33 (0)1 84 13 00 00</p>
          <p className="pmargin">
            Adresse e mail :
             https://contact.scaleway.com/contactus/s/?language=en_US
          </p>
          <h1 className="cguH1">ARTICLE 2. PRÉSENTATION DU SITE</h1>
          <p className="pmargin">
            Le site Dirasat.com a pour objet d’être une plateforme d’orientation
            pour les étudiants afin de les diriger au mieux vers le cursus le
            plus adapté à leur choix et leurs envies.
          </p>
          <h1 className="cguH1">ARTICLE 3. CONTACT</h1>
          <p className="pmargin">
            Pour toute question ou demande d'information concernant le site, ou
            tout signalement de contenu ou d'activités illicites, l'utilisateur
            peut contacter l'éditeur à l'adresse e-mail suivante:
            contact@Dirasat.com. ou adresser un courrier recommandé avec accusé
            de réception à : Dirasat, 55 avenue Marceau 75116 Paris.
          </p>
          <h1 className="cguH1">
            ARTICLE 4. ACCEPTATION DES CONDITIONS D'UTILISATION
          </h1>
          <p className="pmargin">
            L'accès et l'utilisation du site sont soumis à l'acceptation et au
            respect des présentes Conditions Générales d'Utilisation.
          </p>
          <p className="pmargin">
            L'éditeur se réserve le droit de modifier, à tout moment et sans
            préavis, le site et des services ainsi que les présentes CGU,
            notamment pour s'adapter aux évolutions du site par la mise à
            disposition de nouvelles fonctionnalités ou la suppression ou la
            modification de fonctionnalités existantes.
          </p>
          <p className="pmargin">
            Il est donc conseillé à l'utilisateur de se référer avant toute
            navigation à la dernière version des CGU, accessible à tout moment
            sur le site. En cas de désaccord avec les CGU, aucun usage du site
            ne saurait être effectué par l'utilisateur.
          </p>
          <h1 className="cguH1">ARTICLE 5. ACCÈS ET NAVIGATION</h1>
          <p className="pmargin">
            L'éditeur met en œuvre les solutions techniques à sa disposition
            pour permettre l'accès au site 24 heures sur 24, 7 jours sur 7. Il
            pourra néanmoins à tout moment suspendre, limiter ou interrompre
            l'accès au site ou à certaines pages de celui-ci afin de procéder à
            des mises à jour, des modifications de son contenu ou tout autre
            action jugée nécessaire au bon fonctionnement du site.
          </p>
          <p className="pmargin">
            Les présentes CGU s'appliquent, en tant que de besoin, à toute
            déclinaison ou extension du site sur les réseaux sociaux et/ou
            communautaires existants ou à venir.
          </p>
          <h1 className="cguH1">ARTICLE 6. GESTION DU SITE</h1>
          <p className="pmargin">
            Pour la bonne gestion du site, l'éditeur pourra à tout moment :
          </p>
          <p className="pmargin">
            ● Suspendre, interrompre ou limiter l'accès à tout ou partie du
            site, réserver l'accès au site, ou à certaines parties du site, à
            une catégorie déterminée d'internaute ;
          </p>
          <p className="pmargin">
            ● Supprimer toute information pouvant en perturber le fonctionnement
            ou entrant en contravention avec les lois nationales ou
            internationales, ou avec les règles de la Nétiquette ;
          </p>
          <p className="pmargin">
            ● Suspendre le site afin de procéder à des mises à jour.
          </p>

          <h1 className="cguH1">ARTICLE 7. RESPONSABILITÉS</h1>
          <p className="pmargin">
            L'éditeur n'est responsable que du contenu qu'il a lui-même édité.
          </p>
          <p className="pmargin">L'éditeur n'est pas responsable :</p>
          <p className="pmargin">
            ● En cas de problématiques ou défaillances techniques, informatiques
            ou de compatibilité du site avec un matériel ou logiciel quel qu'il
            soit ;
          </p>
          <p className="pmargin">
            ● Des dommages directs ou indirects, matériels ou immatériels,
            prévisibles ou imprévisibles résultant de l'utilisation ou des
            difficultés d'utilisation du site ou de ses services ;
          </p>
          <p className="pmargin">
            ● Des caractéristiques intrinsèques de l'Internet, notamment celles
            relatives au manque de fiabilité et au défaut de sécurisation des
            informations y circulant ;
          </p>
          <p className="pmargin">
            ● Des contenus ou activités illicites utilisant son site et ce, sans
            qu'il en ait pris dûment connaissance au sens de la Loi n° 2004-575
            du 21 juin 2004 pour la confiance dans l'économie numérique et la
            Loi n°2004-801 du 6 août 2004 relative à la protection des personnes
            physiques à l'égard de traitement de données à caractère personnel.
          </p>
          <p className="pmargin">
            Par ailleurs, le site ne saurait garantir l'exactitude, la
            complétude, et l'actualité des informations qui y sont diffusées.
          </p>
          <p className="pmargin">L'utilisateur est responsable :</p>
          <p className="pmargin">
            ● De la protection de son matériel et de ses données ;
          </p>
          <p className="pmargin">
            ● De l'utilisation qu'il fait du site ou de ses services ;
          </p>
          <p className="pmargin">
            ● S'il ne respecte ni la lettre, ni l'esprit des présentes CGU.
          </p>

          <h1 className="cguH1">ARTICLE 8. LIENS HYPERTEXTES</h1>
          <p className="pmargin">
            Le site peut contenir des liens hypertextes pointant vers d'autres
            sites internet sur lesquels Dirasat.com n'exerce pas de contrôle.
            Malgré les vérifications préalables et régulières réalisés par
            l'éditeur, celui-ci décline tout responsabilité quant aux contenus
            qu'il est possible de trouver sur ces sites.
          </p>
          <p className="pmargin">
            L'éditeur autorise la mise en place de liens hypertextes vers toute
            page ou document de son site sous réserve que la mise en place de
            ces liens ne soit pas réalisée à des fins commerciales ou
            publicitaires.
          </p>
          <p className="pmargin">
            En outre, l'information préalable de l'éditeur du site est
            nécessaire avant toute mise en place de lien hypertexte.
          </p>
          <p className="pmargin">
            Sont exclus de cette autorisation les sites diffusant des
            informations à caractère illicite, violent, polémique,
            pornographique, xénophobe ou pouvant porter atteinte à la
            sensibilité du plus grand nombre.
          </p>
          <p className="pmargin">
            Enfin, Dirasat.com se réserve le droit de faire supprimer à tout
            moment un lien hypertexte pointant vers son site, si le site
            l'estime non conforme à sa politique éditoriale.
          </p>
          <h1 className="cguH1">ARTICLE 9 : CONFIDENTIALITÉ</h1>
          <p className="pmargin">
            En plus des présentes Conditions Générales, le site dispose d'une
            politique de confidentialité qui décrit la manière dont les données
            à caractère personnel sont traitées lorsque l'utilisateur se rend
            sur le site, ainsi que la manière dont les cookies sont utilisés.
          </p>
          <p className="pmargin">
            En naviguant sur le site, l'utilisateur déclare avoir également pris
            connaissance de la politique de confidentialité susmentionnée.
          </p>
          <h1 className="cguH1">ARTICLE 10. PROPRIÉTÉ INTELLECTUELLE</h1>
          <p className="pmargin">
            La structuration du site mais aussi les textes, graphiques, images,
            photographies, sons, vidéos et applications informatiques qui le
            composent sont la propriété de l'éditeur et sont protégés comme tels
            par les lois en vigueur au titre de la propriété intellectuelle.
          </p>
          <p className="pmargin">
            Toute représentation, reproduction, adaptation ou exploitation
            partielle ou totale des contenus, marques déposées et services
            proposés par le site, par quelque procédé que ce soit, sans
            l'autorisation préalable, expresse et écrite de l'éditeur, est
            strictement interdite et serait susceptible de constituer une
            contrefaçon au sens des articles L. 335-2 et suivants du Code de la
            propriété intellectuelle. Et ce, à l'exception des éléments
            expressément désignés comme libres de droits sur le site.
          </p>
          <p className="pmargin">
            L'accès au site ne vaut pas reconnaissance d'un droit et, de manière
            générale, ne confère aucun droit de propriété intellectuelle relatif
            à un élément du site, lesquels restent la propriété exclusive de
            l'éditeur.
          </p>
          <p className="pmargin">
            Il est interdit à l'utilisateur d'introduire des données sur le site
            qui modifieraient ou qui seraient susceptibles d'en modifier le
            contenu ou l'apparence.
          </p>
          <h1 className="cguH1">
            ARTICLE 11. LOI APPLICABLE ET JURIDICTION COMPÉTENTE
          </h1>
          <p className="pmargin" style={{ paddingBottom: '30px' }}>
            Les présentes Conditions Générales d'Utilisation sont régies par la
            loi française. En cas de différend et à défaut d'accord amiable, le
            litige sera porté devant les tribunaux français conformément aux
            règles de compétence en vigueur.
          </p>
        </div>
       
      </div>
   */}
    </>
  );
};

export default CGU;
