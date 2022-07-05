import React from 'react';
import { styled } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
export default function Popup({ open, setOpen, setStep }) {
  const handleClose = () => {
    setStep(0);
    setOpen(false);
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        open={open}
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <IconButton
          className="SharecloseButton"
          aria-label="close"
          onClick={handleClose}
        >
          <HorizontalRuleIcon fontSize="large" />
          {/* <img src={close} className="closeimg" /> */}
        </IconButton>
        <DialogContent className="modalcontent">
          <h2 className="dialogHeading"> contact u soon</h2>
        </DialogContent>
        <div className="invitedialogAction"></div>
      </BootstrapDialog>
    </div>
  );
}
