// Init
import React, { useState, useEffect } from "react";

import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Index from "./routes/index";
import "./css/index.css";

import SetAuthToken from "./utils/SetAuthToken";
import Cookies from "./utils/Cookies";

// Component
function App() {
  const [checkCookies, setCookies] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCookies(true);
    }, 5000);
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

      {checkCookies
        ? !localStorage.cookies && <Cookies setCookies={setCookies} />
        : ""}

      <Index />
    </div>
  );
}

// Export
export default App;
