// Init
import React, { useState, useEffect } from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Index from "./routes/index";
import "./css/index.css";
import { Helmet } from "react-helmet";
import SetAuthToken from "./utils/SetAuthToken";
// Component
function App() {
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
      <Helmet>
        <title>Orientator</title>
        <meta
          name="description"
          content="Commençons le test d'orientation! À la fin de ce questionnaire, une proposition de voeux pour Parcoursup te sera formulée!"
        />
        <meta
          name="keywords"
          content="ParcourSup,Orientator,Post-bac,études,formation,Orientator te propose une liste de voeux pour ton Parcoursup!"
        />
      </Helmet>
      {/* tostify Container for Notification */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
        limit={2}
      />
      {/* Routes */}
      <Index />
    </div>
  );
}
// Export
export default App;
