import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { toast } from 'react-toastify';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Grid from '@material-ui/core/Grid';

import { UpdateStore } from '../StoreContext';
import api from '../api';
import useSound from 'use-sound';
import sound from '../assets/sound/sound.wav';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
export default function EmailConfirmationpop({
  openEmailpopup,
  setEmailPopup,
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
  const [play] = useSound(sound);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    emailotp: ''
  });
  // Destructuring of UserForm State
  const { emailotp } = formData;
  // onChange Function for Input Field
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitverify = async () => {
    setLoading(true);

    let res = await api('post', '/users/verifybyemail', {
      emailotp
    });
    if (res.status === 200) {
      setEmailPopup(false);
      play();
      console.log('res?.data?.user', res?.data?.user);
      updateStore({
        questions: res?.data?.questions,
        answers: res?.data?.answers,
        user: res?.data?.user
      });
      setLoading(false);
      setFormData({ emailotp: '' });
      setStep(2);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      play();
      setLoading(false);
      setFormData({ emailotp: '' });
      toast.error("Votre OTP n'est pas correct");
    }
  };
  const handleClose = () => {
    setEmailPopup(false);
    clearInterval(timeInterval);
    setTimeLeft(30);
    setFormData({ emailotp: '' });
    setresendLoading(false);
  };
  return (
    <div>
      <BootstrapDialog
        // onClose={handleClose}
        open={openEmailpopup}
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <IconButton
          className="InvitecloseButton"
          aria-label="close"
          onClick={handleClose}
        >
          <HorizontalRuleIcon fontSize="large" />
          {/* <img src={close} className="closeimg" /> */}
        </IconButton>
        <DialogContent className="modalcontent">
          <h3 className="dialogHeading">
            Entre le code envoyé sur ton adresse e-mail. Attention, bien
            vérifier ses courriers indésirables (spams)
          </h3>
          <Grid container spacing={1} className="invitedialoginputGrid">
            <input
              type="text"
              name="emailotp"
              value={emailotp}
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
  );
}
