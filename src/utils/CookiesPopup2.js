import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Store, UpdateStore } from '../StoreContext';
import { useTranslation, Trans } from 'react-i18next';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
export default function CookiesPopup({ open, setOpen, setData }) {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const { user } = Store();

  const items = [
    // { text: "Fonctionnalités basiques de navigation requises", accept:false,refuse:false },
    {
      text: 'Fonctionnalités liées aux réseaux sociaux',
      accept: true,
      refuse: false
    },
    { text: "Mesure d'audience", accept: true, refuse: false },
    {
      text: "Fonctionnalités liées à l'amélioration de votre expérience",
      accept: true,
      refuse: false
    },
    {
      text: 'Stocker et/ou accéder à des informations sur un terminal',
      accept: true,
      refuse: false
    },
    {
      text: 'Personnalisation du contenu éditorial et mesure de la performance',
      accept: true,
      refuse: false
    },
    {
      text: 'Personnalisation des publicités et mesure de la performance',
      accept: true,
      refuse: false
    },
    {
      text: 'Développer et améliorer les produits',
      accept: true,
      refuse: false
    },
    {
      text: 'Utiliser des données de géolocalisation précises',
      accept: true,
      refuse: false
    },
    {
      text: 'Analyser activement les caractéristiques du terminal pour l’identification',
      accept: true,
      refuse: false
    }
  ];
  const handleClose = () => {
    setOpen(false);
  };
  const handleRefuse = (i) => {
    setOpen(false);
  };
  const handleAcceptAll = () => {
    setData(items);
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
          className="InvitecloseButton"
          aria-label="close"
          onClick={handleClose}
        >
          <HorizontalRuleIcon fontSize="large" />
        </IconButton>
        <DialogContent className="modalcontent">
          <p style={{ margin: '0' }}>
            {t(
              'Vous avez choisi de refuser les cookies , notamment ceux nécessaires au bon déroulement de votre expérience avec Dirasat. Vous ne pourrez pas avoir accès au test, êtes-vous sûr(e) de votre choix?'
            )}
          </p>
        </DialogContent>
        <div className="invitedialogAction">
          <div>
            <button
              className={`${'secondpopupbutton '}`}
              style={{ margin: '10px' }}
              onClick={() => handleAcceptAll()}
            >
              {t("Je change d'avis et j'accepte tous les cookies.")}{' '}
            </button>
            <button
              className={`${'secondpopupbutton '}`}
              style={{ margin: '10px' }}
              onClick={handleRefuse}
            >
              {t('Je conserve mes choix')}
            </button>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}
