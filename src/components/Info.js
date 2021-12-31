import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function Info({ anchorEl, setAnchorEl, text }) {
  console.log("text in info", text);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {text == 1 &&
            "Le savais-tu? il est possible d’envisager des études payantes sans forcément payer par toi-même! En effet, il existe plein d’options pour financer tes études: alternance, apprentissage, job étudiants, bourses, prêts d’honneur, etc. Je te donnerai plein de conseils et de bon plans pour financer tes études si tu le souhaites prestige!"}
          {text == 2 &&
            "Après avoir reçu ma proposition de liste Parcoursup, tu seras contacté par la suite pour recevoir le plein de conseils concernant ton projet d’études à l’international!"}
          {text == 3 &&
            " Le savais-tu? Le mot sélectivité signifie que pour accéder à une formation dite “sélective”, il te sera généralement nécessaire de passer un concours ou un test, ou que ton dossier scolaire (notes, appréciations) sera pris en compte davantage que dans une formation moins sélective. Du coup, sélectivité veut généralement aussi dire prestige."}
        </Typography>
      </Popover>
    </div>
  );
}
