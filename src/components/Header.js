import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../assets/img/dlogot.png';
import Navicon from '../assets/icons/navicon.png';
import Closeicon from '../assets/icons/closeicon.png';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export default function Header({
  step,
  setStep,
  setActiveStep,
  setStatetextforscroll
}) {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const [flag, setFlag] = useState(false);
  // Show navbar when page is scorlled upto given distance

  const scrollToTop = () => {
    window.scrollTo({
      top: 115,
      behavior: 'smooth'
    });
  };
  const scrollToTopforComment = () => {
    window.scrollTo({
      top: 700,
      behavior: 'smooth'
    });
  };
  const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return '';
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return 'sticky';
    }
    return '';
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <AppBar
      color="inherit"
      position={deviceType()}
      className={`${language == 'ar' && 'arabicheaderRoot'} 
      headerRoot`}
    >
      <Toolbar
        color=""
        className={`${language == 'ar' && 'arabicshowToolbar'} 
      showToolbar`}
      >
        <div className=" dirasatlogo">
          <div
            edge="start"
            className="navIconbox"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setFlag(!flag);
            }}
          >
            {flag ? (
              <img src={Closeicon} className="navicon" alt="closeIcon" />
            ) : (
              <img src={Navicon} className="navicon" alt="navIcon" />
            )}
          </div>
          <div className="centerizelogo">
            <img
              src={logo}
              width="90%"
              className="dirasatlogoimg dirasatimg"
              onClick={() => {
                history.push('/');
                if (history.location.pathname === '/') {
                  window.location.reload('/');
                }
              }}
              alt="logo"
            />
          </div>
        </div>

        {(flag || window.innerWidth > 625) && (
          <>
            <AnchorLink
              href={`${!flag && '#top'}`}
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '15px 25px 0 0'
              }}
            >
              <Typography
                className={flag ? 'title a' : 'hidetitle a'}
                onClick={() => {
                  flag && scrollToTop();
                  step !== 0 && setStep(0);
                  step !== 0 && setActiveStep(1);
                  setStatetextforscroll('Accueil');
                  history.push('/');
                }}
              >
                {t('Accueil')}
              </Typography>
            </AnchorLink>
            <AnchorLink
              href={`${!flag ? '#comment' : ''}`}
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '15px 25px 0 0'
              }}
            >
              <Typography
                className={flag ? 'title b' : 'hidetitle b'}
                onClick={() => {
                  flag && scrollToTopforComment();
                  step !== 0 && setStep(0);
                  step !== 0 && setActiveStep(1);
                  setStatetextforscroll('Comment');

                  history.push('/', 'Comment');
                }}
              >
                {t('Comment ça marche?')}
              </Typography>
            </AnchorLink>
            <div
              className={`${language == 'ar' && 'arabicBlogMobileView'} 
              BlogMobileView`}
            >
              <Link
                to="/blog"
                style={{ color: 'white', textDecoration: 'none' }}
                className={flag ? 'title c' : 'hidetitle c'}
              >
                {t('Blog')}
              </Link>
            </div>

            <div
              className={`${language == 'ar' && 'arabiclanguageMobileView'} 
              languageMobileView`}
            >
              <button
                onClick={() =>
                  changeLanguage(`${language == 'en-GB' ? 'ar' : 'en-GB'}`)
                }
                className="langButton"
              >
                {language == 'ar' ? 'Français' : 'العربية'}
              </button>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
