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

export default function Header({
  step,
  setStep,
  setActiveStep,
  setStatetextforscroll
}) {
  const history = useHistory();

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
  return (
    <AppBar color="inherit" position={deviceType()} className="headerRoot">
      <Toolbar color="" className="showToolbar">
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
                Accueil
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
                Comment ça marche?
              </Typography>
            </AnchorLink>
            <div
              className="BlogMobileView"
              style={{ width: '60%', textAlign: 'right', marginTop: '10px' }}
            >
              <Link
                to="/blog"
                style={{ color: 'white', textDecoration: 'none' }}
                className={flag ? 'title c' : 'hidetitle c'}
              >
                Blog
              </Link>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
