// Init
import React, { useState, useEffect } from "react";

import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Index from "./routes/index";
import "./css/index.css";

import SetAuthToken from "./utils/SetAuthToken";

// Component
function App() {
  

  const items = [
    // { text: "Fonctionnalités basiques de navigation requises", accept:false,refuse:false },
    { text: "Fonctionnalités liées aux réseaux sociaux", accept:false,refuse:false },
    { text: "Mesure d'audience", accept:false,refuse:false },
    { text: "Fonctionnalités liées à l'amélioration de votre expérience", accept:false,refuse:false },
    { text: "Stocker et/ou accéder à des informations sur un terminal", accept:false,refuse:false },
    { text: "Personnalisation du contenu éditorial et mesure de la performance", accept:false,refuse:false },
    { text: "Personnalisation des publicités et mesure de la performance", accept:false,refuse:false },
    { text: "Développer et améliorer les produits", accept:false,refuse:false },
    { text: "Utiliser des données de géolocalisation précises", accept:false,refuse:false },
    { text: "Analyser activement les caractéristiques du terminal pour l’identification", accept:false,refuse:false },
  ];
  const [data, setData] = useState(items);
  useEffect(() => {
    window.addEventListener(
      "orientationchange",
      function () {
        // if (window.screen.orientation.angle !== 0) {
        //   alert("This App Not support to landscape mode");
        // }
        let mql = window.matchMedia("(orientation: portrait)");
        if (mql.matches) {
          alert(
            "Pour une meilleure expérieur utilisateur, nous vous conseillons de pivoter votre appareil pour être en mode Portrait."
          );
        }
      },
      false
    );
  }, []);
  if (localStorage.token) {
    SetAuthToken(localStorage.token);
  }

  return (
    <div className={`App `}>
      {/* tostify Container for Notification */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
      />
      {/* Routes */}


      <Index
      />
    </div>
  );
}

// Export
export default App;
