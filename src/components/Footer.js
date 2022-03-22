import React, { useState, useEffect } from "react";
import api from "../api";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {

  const [siteViews, setSiteViews] = useState(null);

  useEffect(() => {
    updateSiteViews();
  }, []);

  const updateSiteViews = async () => {
    const data = await api("post", "/siteViews");
    if (data.data) {
      setSiteViews(data.data.siteViews);
    }
  };

  return (
    <>
      <div className="FooterDiv">
        <div className="cguBar">
          <div>
            <h3 className="footeraccueil" style={{ textAlign: "" }}>
              {/* <AnchorLink
              href="#top"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Accueil
            </AnchorLink> */}
            </h3>

            <div>
              <p>ORIENTATOR</p>
              <p>01 84 80 74 81</p>
              <p>75116 Paris, France</p>
              {/* <p>E-mail : contact@orientator.com</p>
              <p>Téléphone : 01 84 80 74 81</p> */}
            </div>
          </div>
          <div className="developbydiv">
            <p className="developby" style={{ textAlign: "" }}>
              {/* Développé par */}
              <a
                href="https:www.falconconsulting.fr"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: " gray",
                  margin: "5px",
                }}
              >
                {" "}
                {/* Falcon Consulting */}
              </a>{" "}
              2021. Tous droits réservés
            </p>
          </div>
          <div className="cguDiv">
            <div className="footercgu" style={{ textAlign: "" }}>
              <Link
                to="/CGU"
                className="cgufont"
                style={{ color: "white", textDecoration: "none" }}
              >
                CGU
              </Link>
              <p style={{ margin: "7px" }} />
              <Link
                to="/MentionsLegal"
                style={{ color: "white", textDecoration: "none" }}
              >
                Mentions légales
              </Link>
              {
                !siteViews
                ? <></>
                : <p style={{ color: "white", textDecoration: "none" }}>
                    {`Views: ${siteViews.count}`}
                  </p>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
