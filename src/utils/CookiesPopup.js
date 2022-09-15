import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Store, UpdateStore } from '../StoreContext';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
export default function CookiesPopup({
  open,
  setOpen,
  setOpenCookieePopup2,
  data,
  setData
}) {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const { user } = Store();

  const handleClose = () => {
    setOpen(false);
  };
  const handleRefuse = (i) => {
    let newitems = data.map((item) =>
      item.text === i.text ? { ...item, refuse: true, accept: false } : item
    );
    setData(newitems);
  };
  const handleAccept = (i) => {
    let newit = data.map((item) =>
      item.text === i.text ? { ...item, refuse: false, accept: true } : item
    );
    setData(newit);
  };
  const handleSavepopup = () => {
    let refuse = false;
    let accept = true;
    data.map((item) => {
      if (item.refuse) {
        refuse = true;
      }
      if (!item.accept) {
        accept = false;
      }
    });
    if (refuse) {
      return setOpenCookieePopup2(true);
    }
    if (accept) {
      localStorage.setItem('cookies', true);
      setOpen(false);
    }
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
          {/* <img src={close} className="closeimg" /> */}
        </IconButton>
        <DialogContent
          className={`${
            language == 'ar' && 'arabicmodalcontentcookie'
          } modalcontentcookie`}
        >
          <p style={{ margin: '0' }} className="toptextpopup">
            {t(
              'Dirasat et ses partenaires sélectionnés traitent des données personnelles en lien avec votre navigation sur nos contenus pour les finalités listées ci-dessous.'
            )}
          </p>
          <p style={{ margin: '0' }} className="toptextpopup">
            {t(
              'Pour en savoir plus sur nos pratiques en matière de protection des données personnelles et la façon dont nous utilisons vos données, vous pouvez consulter'
            )}
            <Link to="/confidentialite" target="_blank" className="cookieeLink">
              {' '}
              {t('politique de confidentialité')}
            </Link>
          </p>
        </DialogContent>
        <div
          className={`${language == 'ar' && 'directionrtl'} invitedialogAction`}
        >
          <div className="cookieeDiv">
            <li className="popupli">
              {t('Fonctionnalités basiques de navigation requises')}
            </li>
            <div>
              <button className={`${'rejectbtndisabled'}`} disabled>
                {t('Refuser')}
              </button>
              <button className={`${'acceptbtnActive'}`}>
                {t('Accepter')}
              </button>
            </div>
          </div>
          {data.map((item, i) => (
            <div className="cookieeDiv" key={i}>
              <li className="popupli">{t(item.text)}</li>
              <div>
                <button
                  className={`${item.refuse ? 'rejectbtnActive' : 'rejectbtn'}`}
                  onClick={() => handleRefuse(item)}
                >
                  {t('Refuser')}
                </button>
                <button
                  className={`${item.accept ? 'acceptbtnActive' : 'acceptbtn'}`}
                  onClick={() => handleAccept(item)}
                >
                  {t('Accepter')}
                </button>
              </div>
            </div>
          ))}
          <div>
            <p className="popuptext2">
              {t(
                'Ce site et ses partenaires pourront également réaliser les traitements de données suivants : Assurer la sécurité, Prévenir la fraude et débogguer, diffuser techniquement les publicités ou le contenu, mettre en correspondance et combiner des sources de données hors ligne, recevoir et utiliser des caractéristiques d’identification d’appareil envoyées automatiquement, et relier différents terminaux.'
              )}
            </p>
            <div
              className={`${
                language == 'ar' && 'arabicpopupbtndiv'
              } popupbtndiv`}
            >
              {' '}
              <button className="popupsavebtn" onClick={handleSavepopup}>
                {t('Enregistrer')}
              </button>
            </div>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}
