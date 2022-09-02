import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import { Store, UpdateStore } from '../StoreContext';
import api from '../api';
import useSound from 'use-sound';
import sound from '../assets/sound/sound.wav';
import { useTranslation, Trans } from 'react-i18next';

const Contactus = ({}) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const updateStore = UpdateStore();
  const {} = Store();
  const [play] = useSound(sound);

  // initialize States
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    description: ''
  });
  // Destructuring of UserForm State
  const { name, email, message, description } = formData;

  // onChange Function for Input Field
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handleSubmit Function
  const handleSubmit = async (e) => {
    var mailFormat =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(mailFormat)) {
      return toast.error(`${t("s'il vous plaît entrez l'e-mail")}`);
    }
    if (name == '') {
      return toast.error(`${t('Veuillez entrer Prénom et nom')}`);
    }
    if (email == '') {
      return toast.error(`${t('Veuillez entrer votre e-mail')}`);
    }
    if (message == '') {
      return toast.error(`${t('Veuillez entrer Objet de votre message')}`);
    }
    if (description == '') {
      return toast.error(`${t('Veuillez entrer Votre message')}`);
    }

    setLoading(true);
    let res = await api('post', '/users/contact', {
      ...formData
    });
    if (res.status === 200) {
      play();
      toast.success(`${t('Soumis avec succès')}`);
      setFormData({ name: '', email: '', message: '', description: '' });
    }
    setLoading(false);
  };
  return (
    <>
      <div className="responsiveform contactformgrid userForm">
        <div item xs={12} sm={12} className="">
          <h3 className="formheading">{t('Contactez-nous')}</h3>
        </div>
        <div>
          <div className="inputGrid">
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder={t('Prénom et nom')}
              className={`${
                language == 'ar' && 'arabiccontactinputField'
              } contactinputField`}
            />
          </div>
          <div className="inputGrid">
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder={t('E-mail')}
              className={`${
                language == 'ar' && 'arabiccontactinputField'
              } contactinputField`}
            />
          </div>
          <div className="inputGrid">
            <input
              type="text"
              name="message"
              value={message}
              onChange={onChange}
              placeholder={t('Objet de votre message')}
              className={`${
                language == 'ar' && 'arabiccontactinputField'
              } contactinputField`}
            />
          </div>
          <div className="inputGrid">
            <textarea
              type="text"
              cols="70"
              rows="10"
              name="description"
              value={description}
              onChange={onChange}
              placeholder={t('Votre message')}
              className="contactinputFieldtextarea"
              className={`${
                language == 'ar' && 'arabiccontactinputFieldtextarea'
              } contactinputFieldtextarea`}
            />
          </div>
        </div>
        <div className="contactsave">
          <button className="contactsavebtn" onClick={handleSubmit}>
            {loading ? `${t('Chargement en cours')}` : `${t('Envoyer')}`}
          </button>
        </div>
      </div>
    </>
  );
};
export default Contactus;
