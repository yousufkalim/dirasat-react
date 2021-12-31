import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <>
      <div className="FooterDiv">
        <div className="cguBar">
          <h3 className="footeraccueil" style={{ textAlign: "center" }}>
            <AnchorLink
              href="#top"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Accueil
            </AnchorLink>
          </h3>
          <p className="developby" style={{ textAlign: "center" }}>
            {/* Développé par */}
            <a
              href="https:www.falconconsulting.fr"
              target="_blank"
              style={{ textDecoration: "none", color: " gray", margin: "5px" }}
            >
              {" "}
              {/* Falcon Consulting */}
            </a>{" "}
            2021. Tous droits réservés
          </p>
          <h3 className="footercgu" style={{ textAlign: "center" }}>
            <Link to="/CGU" style={{ color: "white", textDecoration: "none" }}>
              CGU
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
