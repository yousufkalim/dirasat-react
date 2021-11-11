import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function Info({ anchorEl, setAnchorEl }) {
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
          Le savais-tu? il est possible d’envisager des études payantes sans
          forcément payer par toi-même! En effet, il existe plein d’options pour
          financer tes études: alternance, apprentissage, job étudiants,
          bourses, prêts d’honneur, etc. Je te donnerai plein de conseils et de
          bon plans pour financer tes études si tu le souhaites !
        </Typography>
      </Popover>
    </div>
  );
}
