import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import { toast } from "react-toastify";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Store, UpdateStore } from "../StoreContext";
import api from "../api";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export default function InviteBox({ open, setOpen }) {
  const url = "orientator-demo.web.app";
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        open={open}
        style={{ backdropFilter: "blur(20px)" }}
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
            <Grid item sm={3}>
              <FacebookShareButton url={url} quote="orientator">
                <FacebookIcon round={true} className="socialIcons" />
              </FacebookShareButton>
            </Grid>
            <Grid item sm={3}>
              <WhatsappShareButton url={url} quote="orientator">
                <WhatsAppIcon round={true} className="socialIcons" />
              </WhatsappShareButton>
            </Grid>

            <Grid item sm={3}>
              <EmailShareButton url={url} quote="orientator">
                <MailOutlineIcon round={true} className="socialIcons" />
              </EmailShareButton>
            </Grid>
            <Grid item sm={3}>
              <TwitterShareButton url={url} quote="orientator">
                <TwitterIcon round={true} className="socialIcons" />
              </TwitterShareButton>
            </Grid>
          </Grid>
        </DialogContent>
        <div className="invitedialogAction"></div>
      </BootstrapDialog>
    </div>
  );
}
