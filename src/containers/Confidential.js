import React, { useEffect } from "react";

const Confidential = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 11,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
       <div
        style={{ minHeight: "100vh", marginTop: "-2%", background: "white" }}
      >
        <div style={{ width: "60%", margin: "auto" }}>
          <p className="cguHeading">
          POLITIQUE DE CONFIDENTIALITÉ
            <br />
            
          </p>
          <p>DU SITE :</p>
          <h1>Orientator.com</h1>
        </div>
        <div style={{ width: "60%", margin: "auto" }}>
          <h1>ARTICLE 1 : PRÉAMBULE</h1>
          <p>
          Cette politique de confidentialité s'applique au site : Orientator.com.
          </p>
          <p className="pmargin">
          La présente politique de confidentialité a pour but d'exposer aux utilisateurs du site :
          </p>
         
          <p className="pmargin">
          ● La manière dont sont collectées et traitées leurs données à caractère personnel. Doivent être considérées comme données personnelles toutes les données étant susceptibles d'identifier un utilisateur. Il s'agit notamment du prénom et du nom, de l'âge, de l'adresse postale, l'adresse mail, la localisation de l'utilisateur ou encore son adresse IP ;
          </p>
          
          <p className="pmargin">
          ● Quels sont les droits des utilisateurs concernant ces données ;
          </p>
          <p className="pmargin">
          ● Qui est responsable du traitement des données à caractère personnel collectées et traitées ;
          </p>
          <p className="pmargin">
            
          ● A qui ces données sont transmises ;
          </p>
          <p className="pmargin">
          ● Eventuellement, la politique du site en matière de fichiers "cookies".
          </p>
          <p className="pmargin">
          Cette politique de confidentialité complète les mentions légales et les Conditions Générales d'Utilisation que les utilisateurs peuvent consulter à l'adresse ci-après : www.orientator.com
          </p>
          <h1>ARTICLE 2 : PRINCIPES GÉNÉRAUX EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DE DONNÉES</h1>
          <p className="pmargin">
          Conformément aux dispositions de l'article 5 du Règlement européen 2016/679, la collecte et le traitement des données des utilisateurs du site respectent les principes suivants :
          </p>
          <p className="pmargin">
          ● Licéité, loyauté et transparence : les données ne peuvent être collectées et traitées qu'avec le consentement de l'utilisateur propriétaire des données. A chaque fois que des données à caractère personnel seront collectées, il sera indiqué à l'utilisateur que ses données sont collectées, et pour quelles raisons ses données sont collectées ;
          </p>
          <p className="pmargin">
          ● Finalités limitées : la collecte et le traitement des données sont exécutés pour répondre à un ou plusieurs objectifs déterminés dans les présentes conditions générales d'utilisation ;
          </p>
          <p className="pmargin">
          ● Minimisation de la collecte et du traitement des données : seules les données nécessaires à la bonne exécution des objectifs poursuivis par le site sont collectées ;
          </p>
          <p className="pmargin">
          ● Conservation des données réduites dans le temps : les données sont conservées pour une durée limitée, dont l'utilisateur est informé. Lorsque cette information ne peut pas être communiquée, l'utilisateur est informé des critères utilisés pour déterminer la durée de conservation ;
          </p>
          <p className="pmargin">
          ● Intégrité et confidentialité des données collectées et traitées : le responsable du traitement des données s'engage à garantir l'intégrité et la confidentialité des données collectées.
          </p>
        
          <p className="pmargin">
          Afin d'être licites, et ce conformément aux exigences de l'article 6 du règlement européen 2016/679, la collecte et le traitement des données à caractère personnel ne pourront intervenir que s'ils respectent au moins l'une des conditions ci-après énumérées :
          </p>
          <p className="pmargin">
          ● L'utilisateur a expressément consenti au traitement ;
          </p>
          <p className="pmargin">
          ● Le traitement est nécessaire à la bonne exécution d'un contrat ; 
          </p>
          <p className="pmargin">
          ● Le traitement répond à une obligation légale ;
          </p>
          <p className="pmargin">
          ● Le traitement s'explique par une nécessité liée à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique ;
          </p>
          <p className="pmargin">
          ● Le traitement peut s'expliquer par une nécessité liée à l'exécution d'une mission d'intérêt public ou qui relève de l'exercice de l'autorité publique ;
          </p>

          <p className="pmargin">
          ● Le traitement et la collecte des données à caractère personnel sont nécessaires aux fins des intérêts légitimes et privés poursuivis par le responsable du traitement ou par un tiers.
          </p>
          <h1>ARTICLE 3 : DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES DANS LE CADRE DE LA NAVIGATION SUR LE SITE</h1>
          <p className="pmargin">
          Sont considérés comme utilisateurs tous les internautes qui naviguent, lisent, visionnent et utilisent le site Orientator.
          </p>
          <p className="pmargin">
        <span className="boldText">  A.</span> DONNÉES COLLECTÉES ET TRAITÉES ET MODE DE COLLECTE
          </p>
          <p className="pmargin">
          Les données à caractère personnel collectées sur le site Orientator sont les suivantes :
          </p>
          <p className="pmargin">
          - Nom et prénom	 
          </p>
          <p className="pmargin">
          - Adresse postale 	
          </p>
          <p className="pmargin">
          - Adresse mail	 
          </p>
          <p className="pmargin">
          - Date de naissance	 
          </p>
          <p className="pmargin">
          - Numéro de téléphone	 
          </p>
          <p className="pmargin">
          - Coordonnées de l'établissement scolaire et niveau scolaire 	
          </p>
          <p className="pmargin">
          - Adresse IP
          </p>
          
        </div>
      </div>
   
    </>
  );
};

export default Confidential;
