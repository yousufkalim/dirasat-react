import * as React from "react";
import Grid from "@material-ui/core/Grid";

export default function Cookies({ setCookies }) {
  const handleCookies = () => {
    localStorage.setItem("cookies", true);
    setCookies(false);
  };
  const handleCancelCookies = () => {
    setCookies(false);
  };
  return (
    <Grid container spacing={2} className="cookies">
      <Grid item xs={12} sm={9} className="">
        <div className="cookiesDiv">
          <p>
            Ce site Web utilise des cookies qui aident le site Web à
            fonctionner. Mais pour que nous fournissions la meilleure expérience
            utilisateur, activez les cookies spécifiques.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={3} className="cookiesButtonDiv">
        <button onClick={handleCancelCookies} className="cookieButtoncancel">
          Canncel
        </button>
        <button onClick={handleCookies} className="cookieButtonaccept">
          Accepted
        </button>
      </Grid>
    </Grid>
  );
}
