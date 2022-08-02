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
      <div style={{ minHeight: '100vh', marginTop: '-2%', color: 'white' }}>
        <div style={{ width: '60%', margin: 'auto' }}>
          <p className="cguHeading">
            {/* <img src={logo} className="cgulogo" alt="logo" /> */}
            <br />
            CONDITIONS GÉNÉRALES D'UTILISATION DU SITE
            <br />
            <p>Dirasat-international.com</p>
          </p>
        </div>
        <div style={{ width: '85%', margin: 'auto' }}>
          <h1 className="cguH1">Art 1 - Objet</h1>
          <p className="pmargin">
            Les présentes conditions générales ont pour objet de définir les
            modalités et conditions d’utilisation du service de mise en relation
            (ci-après : le « service ») des personnes (ci-après : l’
            «utilisateur») souhaitant bénéficier des services éducatifs pour une
            formation, un établissement, ou une destination donnés (ci-après :
            le « partenaire ») à travers notre site internet
            www.dirasat-international.com ainsi que de définir les droits et
            obligations des parties dans ce cadre.
          </p>
          <p className="pmargin">
            Elles sont notamment accessibles à tout moment par un lien direct
            sur le site web.
          </p>
          <p className="pmargin">
            Elles peuvent être complétées, le cas échéant, par des conditions
            d’utilisation particulières. En cas de contradiction, les conditions
            particulières prévalent sur ces conditions générales.
          </p>
          <p className="pmargin">
            Dirasat International vous fournit un service d’intermédiaire entre
            un établissement éducatif partenaire et l’utilisateur, et n’acquiert
            pas à ce titre la qualité ou la nature d’un prestataire de services
            éducatif.
          </p>
          <p className="pmargin">
            Qui propose le service de mise en relation Dirasat :
          </p>
          <p className="pmargin">
            Le service de mise en relation à travers la plateforme Dirasat est
            proposé par l’Algérie via la structure juridique suivante :
          </p>
          <p className="pmargin">SARL E.MTIYAZ COACHING</p>
          <p className="pmargin">
            Adresse postale : M36B Petite Provence, 16035 Hydra.
          </p>
          <p className="pmargin">
            Numéro de registre du commerce : 16/00-1010295B15
          </p>
          <p className="pmargin">
            Numéro d’identification fiscal (NIF):001516101029533
          </p>
          <p className="pmargin">
            Adresse électronique : contact@dirasat-international.com
          </p>
          <p className="pmargin">Bureau de liaison : 0540405115</p>
          <h1 className="cguH1">Art 2 - Définitions</h1>
          <p className="pmargin">
            « Application/Applications » désigne les applications Web ou Mobile
            Dirasat International développées par la société E.MTIYAZ COACHING,
            disponible sur le site www.dirasat-international.com 
          </p>

          <p className="pmargin">
            « Conditions » désigne les présentes conditions générales
            d’utilisation ;
          </p>

          <p className="pmargin">
            « Utilisateur»  désigne toute personne physique ou morale souhaitant
            bénéficier de services éducatifs pour une destination donnée à
            travers l’application Dirasat International en lien avec des
            partenaires se trouvant en Algérie ou à l’étranger (France,
            Royaume-Uni, États-Unis, Canada, Italie, Turquie, Malaisie,
            Belgique, Espagne, Italie, Suisse, Allemagne, Russie, Ukraine,
            Émirats Arabes Unis, Japon, Corée du Sud, Irlande, Pays-Bas ou
            autre)
          </p>
          <p className="pmargin">
            « Contenu de l’Utilisateur » désigne les contenus et informations
            textuels communiqués lors de la saisie par l’utilisateur du
            formulaire d’information, y compris les commentaires et les retours
            d’information relatifs aux services proposés par Dirasat
            International sur l’ensemble de ses supports, ainsi que les contenus
            et informations communiqués lors de demandes d’assistance et à
            l’occasion de la participation à des jeux-concours et à des
            opérations promotionnelles ;
          </p>
          <p className="pmargin">
            « Services » désigne les services disponibles sur les applications
            et / ou site web Dirasat International ;
          </p>
          <p className="pmargin">
            « Site Web » désigne l’interface dynamique disponible sur l’adresse
            www.dirasat-international.com
          </p>
          <h1 className="cguH1">Art 3 - Accès à l’application et au service</h1>
          <p className="pmargin">
            Le service est accessible, sous réserve des restrictions prévues sur
            l’application Dirasat:
          </p>
          <p className="pmargin">
            À toute personne physique disposant de la pleine capacité juridique
            conformément à la loi en vigueur dans les pays éligibles pour
            s’engager au titre des présentes conditions générales.
          </p>
          <p className="pmargin">
            À toute personne morale agissant par l’intermédiaire d’une personne
            physique disposant de la capacité juridique pour contracter au nom
            et pour le compte de la personne morale.
          </p>
          <p className="pmargin">Acceptation des conditions générales</p>
          <p className="pmargin">
            L’acceptation des présentes conditions générales est matérialisée
            par une case à cocher dans le formulaire d’inscription de
            l’application Dirasat International et / ou site web. Cette
            acceptation ne peut être que pleine et entière. Toute adhésion sous
            réserve est considérée comme nulle et non avenue.
          </p>
          <p className="pmargin">
            En acceptant les présentes Conditions Générales, l’utilisateur prend
            acte que les applications Dirasat International sont utilisées que
            dans le cadre de demande en ligne de formations d’enseignement
            supérieur partenaire en vue d’effectuer un parcours d’études donné.
          </p>
          <p className="pmargin">
            L’utilisateur qui utilise les applications  Dirasat International
            pour un autre motif que celui de préparer un projet d’études en
            Algérie ou à l’international, causant un préjudice à la société SARL
            E.MTIYAZ COACHING, fera l’objet d’une plainte auprès du tribunal
            territorialement compétent.
          </p>
          <h1 className="cguH1">Art 4 - Inscription sur le site web</h1>
          <p className="pmargin">
            L’accès au service nécessite que l’utilisateur renseigne un certain
            nombre d’informations, en remplissant le formulaire prévu à cet
            effet. L’utilisateur est prié de fournir l’ensemble des informations
            marquées comme obligatoires (Nom, prénom, adresse et surtout le
            numéro de téléphone) toute inscription incomplète ne permettra pas à
            l’utilisateur d‘accéder aux services de Dirasat International.
          </p>
          <p className="pmargin">
            Avant la validation de son profil, Dirasat International doit
            vérifier le numéro de téléphone ainsi que l’adresse email de
            l’utilisateur.
          </p>
          <p className="pmargin">
            Après que le numéro de téléphone et l’adresse email soient vérifiés,
            le profil de l‘utilisateur est automatiquement enregistré dans la
            base de données utilisateurs du site internet
            www.dirasat-international.com (Cf politique de confidentialité).
          </p>
          <h1 className="cguH1">Art 5 - Description du Service</h1>
          <p className="pmargin">
            Le Service consiste à vous mettre l’utilisateur en relation directe
            avec le partenaire de Dirasat International en Algérie ou à
            l’international à travers le site web Dirasat international, et ce,
            dans tous les pays éligibles cités à l’article 2 des présentes.
          </p>
          <p className="pmargin">
            L’accès au service nécessite obligatoirement que l’utilisateur
            dispose d’une connexion internet.
          </p>
          <p className="pmargin">
            Le service Dirasat International utilise des outils de
            géolocalisation, afin de proposer à l’utilisateur le projet d’études
            qui correspond le plus à sa situation géographique.
          </p>
          <h1 className="cguH1">Art 6 - Prix du Service</h1>
          <p className="pmargin">
            L’utilisation des services de Dirasat international est gratuite.
            Chaque société partenaire de Dirasat International fixe le prix de
            ses prestations éducatives conformément à ses propres conditions
            d’utilisations et en informe l’utilisateur expressément lors de leur
            échange direct. Sauf mention contraire, ils sont exprimés selon la
            devise de chacun des pays où opère l’établissement partenaire et
            éligible cités dans l’article 02 des présentes, et en toutes taxes
            comprises.
          </p>
          <p className="pmargin">
            Dirasat International, en tant que marque d’E.MTIYAZ COACHING, de
            même que cette dernière, décline toute responsabilité dans la
            relation commerciale engagée par l’utilisateur après sollicitation
            par le partenaire.
          </p>
          <p className="pmargin">
            Aussi, la société ne peut être tenue responsable des offres,
            programmes, contenus, dont les auteurs sont des tiers, incluant des
            partenaires. Toute réclamation éventuelle devant être dirigée en
            premier lieu vers l’auteur des contenus en question. Les contenus
            préjudiciables à un tiers peuvent faire l’objet d’une notification à
            la société, qui se réserve de prendre les mesures qu’elle jugera
            nécessaires, en lien avec les autorités compétentes.
          </p>
          <h1 className="cguH1">Art 7 - Données</h1>
          <p className="pmargin">
            L’utilisateur reconnaît et accepte expressément :
          </p>
          <p className="pmargin">
            que les données recueillies sur le site web Dirasat International et
            sur les équipements informatiques de la SARL E.MTIYAZ COACHING font
            foi de la réalité des opérations intervenues dans le cadre des
            présentes ;
          </p>
          <h1 className="cguH1">Art 8 - Propriété intellectuelle</h1>
          <p className="pmargin">
            Les systèmes, logiciels, structures, infrastructures, bases de
            données et contenus de toute nature (textes, images, visuels,
            musiques, logos, marques, base de données, etc …) exploités par SARL
            E.MTIYAZ COACHING au sein du site web Dirasat International sont
            protégés par tous droits de propriété intellectuelle ou droits des
            producteurs de bases de données en vigueur.
          </p>
          <p className="pmargin">
            Tout désassemblage, décompilation, décryptage, extraction,
            réutilisation, copie et plus généralement, tous actes de
            reproduction, représentation, diffusion et utilisation de l’un de
            ces éléments, en tout ou en partie, sans l’autorisation de SARL
            E.MTIYAZ COACHING sont strictement interdits et pourront faire
            l’objet de poursuites judiciaires.
          </p>
          <h1 className="cguH1">Art 9 - Données à caractère personnel</h1>
          <p className="pmargin">
            Dirasat International pratique une politique de protection des
            données personnelles dont les caractéristiques sont explicitées dans
            le document intitulé « Politique de confidentialité », dont vous
            êtes expressément invité à prendre connaissance sur le site web.
          </p>
          <h1 className="cguH1">Art 10 - Liens et sites tiers</h1>
          <p className="pmargin">
            SARL E.MTIYAZ COACHING ne pourra en aucun cas être tenue pour
            responsable de la disponibilité technique de sites internet ou
            d’applications mobiles exploités par des tiers (y compris ses
            éventuels partenaires) auxquels vous accéderez par l’intermédiaire
            du site.
          </p>
          <p className="pmargin">
            SARL E.MTIYAZ COACHING n’endosse aucune responsabilité au titre des
            contenus, publicités, produits et/ou services disponibles sur de
            tels sites et applications mobiles tiers, y compris de ses
            partenaires, et dont il est rappelé qu’ils sont régis par leurs
            propres conditions d’utilisation.
          </p>
          <p className="pmargin">
            SARL E.MTIYAZ COACHING n’est pas non plus responsable des
            transactions intervenues entre l’utilisateur et un quelconque
            annonceur, professionnel ou commerçant (y compris ses éventuels
            partenaires) vers lequel l’utilisateur est orienté par
            l’intermédiaire du site et ne saurait en aucun cas faire partie de
            litiges éventuels avec ces tiers concernant notamment la livraison
            de produits et/ou services, les garanties, déclarations et autres
            obligations quelconques auxquelles ces tiers sont tenus.
          </p>
          <h1 className="cguH1">Art 11 - Durée des Services, désinscription</h1>
          <p className="pmargin">
            Les Services sont souscrits pour une durée indéterminée.
          </p>
          <p className="pmargin">
            L’utilisateur peut se désinscrire des Services à tout moment, en
            adressant une demande à cet effet à SARL E.MTIYAZ COACHING par
            email, aux coordonnées mentionnées à l’article 2.
          </p>
          <p className="pmargin">
            La désinscription est effective immédiatement. Elle entraîne la
            suppression automatique de vos données dans les éléments de
            communication interne ou externe (mailing lists, opérations de
            promotion, etc.)
          </p>
          <h1 className="cguH1">Art 12 - Modifications</h1>
          <p className="pmargin">
            SARL E.MTIYAZ COACHING se réserve la faculté de modifier à tout
            moment les présentes conditions générales.
          </p>
          <p className="pmargin">
            Si l’utilisateur a recours aux Services postérieurement à l’entrée
            en vigueur des conditions générales modifiées, il est réputé avoir
            accepté ces modifications.
          </p>
          <h1 className="cguH1">Art 13 - Loi applicable et juridiction</h1>
          <p className="pmargin">
            Les présentes conditions générales sont régies par les lois de
            chaque pays éligible cité dans l’article 2 des présentes conditions
            générales.
          </p>
          <p className="pmargin">
            En cas de contestation sur la validité, l’interprétation et /ou
            l’exécution des présentes conditions générales, les parties de
            chaque pays éligible cité dans l’article 02 des présentes,
            conviennent de porter ledit litige au tribunal territorialement
            compétent
          </p>
          <h1 className="cguH1">Art 14 - Entrée en vigueur</h1>
          <p className="pmargin">
            Les présentes conditions générales entreront en vigueur dès que
            l’utilisateur les valide tacitement en appuyant sur le champ «C’est
            parti! ». 
          </p>
        </div>
      </div>
    </>
  );
};

export default CGU;
