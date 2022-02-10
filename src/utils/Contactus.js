import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import { Store, UpdateStore } from "../StoreContext";
import api from "../api";
const Contactus = () => {
  const updateStore = UpdateStore();
  const {} = Store();

  // initialize States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    description: "",
  });
  // Destructuring of UserForm State
  const { name, email, message, description } = formData;

  // onChange Function for Input Field
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handleSubmit Function
  const handleSubmit = async (e) => {
    console.log("formData", formData);
    // setLoading(true);
    // let res = await api("post", "/users/create", {
    //   ...formData,
    //   address: addressValue,
    // });
    // if (res.status === 200) {
    //   SetconfirmationOpen(true);
    // updateStore({
    //   questions: res?.data?.questions,
    //   answers: res?.data?.answers,
    //   user: res?.data?.user,
    // });
    // setStep(2);
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }
    // setLoading(false);
  };
  return (
    <>
      <div className="responsiveform contactformgrid userForm">
        <div item xs={12} sm={12} className="">
          <h3 className="formheading">Contactez-nous</h3>
        </div>
        <div>
          <div className="inputGrid">
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Prénom et nom"
              className="contactinputField"
            />
          </div>
          <div className="inputGrid">
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="E-mail"
              className="contactinputField"
            />
          </div>
          <div className="inputGrid">
            <input
              type="text"
              name="message"
              value={message}
              onChange={onChange}
              placeholder="Objet de votre message"
              className="contactinputField"
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
              placeholder="Votre message"
              className="contactinputFieldtextarea"
            />
          </div>
        </div>
        <div className="contactsave">
          <button className="contactsavebtn" onClick={handleSubmit}>
            Envoyer
          </button>
        </div>
      </div>
    </>
  );
};
export default Contactus;
