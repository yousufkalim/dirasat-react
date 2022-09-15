import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Main from '../assets/img/da2.png';
import MainCharacter from '../assets/img/dMainCharacter.png';
import ArabicMain from '../assets/img/arabicmain1.png';
import video1 from '../assets/video/dvideo.mp4';
import thumbnail from '../assets/img/thumbnaild1.png';
import Cookies from '../utils/Cookies';
import CookiesPopup from '../utils/CookiesPopup';
import CookiesPopup2 from '../utils/CookiesPopup2';
import Contactus from '../utils/Contactus';
import RefuserPopup from '../utils/RefuserPopup';
import { useLocation } from 'react-router-dom';
import f1 from '../assets/img/f1.png';
import f2 from '../assets/img/f2.png';
import f3 from '../assets/img/f3.png';
import arrowright from '../assets/img/arrow.png';
import Footer from './Footer';
import CountUp from 'react-countup';
import useSound from 'use-sound';
import sound from '../assets/sound/sound.wav';
import { useTranslation, Trans } from 'react-i18next';
import { url } from '../config';
import { Store } from '../StoreContext';

const Landing = ({ step, setStep, statetextforscroll }) => {
  console.log('process', `${url}/uploads/dvideo.mp4`);
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [play] = useSound(sound);
  const [openCookieePopup, setOpenCookieePopup] = useState(false);
  const [reuserPopup, setRefuserPopup] = useState(false);
  const [openCookieePopup2, setOpenCookieePopup2] = useState(false);
  const [checkCookies, setCookies] = useState(false);

  const items = [
    {
      text: 'Fonctionnalités liées aux réseaux sociaux',
      accept: false,
      refuse: false
    },
    { text: "Mesure d'audience", accept: false, refuse: false },
    {
      text: "Fonctionnalités liées à l'amélioration de votre expérience",
      accept: false,
      refuse: false
    },
    {
      text: 'Stocker et/ou accéder à des informations sur un terminal',
      accept: false,
      refuse: false
    },
    {
      text: 'Personnalisation du contenu éditorial et mesure de la performance',
      accept: false,
      refuse: false
    },
    {
      text: 'Personnalisation des publicités et mesure de la performance',
      accept: false,
      refuse: false
    },
    {
      text: 'Développer et améliorer les produits',
      accept: false,
      refuse: false
    },
    {
      text: 'Utiliser des données de géolocalisation précises',
      accept: false,
      refuse: false
    },
    {
      text: 'Analyser activement les caractéristiques du terminal pour l’identification',
      accept: false,
      refuse: false
    }
  ];

  const [data, setData] = useState(items);
  const { state } = useLocation();
  const capture1 = React.createRef();
  const video = document.getElementById('video');
  const { siteViews } = Store();

  const scrollToTop = () => {
    window.scrollTo({
      top: 11,
      behavior: 'smooth'
    });
  };
  const scrollToTopforComment = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setCookies(true);
    }, 5000);
  }, []);

  useEffect(() => {
    video?.play();
    scrollToTop();
    statetextforscroll === 'Accueil' && scrollToTop();
    statetextforscroll === 'Comment' ||
      (state === 'Comment' &&
        setTimeout(() => {
          scrollToTopforComment();
        }, 50));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <>
      <div className="main" id="top">
        {language == 'ar' ? (
          <img src={ArabicMain} className="bodyimg forweb" />
        ) : (
          <img src={Main} className="bodyimg forweb" />
        )}

        <img
          src={MainCharacter}
          alt="Dirasat's Mian charachter"
          className="bodyimg formobile"
        />
        <Grid
          container
          spacing={2}
          className={`${
            language == 'ar' && 'arabicbody-rectangleGrid2'
          } body-rectangle`}
        >
          <Grid item xs={12} sm={9} className={` body-rectangleGrid2`}>
            <h1 className={`${language == 'ar' && 'arabich3'} h3`}>
              {t("Commençons le test d'orientation")}!
            </h1>
            <p className={`${language == 'ar' && 'arabicp1'}  p1`}>
              {t(
                'À la fin de ce questionnaire, une proposition de voeux pour ton orientation te sera formulée'
              )}
              !
            </p>
          </Grid>
          <Grid item xs={12} sm={3} className="body-rectangleGrid3">
            <div className="partibuttondiv">
              <button
                className={` ${
                  language == 'ar' && 'arabicpartiButton'
                }  partiButton`}
                onClick={() => {
                  localStorage.cookies ? setStep(1) : setOpenCookieePopup(true);
                  play();
                }}
              >
                {t("C'est parti")}!
              </button>
              <img
                src={arrowright}
                className={` ${
                  language == 'ar' && 'arabicarrowright'
                }  arrowright`}
                alt="arrowIcon"
              />
            </div>
          </Grid>
        </Grid>
        <div id="comment" className="vidoSection">
          <h2 className="h2">{t('Comment ça marche?')}</h2>
        </div>
        <div style={{ margin: '10px' }}>
          <video
            id="video"
            // src={video1}
            poster={thumbnail}
            className="videImage"
            controls="controls"
            autoplay
            loop
          >
            <source
              src={`https://firebasestorage.googleapis.com/v0/b/dirasat-demo.appspot.com/o/dvideo.mp4?alt=media&token=e10aecc4-dc24-495d-a19d-7dff32dc6288`}
              type="video/mp4"
              poster={thumbnail}
            />
          </video>
        </div>
        {/* <img src={VideoImage} className="videImage" /> */}
        <Grid
          container
          spacing={3}
          className={` ${language == 'ar' && 'arabicfooterGrid'}  footerGrid`}
          id="my-node"
          ref={capture1}
        >
          <Grid
            item
            xs={12}
            sm={4}
            className={` ${language == 'ar' && 'directionltr'}  `}
          >
            <img src={f1} className="footerimg" alt="footerImg" />
            <h4 className="h4">{t('Étape 1')}</h4>
            <p className="p3">{t('Dis à Dirasat qui tu es.')}</p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            className={` ${language == 'ar' && 'directionltr'}  `}
          >
            <img src={f2} className="footerimg" alt="etape2" />
            <h4 className="h4">{t('Étape 2')}</h4>
            <p className="p3">{t('Réponds aux questions de Dirasat.')}</p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            id="MyElementIdHere"
            className={` ${language == 'ar' && 'directionltr'}  `}
          >
            <img src={f3} className="footerimg" alt="etape3" />
            <h4 className="h4">{t('Étape 3')}</h4>
            <p className="p3">
              {t('Dirasat te propose une liste de voeux pour ton orientation!')}
            </p>
          </Grid>
        </Grid>
        {/* <button onClick={onButtonClick}>Download PDF</button> */}
      </div>
      {!siteViews ? (
        <></>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <p
            style={{
              fontSize: '30px',
              fontWeight: '600',
              color: '#D4D8E5'
            }}
          >
            {t('Nombre de visiteurs')}
          </p>
          <CountUp
            start={1}
            end={
              siteViews.count > 800 ? siteViews.count : siteViews.count + 800
            }
            duration={5}
            style={{
              fontSize: '100px',
              color: '#FFFFFF',
              alignSelf: 'center',
              background: '#010F2C',
              letterSpacing: '18px',
              textIndent: '18px'
            }}
          />
        </div>
      )}

      <Contactus />
      <Footer />
      <CookiesPopup
        open={openCookieePopup}
        setOpen={setOpenCookieePopup}
        setOpenCookieePopup2={setOpenCookieePopup2}
        data={data}
        setData={setData}
      />
      <CookiesPopup2
        open={openCookieePopup2}
        setOpen={setOpenCookieePopup2}
        setData={setData}
      />
      {checkCookies
        ? !localStorage.cookies && (
            <Cookies
              setCookies={setCookies}
              setOpenCookieePopup={setOpenCookieePopup}
              setRefuserPopup={setRefuserPopup}
            />
          )
        : ''}
      <RefuserPopup
        open={reuserPopup}
        setOpen={setRefuserPopup}
        setData={setData}
        setOpenCookieePopup={setOpenCookieePopup}
      />
    </>
  );
};
export default Landing;
