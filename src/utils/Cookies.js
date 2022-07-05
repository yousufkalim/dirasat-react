import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default function Cookies({
  setCookies,
  setOpenCookieePopup,
  setRefuserPopup
}) {
  const handleCookies = () => {
    localStorage.setItem('cookies', true);
    setCookies(false);
  };
  const handleCancelCookies = () => {
    setRefuserPopup(true);
  };
  return (
    <Grid container spacing={2} className="cookies">
      <Grid item xs={12} sm={9} md={8} className="cookieeGrid">
        <div className="cookiesDiv">
          <p>
            En poursuivant votre navigation sur ce site, vous acceptez
            l'utilisation de cookies afin d'optimiser votre navigation et
            réaliser des statistiques de suivis. Pour en savoir plus, consultez
            <Link to="/CGU" style={{ color: 'white', marginLeft: '4px' }}>
              notre politique de confidentialité.
            </Link>
          </p>

          <p>
            Si vous refusez, vos informations de navigation ne seront pas
            conservées lors de votre visite. Nous apposons un seul cookie afin
            de mémoriser votre choix.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={3} md={4} className="cookiesButtonDiv">
        <button
          onClick={() => setOpenCookieePopup(true)}
          className="cookieButtonParameter"
        >
          Paramétrer
        </button>
        <button onClick={handleCancelCookies} className="cookieButtoncancel">
          Refuser
        </button>
        <button onClick={handleCookies} className="cookieButtonaccept">
          Accepter
        </button>
      </Grid>
    </Grid>
  );
}
