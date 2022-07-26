import React from 'react';
import { styled } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
export default function InviteBox({ open, setOpen }) {
  const url = 'https://www.dirasat-international.com/';
  const handleClose = () => {
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
          <h2 className="dialogHeading">Partager sur</h2>
          <Grid container spacing={1} className="invitedialoginputGrid">
            <Grid item sm={4}>
              <FacebookShareButton
                url={url}
                target="_blank"
                quote="Salut! Je viens de faire le test de Dirasat dans le cadre de mon orientation post-bac et je suis fin prêt à prendre une décision! À ton tour sur:"
              >
                <FacebookIcon round={true} className="socialIcons fb" />
              </FacebookShareButton>
            </Grid>
            {/* <Grid item sm={3}>
              <WhatsappShareButton
                url={url}
                target="_blank"
                title="Salut! Je viens de faire le test d’Orientator dans le cadre de mon orientation post-bac et je suis fin prêt pour Parcoursup! À votre tour sur"
                quote="orientator"
              >
                <WhatsAppIcon round={true} className="socialIcons whatsapp" />
              </WhatsappShareButton>
            </Grid> */}

            <Grid item sm={4}>
              <EmailShareButton
                url={url}
                target="_blank"
                subject="À ton tour de faire ton test Dirasat!"
                body={
                  'Salut! Je viens de faire le test de Dirasat dans le cadre de mon orientation post-bac et je suis fin prêt à prendre une décision! \n\n À ton tour sur:'
                }
                quote="Dirasat"
              >
                <MailOutlineIcon round={true} className="socialIcons mail" />
              </EmailShareButton>
            </Grid>
            <Grid item sm={4}>
              <TwitterShareButton
                url={url}
                target="_blank"
                title="Salut!Je viens de faire le test de Dirasat dans le cadre de mon #orientation #post-bac et je suis fin prêt à prendre une décision! À ton tour sur:"
              >
                <TwitterIcon round={true} className="socialIcons twitter" />
              </TwitterShareButton>
            </Grid>
          </Grid>
        </DialogContent>
        <div className="invitedialogAction"></div>
      </BootstrapDialog>
    </div>
  );
}
