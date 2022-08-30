// Init
import React, { useEffect } from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Index from './routes/index';
import './css/index.css';
import { Helmet } from 'react-helmet';
import SetAuthToken from './utils/SetAuthToken';
import api from './api';
import { UpdateStore } from './StoreContext';
import { setCookie, getCookie } from './utils/getAndSetCookies';
// Component
function App() {
  const updateStore = UpdateStore();

  useEffect(() => {
    window.addEventListener(
      'orientationchange',
      function () {
        // if (window.screen.orientation.angle !== 0) {
        //   alert("This App Not support to landscape mode");
        // }
        let mql = window.matchMedia('(orientation: portrait)');
        if (mql.matches) {
          alert(
            'Pour une meilleure expérieur utilisateur, nous vous conseillons de pivoter votre appareil pour être en mode Portrait.'
          );
        }
      },
      false
    );
  }, []);
  if (localStorage.token) {
    SetAuthToken(localStorage.token);
  }

  useEffect(() => {
    updateSiteViews();
  }, []);

  const updateSiteViews = async () => {
    let cookie = getCookie('siteViews');
    if (cookie) {
      const { data } = await api('get', 'siteViews');
      if (data) {
        updateStore({ siteViews: data.siteViews });
      }
    } else {
      const { data } = await api('post', 'siteViews');
      if (data) {
        updateStore({ siteViews: data.siteViews });
      }

      setCookie('siteViews', '1', 2);
    }
  };

  return (
    <div className={`App `}>
      <Helmet>
        <title>Dirasat - Le super héros de l'orientation universitaire</title>
        <meta name="description" content="Dirasat-Le superhéro de l’orientation!" />
        <meta
          name="keywords"
          content="ParcourSup,Dirasat,Post-bac,études,formation,Dirasat te propose une liste de voeux pour ton Parcoursup!"
        />
      </Helmet>
      {/* tostify Container for Notification */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={true} transition={Flip} limit={2} />
      {/* Routes */}
      <Index />
    </div>
  );
}
// Export
export default App;
