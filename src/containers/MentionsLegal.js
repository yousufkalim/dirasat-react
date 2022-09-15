import React, { useEffect } from 'react';
import logo from '../assets/img/dlogot.png';
import { useTranslation, Trans } from 'react-i18next';

const MentionsLegal = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
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
      {language == 'ar' ? (
        <div style={{ minHeight: '100vh', marginTop: '-2%', color: 'white' }}>
          <div style={{ width: '60%', margin: 'auto' }}>
            <p className="cguHeading">
              {/* <img src={logo} className="cgulogo" alt="logo" /> */}
              <br style={{ marginBottom: '10px ' }} />
              سياسة الخصوصية
              <br />
              <p> Dirasat-international.com</p>
            </p>
          </div>
          <div style={{ width: '85%', margin: 'auto' }}>
            <p className="boldText">:الديباجة </p>
            <p className="pmargin">
              يخضع ميثاق السرية لحماية البيانات الشخصية للقوانين واللوائح
              المعمول بها في الجزائر ، ولا سيما القانون 18-07 بتاريخ 10-06-2018
              المتعلق بحماية الأشخاص الطبيعيين في معالجة البيانات الشخصية طبيعة
              سجية   
            </p>
            <p className="pmargin">:تعريف وطبيعة البيانات الشخصية</p>
            <p className="pmargin">
              .عندما تستخدم موقعنا ، قد نطلب منك تزويدنا ببيانات شخصية عنك
            </p>
            <p className="pmargin">
              يشير مصطلح "البيانات الشخصية" إلى جميع البيانات التي تجعل من
              الممكن التعرف على الفرد ، والتي تتوافق بشكل خاص مع لقبك ، واسمك
              الأول ، واسم مستعار ، وصورة ، وعناوين بريدية وبريد إلكتروني ،
              وأرقام هواتف ، وتاريخ ميلاد ، وعنوان و اسم مدرستك ، بالإضافة إلى
              أي معلومات أخرى تختار مشاركتها معنا عن نفسك
            </p>
            {/* <h1 className="cguH1 legalh1">ARTICLE 1 - INFORMATIONS LÉGALES</h1> */}
            <p className="pmargin">
              الغرض من هذا النص هو إخبارك بالوسائل التي نستخدمها لجمع بياناتك
              الشخصية ، في إطار الاحترام الصارم لحقوقك ، ووفقًا للإطار القانوني
              والتنظيمي المعمول به
            </p>
            <p className="pmargin">: هوية جامع البيانات</p>
            <p className="pmargin">
              الشخص المسؤول عن جمع بياناتك الشخصية E.MTIYAZ COACHING ، وهو كيان
              قانوني يدير .بالإضافة إلى جميع وسائل الاتصال الخاصة به،بما في ذلك
              موقع علامة دراسات الدولية ومقره الرئيسي : 36 ب بروفانس الصغيرة
              16035- حيدرة
            </p>

            <p className="pmargin">16/00-101029533 : رقم السجل التجاري</p>
            <p className="pmargin">رقم التعريف الضريبي؛001516101029533</p>
            <p className="pmargin">
              contact@dirasat-international.com:عنوان البريد الإلكتروني مكتب
              الاتصال: 0540405115
            </p>
            <h1 className="cguH1 legalh1">
              1 - الغرض من جمع البيانات الشخصية:
            </h1>
            <p className="pmargin">
              <span className="boldText"> </span>: يتم جمع بياناتك الشخصية
              لتحقيق واحد أو أكثر من الأغراض التالية
            </p>
            <p className="pmargin">
              إدارة وصولك إلى خدمات معينة يمكن الوصول إليها على موقع دراسات
              إنترناشيونال -
            </p>
            <p className="pmargin">قم بإنشاء ملف مستخدم</p>
            <p className="pmargin">
              إرسال الرسائل الإخبارية والعروض والرسائل الترويجية. في حالة عدم
              رغبتك في ذلك ، فإننا نمنحك خيار التعبير عن رفضك لهذا الموضوع
              بمناسبة إرسال كل رسالة و / أو التماس
            </p>
            <p className="pmargin">تطوير الإحصائيات وحضور خدماتنا</p>
            <p className="pmargin">
              إدارة آراء الناس حول المنتجات أو الخدمات أو المحتوى -
            </p>
            <p className="pmargin">
              الامتثال لالتزاماتنا القانونية والتنظيمية-
            </p>
            <p className="pmargin">
              نبلغك ، عند جمع بياناتك الشخصية ، بما إذا كان يجب تقديم بيانات
              معينة أو ما إذا كانت اختيارية نخبرك أيضًا بالنتائج المحتملة لعدم
              الاستجابة
            </p>
            <h1 className="cguH1 legalh1">
              Art. 2 - Destinataires des données collectées
            </h1>
            <p className="pmargin">
              Le personnel de notre société ainsi que nos sous-traitants, et
              partenaires commerciaux en Algérie et à l’étranger, peuvent avoir
              accès à vos données pour les fins citées ci-dessus.
            </p>
            <p className="pmargin">
              Peuvent également être destinataires de vos données à caractère
              personnel les organismes publics Algériens, exclusivement pour
              répondre à nos obligations légales.
            </p>
            <h1 className="cguH1 legalh1">
              Art. 3 - Cession des données à caractère personnel
            </h1>
            <p className="pmargin">
              Vos données à caractère personnel pourront faire l’objet de
              cessions à titre gratuit ou onéreux à des tiers en vue des fins
              citées plus haut.
            </p>
            <h1 className="cguH1 legalh1">
              Art. 4 - Durée de conservation des données à caractère personnel
            </h1>
            <p className="pmargin">
              Concernant les données relatives à la gestion de clients et
              prospects :
            </p>
            <p className="pmargin">
              - Vos données à caractère personnel ne seront pas conservées
              au-delà de la durée strictement nécessaire à la gestion de notre
              relation commerciale avec vous et / ou à celle nécessaire pour
              l’exécution du contrat entre les parties ainsi que pour la
              réalisation des finalités citées plus haut. Toutefois, les données
              permettant d’établir la preuve d’un droit ou d’un contrat, devant
              être conservées au titre du respect d’une obligation légale, le
              seront pendant la durée prévue par la loi en vigueur.
            </p>

            <p className="pmargin">
              Concernant les statistiques de mesure d’audience :
            </p>
            <p className="pmargin">
              - Les informations stockées dans le terminal des utilisateurs ou
              tout autre élément utilisé pour identifier les utilisateurs et
              permettant leur traçabilité ou fréquentation ne seront pas
              conservées au-delà de la durée égale à celle nécessaire pour
              l’exécution du contrat entre les parties ainsi que pour la
              réalisation des finalités citée ci-haut.-
            </p>
            <h1 className="cguH1 legalh1">Art. 5 - Sécurité </h1>
            <p className="pmargin">
              Nous vous informons prendre toutes précautions utiles, mesures
              organisationnelles et techniques appropriées pour préserver la
              sécurité, l’intégrité et la confidentialité de vos données à
              caractère personnel et notamment, empêcher qu’elles soient
              déformées, endommagées ou que des tiers non autorisés y aient
              accès. 
            </p>
            <h1 className="cguH1 legalh1">Art. 6 - Cookies</h1>
            <p className="pmargin" style={{ paddingBottom: '30px' }}>
              Les cookies sont des fichiers textes, souvent cryptés, stockés
              dans votre navigateur. Ils sont créés lorsque le navigateur d’un
              utilisateur charge un site internet donné : le site envoie des
              informations au navigateur, qui crée alors un fichier texte.
              Chaque fois que l’utilisateur revient sur le même site, le
              navigateur récupère ce fichier et l’envoie au serveur du site
              internet.
            </p>
            <p className="pmargin">
              On peut distinguer deux types de cookies, qui n’ont pas les mêmes
              finalités : les cookies techniques et les cookies publicitaires :
            </p>
            <p className="pmargin">
              - Les cookies techniques sont utilisés tout au long de votre
              navigation, afin de faciliter et d’exécuter certaines fonctions.
              Un cookie technique peut par exemple être utilisé pour mémoriser
              les réponses renseignées dans un formulaire ou encore les
              préférences de l’utilisateur s’agissant de la langue ou de la
              présentation d’un site internet, lorsque de telles options sont
              disponibles.
            </p>
            <p className="pmargin">
              - Les cookies publicitaires peuvent être créés non seulement par
              le site internet sur lequel l’utilisateur navigue, mais également
              par d’autres sites internet diffusant des publicités, annonces,
              widgets ou autres éléments sur la page affichée. Ces cookies
              peuvent notamment être utilisés pour effectuer de la publicité
              ciblée, c’est-à-dire de la publicité déterminée en fonction de la
              navigation de l’utilisateur.
            </p>
            <p className="pmargin">
              Nous utilisons des cookies techniques. Ceux-ci sont stockés dans
              votre navigateur pour une période qui ne peut excéder six mois.
            </p>
            <p className="pmargin">
              L’utilisateur est informé au préalable de l’utilisation de cookies
              publicitaires et celui-ci peut alors le cas échéant désactiver ces
              cookies.
            </p>
            <p className="pmargin">
              Nous utilisons ou pouvons utiliser Google Analytics qui est un
              outil statistique d’analyse d’audience qui génère un cookie
              permettant de mesurer le nombre de visites sur le site, le nombre
              de pages vues et l’activité des visiteurs. Votre adresse IP est
              également collectée pour déterminer la ville depuis laquelle vous
              vous connectez. La durée de conservation de ce cookie est
              mentionnée à l’article 4 de la présente charte.
            </p>
            <p className="pmargin">
              Nous vous rappelons à toutes fins utiles qu’il vous est possible
              de vous opposer au dépôt de cookies en configurant votre
              navigateur. Un tel refus pourrait toutefois empêcher le bon
              fonctionnement du site.
            </p>
            <h1 className="cguH1 legalh1">Art. 7 - Consentement </h1>
            <p className="pmargin">
              Lorsque vous choisissez de communiquer vos données à caractère
              personnel, vous donnez expressément votre consentement  à E.MTIYAZ
              COACHING de les collecter et les utiliser conformément à ce qui a
              été énoncé à la présente charte et les  législations en vigueurs.
            </p>
            <p className="pmargin">
              En utilisant notre outil, l’utilisateur donne expressément son
              consentement à la société de transmettre à ses sous-traitants et
              ses partenaires.
            </p>
            <p className="pmargin">
              En renseignant ses informations personnelles, l’utilisateur donne
              son consentement afin de recevoir toute notification, alerte, sms,
              email de la part de notre société, ses sous-traitants ou ses
              partenaires.
            </p>
            <p className="pmargin">
              Si vous ne désirez plus recevoir d’e-mail, notification, sms, de
              notre part ou de la part d’un sous-traitant ou partenaire, il vous
              suffit d’informer la société E.MTIYAZ COACHING en envoyant un
              email à l’adresse suivante : contact@dirasat-international.com
            </p>
            <h1 className="cguH1 legalh1">
              Art. 8 - Droit de porter plainte auprès de l’instance de
              régulation{' '}
            </h1>
            <p className="pmargin">
              L’utilisateur est informé de son droit de porter plainte auprès de
              l’instance de régulation pour toute violation dans le traitement
              des données à caractère personnel et ce, selon chaque pays
              éligible selon le cas. 
            </p>
            <h1 className="cguH1 legalh1">
              Art. 9 - Accès à vos données à caractère personnel
            </h1>
            <p className="pmargin">
              Nous informons que vous disposez du droit d’obtenir la
              communication et, le cas échéant, la rectification ou la
              suppression des données vous concernant, en vous adressant à
              l’adresse suivante : contact@dirasat-international.com
            </p>
            <p className="pmargin">
              Adresse de courrier postal : 36B Petite Provence, 16035 Hydra,
              Alger.
            </p>
            <p className="pmargin">
              Il est rappelé que toute personne peut, pour des motifs légitimes,
              s’opposer au traitement des données la concernant.
            </p>
            <h1 className="cguH1 legalh1">Art. 10 - Modifications</h1>
            <p className="pmargin">
              Nous nous réservons le droit de modifier la présente charte sans
              préjudice aux lois applicables dans chacun des pays éligibles cité
              dans le préambule
            </p>
            <p className="pmargin">
              Ces modifications entreront en vigueur à compter de la publication
              de la nouvelle charte. Votre utilisation du site web et /
              applications suite à l’entrée en vigueur de ces modifications
              vaudra reconnaissance et acceptation de la nouvelle charte. A
              défaut et si cette nouvelle charte ne vous convient pas, vous ne
              devrez plus accéder au site et / ou site web.
            </p>
            <h1 className="cguH1 legalh1">Art. 11 - Entrée en vigueur</h1>
            <p className="pmargin">
              La présente charte est entrée en vigueur le jour de sa date de
              publication sur l’application, le site web
              www.dirasat-international.com et www.e-mtiyaz.com.
            </p>
          </div>
        </div>
      ) : (
        <div style={{ minHeight: '100vh', marginTop: '-2%', color: 'white' }}>
          <div style={{ width: '60%', margin: 'auto' }}>
            <p className="cguHeading">
              {/* <img src={logo} className="cgulogo" alt="logo" /> */}
              <br style={{ marginBottom: '10px ' }} />
              POLITIQUE DE CONFIDENTIALITÉ DU SITE
              <br />
              <p> Dirasat-international.com</p>
            </p>
          </div>
          <div style={{ width: '85%', margin: 'auto' }}>
            <p className="boldText">Préambule : </p>
            <p className="pmargin">
              La présente charte de confidentialité portant protection de
              données à caractère personnel est régie selon les lois et
              réglementations en vigueur en Algérie, et en particulier la loi
              18-07 du 10-06-2018 relative à la protection des personnes
              physiques dans le traitement des données à caractère personnel.   
            </p>
            <p className="pmargin">
              Définition et nature des données à caractère personnel :
            </p>
            <p className="pmargin">
              Lors de votre utilisation de notre site web, nous pouvons être
              amenés à vous demander de nous communiquer des données à caractère
              personnel vous concernant.
            </p>
            <p className="pmargin">
              Le terme « données à caractère personnel » désigne toutes les
              données qui permettent d’identifier un individu, ce qui correspond
              notamment à votre nom, prénoms, pseudonyme, photographie, adresses
              postale et de courrier électronique, numéros de téléphone, date de
              naissance, adresse et nom de votre établissement scolaire, ainsi
              qu’à tout autre renseignement que vous choisirez de nous
              communiquer à votre sujet.
            </p>
            {/* <h1 className="cguH1 legalh1">ARTICLE 1 - INFORMATIONS LÉGALES</h1> */}
            <p className="pmargin">
              Le présent texte a pour objet de vous informer sur les moyens que
              nous mettons en œuvre pour collecter vos données à caractère
              personnel, dans le respect le plus strict de vos droits, et selon
              le cadre légal et réglementaire en vigueur.
            </p>
            <p className="pmargin">
              Identité du responsable de la collecte de données :
            </p>
            <p className="pmargin">
              Le responsable de la collecte de vos données à caractère personnel
              est la société E.MTIYAZ COACHING, entité juridique gérant la
              marque Dirasat International (ainsi que l’ensemble de ses
              manifestations, incluant le site www.dirasat-international.com)
              ayant son siège social au :
            </p>
            <p className="pmargin">36B Petite Provence, 16035 Hydra.</p>
            <p className="pmargin">
              Numéro de registre du commerce : 16/00-1010295B15
            </p>
            <p className="pmargin">
              Numéro d’identification fiscal (NIF):001516101029533
            </p>
            <p className="pmargin">
              Adresse électronique : contact@dirasat-international.com Customer
              Support : 0540405115
            </p>
            <h1 className="cguH1 legalh1">
              Art. 1 - Finalité de la collecte des données à caractère personnel
            </h1>
            <p className="pmargin">
              <span className="boldText"> </span> Vos données à caractère
              personnel sont collectées pour répondre à une ou plusieurs des
              finalités suivantes :
            </p>
            <p className="pmargin">
              - Gérer votre accès à certains services accessibles sur le site
              web Dirasat International,
            </p>
            <p className="pmargin">- Constituer un fichier d’utilisateurs,</p>
            <p className="pmargin">
              - Adresser des newsletters, sollicitations et messages
              promotionnels. Dans le cas où vous ne le souhaiteriez pas, nous
              vous donnons la faculté d’exprimer votre refus à ce sujet à
              l’occasion de chaque message et / ou sollicitation envoyés;
            </p>
            <p className="pmargin">
              - Élaborer des statistiques et de fréquentation de nos services,
            </p>
            <p className="pmargin">
              - Gérer la gestion des avis des personnes sur des produits,
              services ou contenus,
            </p>
            <p className="pmargin">
              - Respecter nos obligations légales et réglementaires.
            </p>
            <p className="pmargin">
              - Nous vous informons, lors de la collecte de vos données
              personnelles, si certaines données doivent être obligatoirement
              renseignées ou si elles sont facultatives. Nous vous indiquons
              également quelles sont les conséquences éventuelles d’un défaut de
              réponse.
            </p>
            <h1 className="cguH1 legalh1">
              Art. 2 - Destinataires des données collectées
            </h1>
            <p className="pmargin">
              Le personnel de notre société ainsi que nos sous-traitants, et
              partenaires commerciaux en Algérie et à l’étranger, peuvent avoir
              accès à vos données pour les fins citées ci-dessus.
            </p>
            <p className="pmargin">
              Peuvent également être destinataires de vos données à caractère
              personnel les organismes publics Algériens, exclusivement pour
              répondre à nos obligations légales.
            </p>
            <h1 className="cguH1 legalh1">
              Art. 3 - Cession des données à caractère personnel
            </h1>
            <p className="pmargin">
              Vos données à caractère personnel pourront faire l’objet de
              cessions à titre gratuit ou onéreux à des tiers en vue des fins
              citées plus haut.
            </p>
            <h1 className="cguH1 legalh1">
              Art. 4 - Durée de conservation des données à caractère personnel
            </h1>
            <p className="pmargin">
              Concernant les données relatives à la gestion de clients et
              prospects :
            </p>
            <p className="pmargin">
              - Vos données à caractère personnel ne seront pas conservées
              au-delà de la durée strictement nécessaire à la gestion de notre
              relation commerciale avec vous et / ou à celle nécessaire pour
              l’exécution du contrat entre les parties ainsi que pour la
              réalisation des finalités citées plus haut. Toutefois, les données
              permettant d’établir la preuve d’un droit ou d’un contrat, devant
              être conservées au titre du respect d’une obligation légale, le
              seront pendant la durée prévue par la loi en vigueur.
            </p>

            <p className="pmargin">
              Concernant les statistiques de mesure d’audience :
            </p>
            <p className="pmargin">
              - Les informations stockées dans le terminal des utilisateurs ou
              tout autre élément utilisé pour identifier les utilisateurs et
              permettant leur traçabilité ou fréquentation ne seront pas
              conservées au-delà de la durée égale à celle nécessaire pour
              l’exécution du contrat entre les parties ainsi que pour la
              réalisation des finalités citée ci-haut.-
            </p>
            <h1 className="cguH1 legalh1">Art. 5 - Sécurité </h1>
            <p className="pmargin">
              Nous vous informons prendre toutes précautions utiles, mesures
              organisationnelles et techniques appropriées pour préserver la
              sécurité, l’intégrité et la confidentialité de vos données à
              caractère personnel et notamment, empêcher qu’elles soient
              déformées, endommagées ou que des tiers non autorisés y aient
              accès. 
            </p>
            <h1 className="cguH1 legalh1">Art. 6 - Cookies</h1>
            <p className="pmargin" style={{ paddingBottom: '30px' }}>
              Les cookies sont des fichiers textes, souvent cryptés, stockés
              dans votre navigateur. Ils sont créés lorsque le navigateur d’un
              utilisateur charge un site internet donné : le site envoie des
              informations au navigateur, qui crée alors un fichier texte.
              Chaque fois que l’utilisateur revient sur le même site, le
              navigateur récupère ce fichier et l’envoie au serveur du site
              internet.
            </p>
            <p className="pmargin">
              On peut distinguer deux types de cookies, qui n’ont pas les mêmes
              finalités : les cookies techniques et les cookies publicitaires :
            </p>
            <p className="pmargin">
              - Les cookies techniques sont utilisés tout au long de votre
              navigation, afin de faciliter et d’exécuter certaines fonctions.
              Un cookie technique peut par exemple être utilisé pour mémoriser
              les réponses renseignées dans un formulaire ou encore les
              préférences de l’utilisateur s’agissant de la langue ou de la
              présentation d’un site internet, lorsque de telles options sont
              disponibles.
            </p>
            <p className="pmargin">
              - Les cookies publicitaires peuvent être créés non seulement par
              le site internet sur lequel l’utilisateur navigue, mais également
              par d’autres sites internet diffusant des publicités, annonces,
              widgets ou autres éléments sur la page affichée. Ces cookies
              peuvent notamment être utilisés pour effectuer de la publicité
              ciblée, c’est-à-dire de la publicité déterminée en fonction de la
              navigation de l’utilisateur.
            </p>
            <p className="pmargin">
              Nous utilisons des cookies techniques. Ceux-ci sont stockés dans
              votre navigateur pour une période qui ne peut excéder six mois.
            </p>
            <p className="pmargin">
              L’utilisateur est informé au préalable de l’utilisation de cookies
              publicitaires et celui-ci peut alors le cas échéant désactiver ces
              cookies.
            </p>
            <p className="pmargin">
              Nous utilisons ou pouvons utiliser Google Analytics qui est un
              outil statistique d’analyse d’audience qui génère un cookie
              permettant de mesurer le nombre de visites sur le site, le nombre
              de pages vues et l’activité des visiteurs. Votre adresse IP est
              également collectée pour déterminer la ville depuis laquelle vous
              vous connectez. La durée de conservation de ce cookie est
              mentionnée à l’article 4 de la présente charte.
            </p>
            <p className="pmargin">
              Nous vous rappelons à toutes fins utiles qu’il vous est possible
              de vous opposer au dépôt de cookies en configurant votre
              navigateur. Un tel refus pourrait toutefois empêcher le bon
              fonctionnement du site.
            </p>
            <h1 className="cguH1 legalh1">Art. 7 - Consentement </h1>
            <p className="pmargin">
              Lorsque vous choisissez de communiquer vos données à caractère
              personnel, vous donnez expressément votre consentement  à E.MTIYAZ
              COACHING de les collecter et les utiliser conformément à ce qui a
              été énoncé à la présente charte et les  législations en vigueurs.
            </p>
            <p className="pmargin">
              En utilisant notre outil, l’utilisateur donne expressément son
              consentement à la société de transmettre à ses sous-traitants et
              ses partenaires.
            </p>
            <p className="pmargin">
              En renseignant ses informations personnelles, l’utilisateur donne
              son consentement afin de recevoir toute notification, alerte, sms,
              email de la part de notre société, ses sous-traitants ou ses
              partenaires.
            </p>
            <p className="pmargin">
              Si vous ne désirez plus recevoir d’e-mail, notification, sms, de
              notre part ou de la part d’un sous-traitant ou partenaire, il vous
              suffit d’informer la société E.MTIYAZ COACHING en envoyant un
              email à l’adresse suivante : contact@dirasat-international.com
            </p>
            <h1 className="cguH1 legalh1">
              Art. 8 - Droit de porter plainte auprès de l’instance de
              régulation{' '}
            </h1>
            <p className="pmargin">
              L’utilisateur est informé de son droit de porter plainte auprès de
              l’instance de régulation pour toute violation dans le traitement
              des données à caractère personnel et ce, selon chaque pays
              éligible selon le cas. 
            </p>
            <h1 className="cguH1 legalh1">
              Art. 9 - Accès à vos données à caractère personnel
            </h1>
            <p className="pmargin">
              Nous informons que vous disposez du droit d’obtenir la
              communication et, le cas échéant, la rectification ou la
              suppression des données vous concernant, en vous adressant à
              l’adresse suivante : contact@dirasat-international.com
            </p>
            <p className="pmargin">
              Adresse de courrier postal : 36B Petite Provence, 16035 Hydra,
              Alger.
            </p>
            <p className="pmargin">
              Il est rappelé que toute personne peut, pour des motifs légitimes,
              s’opposer au traitement des données la concernant.
            </p>
            <h1 className="cguH1 legalh1">Art. 10 - Modifications</h1>
            <p className="pmargin">
              Nous nous réservons le droit de modifier la présente charte sans
              préjudice aux lois applicables dans chacun des pays éligibles cité
              dans le préambule
            </p>
            <p className="pmargin">
              Ces modifications entreront en vigueur à compter de la publication
              de la nouvelle charte. Votre utilisation du site web et /
              applications suite à l’entrée en vigueur de ces modifications
              vaudra reconnaissance et acceptation de la nouvelle charte. A
              défaut et si cette nouvelle charte ne vous convient pas, vous ne
              devrez plus accéder au site et / ou site web.
            </p>
            <h1 className="cguH1 legalh1">Art. 11 - Entrée en vigueur</h1>
            <p className="pmargin">
              La présente charte est entrée en vigueur le jour de sa date de
              publication sur l’application, le site web
              www.dirasat-international.com et www.e-mtiyaz.com.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MentionsLegal;
