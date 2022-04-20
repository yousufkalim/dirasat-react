import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
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
              <p>DIRASAT</p>
              <p>01 84 80 74 81</p>
              <p>75116 Paris, France</p>
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
                  margin: "5px"
                }}
              >
                {" "}
                {/* Falcon Consulting */}
              </a>{" "}
              2021. Tous droits réservés
            </p>
            <div>
              <a
                href="https://mobile.twitter.com/Orientator_FR"
                target="_blank"
              >
                <TwitterIcon
                  style={{
                    padding: "0 9px",
                    cursor: "pointer",
                    color: "white"
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/orientator/"
                target="_blank"
              >
                <LinkedInIcon
                  style={{
                    padding: "0 9px",
                    cursor: "pointer",
                    color: "white"
                  }}
                />
              </a>

              <a
                href="https://www.facebook.com/OrientatorFrance/"
                target="_blank"
              >
                <FacebookIcon
                  style={{
                    padding: "0 9px",
                    cursor: "pointer",
                    color: "white"
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/orientator_france/"
                target="_blank"
              >
                <InstagramIcon
                  style={{
                    padding: "0 9px",
                    cursor: "pointer",
                    color: "white"
                  }}
                />
              </a>
            </div>
          </div>
          {/* <div className="cguDiv"> */}
          <div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
