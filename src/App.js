// Init
import React, { useState, useEffect } from "react";

import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Index from "./routes/index";
import "./css/index.css";

import SetAuthToken from "./utils/SetAuthToken";

// Component
function App() {
  useEffect(() => {
    console.log("window.screen.orientation", window.screen.orientation);
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
      <Index />
    </div>
  );
}

// Export
export default App;
