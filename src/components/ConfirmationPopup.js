import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { toast } from 'react-toastify';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Grid from '@material-ui/core/Grid';
import EmailConfirmationpopup from './EmailConfirmationpopup';
import useSound from 'use-sound';
import sound from '../assets/sound/sound.wav';

import { UpdateStore } from '../StoreContext';
import api from '../api';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
export default function ConfirmationPop({
  confirmationOpen,
  SetconfirmationOpen,
  setStep,
  setActiveStep,
  handleSubmit,
  loadingresend,
  timeLeft,
  setTimeLeft,
  timeInterval,
  setresendLoading
}) {
  const updateStore = UpdateStore();

  const [loading, setLoading] = useState(false);
  const [openEmailpopup, setEmailPopup] = useState(false);
  const [formData, setFormData] = useState({
    otp: ''
  });
  // Destructuring of UserForm State
  const { otp } = formData;
  // onChange Function for Input Field
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [play] = useSound(sound);
  const handleSubmitverify = async () => {
    setLoading(true);

    let res = await api('post', '/users/verify', {
      otp
    });
    if (res.status === 200) {
      play();
      SetconfirmationOpen(false);
      setTimeLeft(30);
      setFormData({ otp: '' });
      setEmailPopup(true);
      setLoading(false);
    } else {
      setLoading(false);
      setFormData({ otp: '' });
      play();
      toast.error("Votre OTP n'est pas correct");
    }
  };
  const handleClose = () => {
    SetconfirmationOpen(false);
    clearInterval(timeInterval);
    setTimeLeft(30);
    setFormData({ otp: '' });
    setresendLoading(false);
  };
  return (
    <>
      <div>
        <BootstrapDialog
          // onClose={handleClose}
          open={confirmationOpen}
          style={{ backdropFilter: 'blur(20px)' }}
        >
          <IconButton
            className="InvitecloseButton"
            aria-label="close"
            onClick={handleClose}
          >
            <HorizontalRuleIcon fontSize="large" />
          </IconButton>
          <DialogContent className="modalcontent">
            <h3 className="dialogHeading">Entre le code reçu par SMS</h3>
            <Grid container spacing={1} className="invitedialoginputGrid">
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={onChange}
                placeholder="Entrez le code de vérification"
                className="dialoginputField"
                required
              />
            </Grid>
          </DialogContent>

          <div className="invitedialogAction">
            <button
              className="resendButton"
              onClick={handleSubmit}
              disabled={loadingresend}
            >
              Renvoyer {loadingresend && timeLeft}
            </button>
            <button
              size="Large"
              className="InvitemodalButon"
              onClick={handleSubmitverify}
              disabled={loading}
            >
              Vérifier
            </button>
          </div>
        </BootstrapDialog>
      </div>
      <EmailConfirmationpopup
        openEmailpopup={openEmailpopup}
        setEmailPopup={setEmailPopup}
        setStep={setStep}
        setActiveStep={setActiveStep}
        handleSubmit={handleSubmit}
        loadingresend={loadingresend}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        timeInterval={timeInterval}
        setresendLoading={setresendLoading}
      />
    </>
  );
}
