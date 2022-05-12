import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Store, UpdateStore } from "../StoreContext";
import Grid from "@material-ui/core/Grid";
import veryExcited from "../assets/img/VeryExcited.png";
import arrowleft from "../assets/img/arrow2.png";
import scrollToTop from "../utils/ScrollTop";
import DatePicker from "react-datepicker";
import ConfirmationPopup from "./ConfirmationPopup";
import enGb from "date-fns/locale/fr";
import { registerLocale } from "react-datepicker";
import api from "../api";

let class_listData = [
  "class list1",
  "class list2",
  "class list3",
  "class list4",
  "class list5",
  "class list6",
  "class list7"
];
let wilayasvalue = [
  { name: "Adrar", code: "01" },
  { name: "Chlef", code: "02" },
  { name: "Laghouat", code: "03" },
  { name: "Oum bouaghi", code: "04" },
  { name: "Batna", code: "05" },
  { name: "Béjaia", code: "06" },
  { name: "Biskra", code: "07" },
  { name: "Béchar", code: "08" },
  { name: "Blida", code: "09" },
  { name: "Bouira", code: "10" },
  { name: "Tamanrasset", code: "11" },
  { name: "Tébessa", code: "12" },
  { name: "Tlemcen", code: "13" },
  { name: "Tiaret", code: "14" },
  { name: "Tizi ouzou", code: "15" },
  { name: "Alger", code: "16" },
  { name: "Djelfa", code: "17" },
  { name: "Jijel", code: "18" },
  { name: "Sétif", code: "19" },
  { name: "Saida", code: "20" },
  { name: "Skikda", code: "21" },
  { name: "Sidi Bel Abbes", code: "22" },
  { name: "Annaba", code: "23" },
  { name: "Guelma", code: "24" },
  { name: "Constantine", code: "25" },
  { name: "Médéa", code: "26" },
  { name: "Mostaganem", code: "27" },
  { name: "M'sila", code: "28" },
  { name: "Mascara", code: "29" },
  { name: "Ouargla", code: "30" },
  { name: "Oran", code: "31" },
  { name: "El Baydh", code: "32" },
  { name: "Illizi", code: "33" },
  { name: "Bordj Bou Arreridj", code: "34" },
  { name: "Boumerdès", code: "35" },
  { name: "El Taref", code: "36" },
  { name: "Tindouf", code: "37" },
  { name: "Tissemsilt", code: "38" },
  { name: "MédéEl Oueda", code: "39" },
  { name: "Khenchla", code: "40" },
  { name: "Souk Ahrass", code: "41" },
  { name: "Tipaza", code: "42" },
  { name: "Mila", code: "43" },
  { name: "Aïn Defla", code: "44" },
  { name: "Nâama", code: "45" },
  { name: "Aïn Temouchent", code: "46" },
  { name: "Ghardaïa", code: "47" },
  { name: "Relizane 49-Timimoun", code: "48" },
  { name: " Bordj Badji Mokhtar", code: "50" },
  { name: "Ouled Djellal", code: "51" },
  { name: "Béni Abbès", code: "52" },
  { name: "In Salah", code: "53" },
  { name: " In Guezzam", code: "54" },
  { name: "Touggourt", code: "55" },
  { name: "Djanet", code: "56" },
  { name: "El Meghaïer", code: "57" },
  { name: " El Ménia", code: "58" }
];
let bacseriData = [
  "Mathématiques",
  " Techniques Mathématiques",
  "Sciences Expérimentales",
  "Gestion et Economie",
  "Lettre et Philosophie",
  "Langues Etrangères"
];
let languageIs = ["French", "Arabic", "Both"];
let level1data = ["Pass the test", "Not Pass the test", "Want change School"];
let level2data = ["1", "2", "3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
let level3data = ["Go to Abroad", "Stay in Algeria"];
let timeInterval;

const UserForm = ({ setStep, setActiveStep }) => {
  registerLocale("en-gb", enGb);
  // initialize ContextStore
  const updateStore = UpdateStore();
  const {} = Store();
  // initialize States
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    class_list: "class list",
    phone: "",
    email: "",
    wilaya: "wilaya",
    Bac_Serie: "Bac Serie",
    school_city: "",
    school_name: "",
    language: "language",
    accept_condition: false,
    level1: "level1",
    score: "score",
    budget:"",
    whichCountry:"",
    stayAlgeria:false
  });
  // state for address options list
  const [values, setValues] = useState([]);
  const [confirmationOpen, SetconfirmationOpen] = useState(false);
  const [formStep, setformStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [resendloading, setresendLoading] = useState(false);
  const [imgloading, setImgLoading] = useState(true);

  const [otpbyemail, setOtpByemail] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  // Destructuring of UserForm State
  const {
    first_name,
    last_name,
    date_of_birth,
    wilaya,
    Bac_Serie,
    school_city,
    school_name,
    language,
    class_list,
    phone,
    email,
    accept_condition,
    country,
    level1,
    score,
    budget,
    whichCountry,
    stayAlgeria
  } = formData;
  // Get institutes data from API
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const useStyles = makeStyles({
    customTextField: {
      "& input::placeholder": {
        color: "white",
        "@media (max-width: 780px)": {
          paddingLeft: "-2px"
        }
      }
    },
    customTextFieldestablish: {
      "& input::placeholder": {
        color: "white",
        fontSize: "13px",
        "@media (max-width: 780px)": {
          fontSize: "12px",
          paddingLeft: "-2px"
        }
      }
    },
    option: {
      background: "#242635 ",
      color: "white",
      "&:hover": {
        backgroundColor: "#9198a5 !important"
      }
    },
    noOptions: {
      display: `${values.length <= 0 ? "none" : "inherit"}`,
      color: "white"
    },
    select: {
      background: "#242635",
      color: "#9198a5",
      "&:before": {
        borderColor: "red"
      },
      "&:after": {
        borderColor: "yellow"
      }
    }
  });
  const classes = useStyles();

  // onChange Function for Input Field
  const onChange = (e) => {
    if (e.target.name === "accept_condition") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
  };
  // function for Date select
  const onChangeDate = (date) => {
    setFormData({ ...formData, date_of_birth: date });
  };

  // handleSubmit Function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (first_name == "") {
      return toast.error("Veuillez entrer votre Prénom.");
    }
    if (last_name == "") {
      return toast.error("Veuillez entrer votre nom.");
    }
    if (date_of_birth == "") {
      return toast.error("Veuillez entrer votre date de naissance");
    }
    if (wilaya == "wilaya") {
      return toast.error("Please Select wilya");
    }
    if (email == "") {
      return toast.error("Veuillez entrer votre e-mail");
    }
    if (phone.length != 10 || phone[0] != 0) {
      return toast.error(
        "Le numéro de téléphone doit être composé de 10 chiffres et commencer par 0"
      );
    }
    if (class_list == "class list") {
      return toast.error("Please Select class list");
    }
    if (Bac_Serie == "Bac Serie") {
      return toast.error("Please Select class list");
    }
    if (school_city == "") {
      return toast.error("please enter city of your school");
    }
    if (school_name == "") {
      return toast.error("please enter chool_name");
    }
    if (language == "language") {
      return toast.error("please select language");
    }

    if (!accept_condition) {
      return toast.error("Veuillez accepter les termes et conditions");
    }
    // console.log("onsubmit", formData);
    setformStep(2);
  };
  const handleSubmit3 = async (e,option) => {
    e.preventDefault();
    console.log("formdata os ,",formData,option)
    let newFormData=''
    if(option==1){
      newFormData={...formData,level1:"pass",}
      if (score == "score") {
      return toast.error("Please select score");
    }
    } 
    if(option==2){
      newFormData={...formData,level1:"not pass",score:"score"}
      
    }
    if(option==5){
      newFormData={...formData,level1:"want to change",score:"score",stayAlgeria:false}
       if (whichCountry == "") {
      return toast.error("Please add country ");
    }
      if (budget == "") {
      return toast.error("Please add budget ");
    }
      
    }
    if(option==6){
      newFormData={...formData,level1:"want to change",score:"score",stayAlgeria:true}
            if (budget == "") {
      return toast.error("Please add budget ");
    }
      
    }
    console.log("newFormData",newFormData)
    
    setLoading(true);
    setresendLoading(true);
    let res = await api("post", "/users/create", { ...newFormData});
    if (res.status === 200) {
      SetconfirmationOpen(true);
      toast.success("OTP envoyé");
    }
    setLoading(false);
    timeInterval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(timeInterval);
      setTimeLeft(30);
      setresendLoading(false);
    }, 30000);
  
  };

  return (
    <>
      <Grid container spacing={2} className="mainuserform">
        {imgloading && (
          <div className="formloading">
            <CircularProgress color="white" size="4rem" />
          </div>
        )}
        <Grid item xs={12} sm={4} className="dummyGrid">
          <img
            src={veryExcited}
            className="veryExitedImg "
            onLoad={() => setImgLoading(false)}
            alt="exited"
          />
        </Grid>
        {!imgloading && (
          <Grid item xs={12} sm={8} className="responsiveform">
            <form
              autoComplete="off"
              // onSubmit={handleSubmit}
              className="userForm"
            >
              <Grid container className="userformgrid">
                <Grid item xs={12} sm={12} className="">
                  <h3 className="formheading">
                    Pour mieux te conseiller, j’ai besoin <br className="br" />
                    d’en savoir davantage sur toi!
                  </h3>
                </Grid>
                {formStep == 1 && (
                  <>
                    <Grid container spacing={2} className="inputgrid1">
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          name="first_name"
                          placeholder="Prénom"
                          className="inputField"
                          value={first_name}
                          onChange={onChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          name="last_name"
                          value={last_name}
                          onChange={onChange}
                          placeholder="Nom"
                          className="inputField"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} className="">
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <DatePicker
                          selected={date_of_birth}
                          // locale={selectedDateLang}
                          // locale={locale}
                          locale={"en-gb"}
                          dateFormat="dd/MM/yyyy"
                          onChange={onChangeDate}
                          className="inputField"
                          value={date_of_birth}
                          autoComplete="off"
                          placeholderText="Date de naissance"
                          openToDate={new Date("2003/01/01")}
                          dropdownMode="scroll"
                          // dropdownMode="select"
                          scrollableYearDropdown
                          showYearDropdown
                          yearDropdownItemNumber={18}
                          // scrollableYearDropdown
                          showMonthDropdown
                          adjustDateOnChange
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        className="inputGrid wilayaGrid"
                      >
                        <FormControl
                          variant="outlined"
                          className="selectformControl"
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="wilaya"
                            name="wilaya"
                            value={wilaya}
                            defaultValue={wilaya}
                            onChange={onChange}
                            className={classes.select}
                            className="selectforeducation"
                          >
                            <MenuItem
                              value="wilaya"
                              disabled
                              style={{ textAlign: "left !important" }}
                            >
                              <em>{"Wilaya"}</em>
                            </MenuItem>
                            {wilayasvalue.map((w, i) => {
                              return <MenuItem value={w}>{w.name}</MenuItem>;
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} className="">
                      <Grid item xs={12} sm={6} className="inputGrid emailGrid">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={onChange}
                          placeholder="E-mail"
                          className="inputField"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          type="tel"
                          name="phone"
                          value={phone}
                          onChange={onChange}
                          maxlength={"10"}
                          placeholder="Numéro de téléphone"
                          className="inputField"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} className="">
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <FormControl
                          variant="outlined"
                          className="selectformControl"
                        >
                          {/* <InputLabel id="demo-simple-select-outlined-label">
                    {education_level ? "clsse" : " classe "}
                  </InputLabel> */}
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="class_list"
                            value={class_list}
                            defaultValue={class_list}
                            onChange={onChange}
                            className={classes.select}
                            className="selectforeducation"
                          >
                            <MenuItem
                              value="class list"
                              disabled
                              style={{ textAlign: "left !important" }}
                            >
                              <em>{"Class list"}</em>
                            </MenuItem>
                            {class_listData.map((list, i) => {
                              return <MenuItem value={list}>{list}</MenuItem>;
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <FormControl
                          variant="outlined"
                          className="selectformControl bacserieFormControl"
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="Bac_Serie"
                            value={Bac_Serie}
                            defaultValue={Bac_Serie}
                            onChange={onChange}
                            className={classes.select}
                            className="selectforeducation"
                            // onFocus={handleBlurSchools}
                          >
                            <MenuItem
                              value="Bac Serie"
                              disabled
                              style={{ textAlign: "left !important" }}
                            >
                              <em>{"Bac Serie"}</em>
                            </MenuItem>
                            {bacseriData.map((item, i) => {
                              return <MenuItem value={item}>{item}</MenuItem>;
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} className="">
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          type="text"
                          name="school_city"
                          value={school_city}
                          onChange={onChange}
                          placeholder="City of your school"
                          className="inputField"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          type="text"
                          name="school_name"
                          value={school_name}
                          onChange={onChange}
                          placeholder="Name of your school"
                          className="inputField"
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={1} className="establishGrid">
                      <FormControl
                        variant="outlined"
                        className="selectformControlforlanguage"
                      >
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          name="language"
                          value={language}
                          defaultValue={language}
                          onChange={onChange}
                          className={classes.select}
                          className="selectforeducation"
                        >
                          <MenuItem
                            value="language"
                            disabled
                            style={{ textAlign: "left !important" }}
                          >
                            <em>Language</em>
                          </MenuItem>
                          {languageIs.map((lang, i) => {
                            return <MenuItem value={lang}>{lang}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      container
                      spacing={1}
                      className="termsandconditionGrid"
                    >
                      <Checkbox
                        inputProps={{ "aria-label": "secondary checkbox" }}
                        style={{ color: "white" }}
                        name="accept_condition"
                        value={accept_condition}
                        checked={accept_condition}
                        onChange={onChange}
                      />
                      <span className="termsandcondition">
                        J’accepte les termes et les conditions
                      </span>
                    </Grid>

                    <Grid container spacing={2} className="formbuttonsGrid">
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => setStep(0)}
                        >
                          <img
                            src={arrowleft}
                            className="arrowleft"
                            alt="arrow"
                          />
                          <b> Retour</b>
                        </div>
                      </Grid>

                      <Grid xs={12} sm={4}></Grid>

                      <Grid xs={12} sm={4}>
                        <button
                          variant="contained"
                          className="formSubmitButton"
                          size="large"
                          type="submit"
                          // disabled={loading}
                          // style={{ opacity: `${loading ? "0.5" : "1"}` }}
                          onClick={handleSubmit}
                        >
                          <b>
                            {" "}
                            {loading ? (
                              <div className="circulardiv">
                                <CircularProgress size={20} className="" />
                              </div>
                            ) : (
                              "Passer au suivant"
                            )}
                          </b>
                        </button>
                      </Grid>
                    </Grid>
                  </>
                )}
                {formStep == 2 && (
                  <>
                    <Grid container spacing={2} className="" style={{marginTop:"20px"}}>
                      <Grid
                        item
                        xs={12}
                        sm={5}
                        className="option"
                        onClick={()=>setformStep(3)}
                      >
                        Pass the test
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={5}
                        className="option"
                        onClick={(e)=>handleSubmit3(e,2)}
                        
                      >
                        Not pass the test
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={5}
                        className="option"
                        onClick={()=>setformStep(4)}
                      >
                        Want to change school
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} className="formbuttonsGrid" style={{justifyContent:"center"}}>
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => setformStep(1)}
                        >
                          <img
                            src={arrowleft}
                            className="arrowleft"
                            alt="arrow"
                          />
                          <b> Retour</b>
                        </div>
                      </Grid></Grid>
                  </>
                )}
                {formStep == 3 && (
                  <>
                    <Grid container spacing={1} className="" style={{justifyContent:"center"}}>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <FormControl
                          variant="outlined"
                          className="selectformControl"
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="score"
                            name="score"
                            value={score}
                            defaultValue={score}
                            onChange={onChange}
                            className={classes.select}
                            className="selectforeducation"
                            // onFocus={handleBlurSchools}
                          >
                            <MenuItem
                              value="score"
                              disabled
                              style={{ textAlign: "left !important" }}
                            >
                              <em>{"score"}</em>
                            </MenuItem>
                            {level2data.map((item, i) => {
                              return <MenuItem value={item}>{item}</MenuItem>;
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      
                    </Grid>
                    <Grid container spacing={2} className="formbuttonsGrid">
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => setformStep(2)}
                        >
                          <img
                            src={arrowleft}
                            className="arrowleft"
                            alt="arrow"
                          />
                          <b> Retour</b>
                        </div>
                      </Grid>

                      <Grid xs={12} sm={4}></Grid>

                      <Grid xs={12} sm={4}>
                        <button
                          variant="contained"
                          className="formSubmitButton"
                          size="large"
                          type="submit"
                          disabled={loading}
                          style={{ opacity: `${loading ? "0.5" : "1"}` }}
                          onClick={(e)=>handleSubmit3(e,1)}
                        >
                          <b>
                            {" "}
                            {loading ? (
                              <div className="circulardiv">
                                <CircularProgress size={20} className="" />
                              </div>
                            ) : (
                              "Commencer le test"
                            )}
                          </b>
                        </button>
                      </Grid>
                    </Grid>
                  </>
                )}
                        {formStep == 4 && (
                  <>
                    
                       <Grid container spacing={2} className="" style={{marginTop:"20px"}}>
                      <Grid
                        item
                        xs={12}
                        sm={5}
                        className="option"
                        onClick={()=>setformStep(5)}
                      >
                        Go to Abroad
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={5}
                        className="option"
                        onClick={()=>setformStep(6)}
                        
                      >
                        Stay in Algeria
                      </Grid>
                     
                    </Grid>
                    <Grid container spacing={2} className="formbuttonsGrid" style={{justifyContent:"center"}}>
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => setformStep(2)}
                        >
                          <img
                            src={arrowleft}
                            className="arrowleft"
                            alt="arrow"
                          />
                          <b> Retour</b>
                        </div>
                      </Grid>

                      

                   
                    </Grid>
                  </>
                )}
                       {formStep == 5 && (
                  <>
                    <Grid container spacing={1} className="" style={{justifyContent:"center"}}>
                  
                     
                      <Grid item xs={12} sm={6} className="inputGrid emailGrid">
                        <input
                          type="whichCountry"
                          name="whichCountry"
                          value={whichCountry}
                          onChange={onChange}
                          placeholder="Which country"
                          className="inputField"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          type="text"
                          name="budget"
                          value={budget}
                          onChange={onChange}
                          
                          placeholder="budget"
                          className="inputField"
                        />
                      </Grid>
                    
                    
                     
                    </Grid>
                    <Grid container spacing={2} className="formbuttonsGrid">
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => setformStep(4)}
                        >
                          <img
                            src={arrowleft}
                            className="arrowleft"
                            alt="arrow"
                          />
                          <b> Retour</b>
                        </div>
                      </Grid>

                      <Grid xs={12} sm={4}></Grid>

                      <Grid xs={12} sm={4}>
                        <button
                          variant="contained"
                          className="formSubmitButton"
                          size="large"
                          type="submit"
                          disabled={loading}
                          style={{ opacity: `${loading ? "0.5" : "1"}` }}
                          onClick={(e)=>handleSubmit3(e,5)}
                        >
                          <b>
                            {" "}
                            {loading ? (
                              <div className="circulardiv">
                                <CircularProgress size={20} className="" />
                              </div>
                            ) : (
                              "Commencer le test"
                            )}
                          </b>
                        </button>
                      </Grid>
                    </Grid>
                  </>
                )}
                      {formStep == 6 && (
                  <>
                    <Grid container spacing={1} className="" style={{justifyContent:"center"}}>
                  
                     
                   
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          type="text"
                          name="budget"
                          value={budget}
                          onChange={onChange}
                          
                          placeholder="budget"
                          className="inputField"
                        />
                      </Grid>
                    
                    
                     
                    </Grid>
                    <Grid container spacing={2} className="formbuttonsGrid" >
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => setformStep(4)}
                        >
                          <img
                            src={arrowleft}
                            className="arrowleft"
                            alt="arrow"
                          />
                          <b> Retour</b>
                        </div>
                      </Grid>

                      <Grid xs={12} sm={4}></Grid>

                      <Grid xs={12} sm={4}>
                        <button
                          variant="contained"
                          className="formSubmitButton"
                          size="large"
                          type="submit"
                          disabled={loading}
                          style={{ opacity: `${loading ? "0.5" : "1"}` }}
                          onClick={(e)=>handleSubmit3(e,6)}
                        >
                          <b>
                            {" "}
                            {loading ? (
                              <div className="circulardiv">
                                <CircularProgress size={20} className="" />
                              </div>
                            ) : (
                              "Commencer le test"
                            )}
                          </b>
                        </button>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>
            </form>
            <ConfirmationPopup
              confirmationOpen={confirmationOpen}
              SetconfirmationOpen={SetconfirmationOpen}
              setStep={setStep}
              setActiveStep={setActiveStep}
              otpbyemail={otpbyemail}
              handleSubmit={handleSubmit3}
              loadingresend={resendloading}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              timeInterval={timeInterval}
              setresendLoading={setresendLoading}
            />
          </Grid>
        )}{" "}
      </Grid>
    </>
  );
};
export default UserForm;
