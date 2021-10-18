import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import { toast } from "react-toastify";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { Checkbox } from "@material-ui/core";
import close from "../assets/icons/close.png";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Store, UpdateStore } from "../StoreContext";
import api from "../api";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from "react-share";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
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

  const { user } = Store();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    inviteBy: user?.email,
    firstName: user?.first_name,
    lastName: user?.last_name,
  });
  // Destructuring of UserForm State
  const { phone, email, advice, contact } = formData;
  // onChange Function for Input Field
  const onChange = (e) => {
    if (e.target.name === "advice" || e.target.name === "contact") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = async () => {
    var mailFormat =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(mailFormat)) {
      return toast.error("email invalide");
    }
    if (!email) {
      return toast.error("s'il vous plaît entrez l'e-mail");
    }

    setLoading(true);
    let res = await api("post", "/users/invite", {
      ...formData,
    });
    if (res) {
      toast.success("invitation envoyée avec succès");
      setFormData({ email: "" });
      setLoading(false);
      setOpen(false);
    }
  };
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
          <Grid container spacing={3} className="invitedialoginputGrid">
            <Grid item sm={3}>
              <FacebookShareButton url={url} quote="orientator">
                <FacebookIcon round={true} className="socialIcons" />
              </FacebookShareButton>
            </Grid>
            <Grid item sm={3}>
              <TwitterShareButton url={url} quote="orientator">
                <TwitterIcon round={true} className="socialIcons" />
              </TwitterShareButton>
            </Grid>
            <Grid item sm={3}>
              <LinkedinShareButton url={url} quote="orientator">
                <LinkedInIcon round={true} className="socialIcons" />
              </LinkedinShareButton>
            </Grid>
            <Grid item sm={3}>
              <EmailShareButton url={url} quote="orientator">
                <MailOutlineIcon round={true} className="socialIcons" />
              </EmailShareButton>
            </Grid>
          </Grid>
        </DialogContent>
        <div className="invitedialogAction"></div>
      </BootstrapDialog>
    </div>
  );
}
