import React, { useEffect } from 'react';
import useState from 'react-usestateref';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import { Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import veryExcited from '../assets/img/dVeryExcited.png';
import arrowleft from '../assets/img/arrow2.png';
import scrollToTop from '../utils/ScrollTop';
import DatePicker from 'react-datepicker';
import ConfirmationPopup from './ConfirmationPopup';
import enGb from 'date-fns/locale/fr';
import { registerLocale } from 'react-datepicker';
import api from '../api';
import InfoIcon from '@mui/icons-material/Info';
import Info from './Info';
import villeList from '../utils/villas';
import useSound from 'use-sound';
import sound from '../assets/sound/sound.wav';

let class_listData = ['1ère AS', '2ème AS', '3ème AS', 'Postbac'];
let wilayasvalue = [
  { name: 'Adrar', code: '01' },
  { name: 'Chlef', code: '02' },
  { name: 'Laghouat', code: '03' },
  { name: 'Oum bouaghi', code: '04' },
  { name: 'Batna', code: '05' },
  { name: 'Béjaia', code: '06' },
  { name: 'Biskra', code: '07' },
  { name: 'Béchar', code: '08' },
  { name: 'Blida', code: '09' },
  { name: 'Bouira', code: '10' },
  { name: 'Tamanrasset', code: '11' },
  { name: 'Tébessa', code: '12' },
  { name: 'Tlemcen', code: '13' },
  { name: 'Tiaret', code: '14' },
  { name: 'Tizi ouzou', code: '15' },
  { name: 'Alger', code: '16' },
  { name: 'Djelfa', code: '17' },
  { name: 'Jijel', code: '18' },
  { name: 'Sétif', code: '19' },
  { name: 'Saida', code: '20' },
  { name: 'Skikda', code: '21' },
  { name: 'Sidi Bel Abbès', code: '22' },
  { name: 'Annaba', code: '23' },
  { name: 'Guelma', code: '24' },
  { name: 'Constantine', code: '25' },
  { name: 'Médéa', code: '26' },
  { name: 'Mostaganem', code: '27' },
  { name: "M'sila", code: '28' },
  { name: 'Mascara', code: '29' },
  { name: 'Ouargla', code: '30' },
  { name: 'Oran', code: '31' },
  { name: 'El Bayadh', code: '32' },
  { name: 'Illizi', code: '33' },
  { name: 'Bordj Bou Arreridj', code: '34' },
  { name: 'Boumerdès', code: '35' },
  { name: 'El Taref', code: '36' },
  { name: 'Tindouf', code: '37' },
  { name: 'Tissemsilt', code: '38' },
  { name: 'El Oued', code: '39' },
  { name: 'Kenchela', code: '40' },
  { name: 'Souk Ahras', code: '41' },
  { name: 'Tipaza', code: '42' },
  { name: 'Mila', code: '43' },
  { name: 'Aïn Defla', code: '44' },
  { name: 'Nâama', code: '45' },
  { name: 'Aïn Temouchent', code: '46' },
  { name: 'Ghardaïa', code: '47' },
  { name: 'Relizane', code: '48' },
  { name: 'Timimoun', code: '49' },
  { name: ' Bordj Badji Mokhtar', code: '50' },
  { name: 'Ouled Djellal', code: '51' },
  { name: 'Béni Abbès', code: '52' },
  { name: 'In Salah', code: '53' },
  { name: ' In Guezzam', code: '54' },
  { name: 'Touggourt', code: '55' },
  { name: 'Djanet', code: '56' },
  { name: 'El Meghaïer', code: '57' },
  { name: ' El Ménia', code: '58' }
];
let budgetllist = ['5 000€ - 7 500€', '5 000€ - 7 500€', 'Plus de 15 000€'];
let criterianData = [
  "J'ai déjà un logement là-bas",
  "J'ai un ou plusieurs membres de ma famille sur qui je peux compter",
  'Cette destination correspond à mon budget',
  'Je pars avec des amis',
  "L'établissement ou le programme que je vise se trouve dans cette destination",
  "J'ai entendu de bons retours la part d'amis et de proches",
  "J'ai entendu de bons retours de la part d;amis et de proches",
  'Autre'
];
let countrylist = [
  'France',
  'United Kingdom',
  'Allemagne',
  'Italie',
  'Russie',
  'Ukraine',
  'Espagne',
  'Belgique',
  'USA',
  'Canada',
  'Turquie',
  'Suisse'
];

let bacseriData = [
  'Mathématiques',
  'Techniques Mathématiques',
  'Sciences Expérimentales',
  'Gestion et Economie',
  'Lettre et Philosophie',
  'Langues Etrangères'
];
let level2data = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20'
];
let timeInterval;

const UserForm = ({ setStep, setActiveStep }) => {
  const [play] = useSound(sound);
  registerLocale('en-gb', enGb);
  // initialize States
  const [formData, setFormData, ref] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    class_list: 'class list',
    phone: '',
    email: '',
    wilaya: 'wilaya',
    Bac_Serie: 'Bac Serie',
    school_city: '',
    school_name: '',
    language: 'language',
    accept_condition: false,
    level1: 'level1',
    score: 'score',
    budget: 'budget',
    whichCountry: 'whichCountry',
    ville: 'ville',
    motiveCriteria: 'motiveCriteria',
    stayAlgeria: false,
    continueStudy: false,
    lastDiploma: '',
    studyYear: ''
  });
  // state for address options list
  const [values, setValues] = useState([]);
  const [cites, setCites] = useState([]);
  const [confirmationOpen, SetconfirmationOpen] = useState(false);
  const [formStep, setformStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [resendloading, setresendLoading] = useState(false);
  const [imgloading, setImgLoading] = useState(true);

  const [timeLeft, setTimeLeft] = useState(30);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = useState(null);

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
    ville,
    motiveCriteria,
    whichCountry,
    stayAlgeria,
    continueStudy,
    lastDiploma,

    studyYear
  } = formData;
  // Get institutes data from API
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const useStyles = makeStyles({
    customTextField: {
      '& input::placeholder': {
        color: 'white',
        '@media (max-width: 780px)': {
          paddingLeft: '-2px'
        }
      }
    },
    customTextFieldestablish: {
      '& input::placeholder': {
        color: 'white',
        fontSize: '13px',
        '@media (max-width: 780px)': {
          fontSize: '12px',
          paddingLeft: '-2px'
        }
      }
    },
    option: {
      background: '#242635 ',
      color: 'white',
      '&:hover': {
        backgroundColor: '#9198a5 !important'
      }
    },
    noOptions: {
      display: `${values.length <= 0 ? 'none' : 'inherit'}`,
      color: 'white'
    },
    select: {
      background: '#242635',
      color: '#9198a5',
      '&:before': {
        borderColor: 'red'
      },
      '&:after': {
        borderColor: 'yellow'
      }
    }
  });
  const classes = useStyles();

  // onChange Function for Input Field
  const onChange = (e) => {
    let Temp_Bac_Serie = e.target.value == 'Postbac' ? 'Bac Serie' : Bac_Serie;

    if (e.target.name === 'accept_condition') {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else
      setFormData({
        ...formData,
        Bac_Serie: Temp_Bac_Serie,
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

    if (first_name == '') {
      return toast.error('Veuillez entrer votre Prénom.');
    }
    if (last_name == '') {
      return toast.error('Veuillez entrer votre nom.');
    }
    if (date_of_birth == '') {
      return toast.error('Veuillez entrer votre date de naissance');
    }
    if (wilaya == 'wilaya') {
      return toast.error('Veuillez sélectionner');
    }
    if (email == '') {
      return toast.error('Veuillez entrer votre e-mail');
    }
    if (phone.length != 10 || phone[0] != 0) {
      return toast.error(
        'Le numéro de téléphone doit être composé de 10 chiffres et commencer par 0'
      );
    }
    if (class_list == 'class list') {
      return toast.error('Veuillez sélectionner la liste des classes');
    }
    if (Bac_Serie == 'Bac Serie' && class_list != 'Postbac') {
      return toast.error('Veullez sélectionner une série de Baccalauréat');
    }
    if (school_city == '') {
      return toast.error('veuillez entrer la ville de votre école');
    }
    if (school_name == '') {
      return toast.error("veuillez saisir le nom de l'école");
    }
    // if (language == 'language') {
    //   return toast.error("veuillez saisir le nom de l'école");
    // }
    if (!accept_condition) {
      return toast.error('Veuillez accepter les termes et conditions');
    }
    setformStep(2);
    return play();
  };

  const handleSubmit3 = async (e, option) => {
    console.log('option', option);
    e.preventDefault();
    // console.log('formdata os ,', formData, option);
    // if (option == 'no') {
    //   setFormData({ ...formData });
    // }

    // if (option == 1) {
    //   setFormData({ ...formData, level1: 'pass' });
    //   if (score == 'score') {
    //     return toast.error('Veuillez sélectionner la note moyenne');
    //   }
    // }
    // if (option == 2) {
    //   setFormData({ ...formData, level1: 'not pass', score: 'score' });
    // }
    // if (option == 5) {
    //   setFormData({
    //     ...formData,
    //     level1: 'want to change',
    //     score: 'score',
    //     stayAlgeria: false
    //   });
    //   if (whichCountry == '') {
    //     return toast.error('Veuillez ajouter un pays');
    //   }
    //   if (budget == '') {
    //     return toast.error('Veuillez ajouter un budget');
    //   }
    // }
    // if (option == 6) {
    //   setFormData({
    //     ...formData,
    //     level1: 'want to change',
    //     score: 'score',
    //     stayAlgeria: true
    //   });
    //   if (budget == '') {
    //     return toast.error('Veuillez ajouter un budget');
    //   }
    // }
    console.log('FormData', formData);
    console.log('FormData2', ref.current);

    setLoading(true);
    setresendLoading(true);
    let res = await api('post', '/users/create', { ...ref.current });
    if (res.status === 200) {
      SetconfirmationOpen(true);
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

  const handleClickinfo = (event, text) => {
    setAnchorEl(event.currentTarget);
    setText(text);
  };
  const getCity = (country) => {
    let selectedVille = villeList.filter((ville) => ville.country === country);
    setCites(selectedVille[0]?.city ? selectedVille[0]?.city : []);
    return;
  };

  useEffect(() => {
    getCity(whichCountry);
    setFormData({ ...formData, ville: 'ville' });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [whichCountry]);
  // console.log('formData', formData);

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
                  {formStep != 6 && formStep != 7 && (
                    <h3 className="formheading">
                      Pour mieux te conseiller, j’ai besoin{' '}
                      <br className="br" />
                      d’en savoir davantage sur toi!
                    </h3>
                  )}
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
                          locale={'en-gb'}
                          dateFormat="dd/MM/yyyy"
                          onChange={onChangeDate}
                          className="inputField"
                          value={date_of_birth}
                          autoComplete="off"
                          placeholderText="Date de naissance"
                          openToDate={new Date('2003/01/01')}
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
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>{'Wilaya'}</em>
                            </MenuItem>
                            {wilayasvalue.map((w, i) => {
                              return (
                                <MenuItem value={w}>
                                  {w.name + ' - ' + w.code}
                                </MenuItem>
                              );
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
                          maxlength={'10'}
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
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>{'Classe'}</em>
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
                            disabled={class_list === 'Postbac'}
                            onChange={onChange}
                            className={classes.select}
                            className="selectforeducation"
                            // onFocus={handleBlurSchools}
                          >
                            <MenuItem
                              value="Bac Serie"
                              disabled
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>{'Série de Baccalauréat'}</em>
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
                          placeholder="Ville de votre école"
                          className="inputField"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          type="text"
                          name="school_name"
                          value={school_name}
                          onChange={onChange}
                          placeholder="Nom de votre école"
                          className="inputField"
                        />
                      </Grid>
                    </Grid>

                    {/* <Grid container spacing={1} className="establishGrid">
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
                            style={{ textAlign: 'left !important' }}
                          >
                            <em>Langue dans laquelle vous souhaitez étudier</em>
                          </MenuItem>
                          {languageIs.map((lang, i) => {
                            return <MenuItem value={lang}>{lang}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                    </Grid> */}
                    <Grid
                      container
                      spacing={1}
                      className="termsandconditionGrid"
                    >
                      <Checkbox
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        style={{ color: 'white' }}
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
                          onClick={() => {
                            setStep(0);
                            play();
                          }}
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
                            {' '}
                            {loading ? (
                              <div className="circulardiv">
                                <CircularProgress size={20} className="" />
                              </div>
                            ) : (
                              'Passer au suivant'
                            )}
                          </b>
                        </button>
                      </Grid>
                    </Grid>
                  </>
                )}
                {formStep == 2 && (
                  <>
                    <Grid
                      container
                      spacing={2}
                      className=""
                      style={{ marginTop: '20px' }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={5}
                        className={`${
                          class_list === 'Postbac' && 'disablGrid'
                        } option gridOptions optionSpan`}
                        onClick={() => {
                          class_list != 'Postbac' && setformStep(3);
                          play();
                        }}
                      >
                        <span className="">
                          J’ai déjà mon baccalauréat mais je n’ai pas encore
                          débuté mes études supérieures
                        </span>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={5}
                        className={`${
                          class_list === 'Postbac' && 'disablGrid'
                        } option gridOptions optionSpan`}
                        onClick={(e) => {
                          class_list != 'Postbac' && handleSubmit3(e, 2);
                          play();
                        }}
                      >
                        <span className="">Je n’ai pas mon baccalauréat</span>
                      </Grid>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={5}
                      className="lastoption option gridOptions"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          continueStudy: true
                        });
                        setformStep(4);
                        play();
                      }}
                    >
                      <span className="" style={{ fontSize: '12px' }}>
                        J’ai déjà débuté mes études supérieures et je veux me
                        réorienter ou poursuivre mes études supérieures dans un
                        autre programme.
                      </span>
                    </Grid>
                    <Grid
                      container
                      spacing={1}
                      className="formbuttonsGrid"
                      style={{ justifyContent: 'center' }}
                    >
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => {
                            setformStep(1);
                            play();
                          }}
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
                {formStep == 3 && (
                  <>
                    <Grid
                      container
                      spacing={1}
                      className=""
                      style={{ justifyContent: 'center' }}
                    >
                      <Grid item xs={12} sm={7} className="inputGrid">
                        <FormControl
                          variant="outlined"
                          className="selectformControl selectformControl2"
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
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>
                                {'Moyenne générale obtenue au Baccalauréat'}
                              </em>
                            </MenuItem>
                            {level2data.map((item, i) => {
                              return <MenuItem value={item}>{item}</MenuItem>;
                            })}
                          </Select>
                          <p
                            style={{
                              textAlign: 'left',
                              margin: '2px 0 0 10px',
                              color: 'white',
                              fontSize: '13px'
                            }}
                          >
                            Arrondir à l’unité inférieure
                          </p>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} className="formbuttonsGrid">
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => {
                            setFormData({ ...formData, score: 'score' });
                            setformStep(2);
                            play();
                          }}
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
                          style={{ opacity: `${loading ? '0.5' : '1'}` }}
                          onClick={(e) => {
                            handleSubmit3(e, 1);
                            play();
                          }}
                        >
                          <b>
                            {' '}
                            {loading ? (
                              <div className="circulardiv">
                                <CircularProgress size={20} className="" />
                              </div>
                            ) : (
                              'Poursuivre'
                            )}
                          </b>
                        </button>
                      </Grid>
                    </Grid>
                  </>
                )}
                {formStep == 4 && (
                  <>
                    <Grid
                      container
                      spacing={2}
                      className=""
                      style={{ marginTop: '20px' }}
                    >
                      <Grid
                        item
                        xs={9}
                        sm={5}
                        className="option"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            level1: 'want to change'
                          });
                          setformStep(5);
                          play();
                        }}
                      >
                        Partir à l'étranger
                      </Grid>
                      <Grid
                        item
                        xs={9}
                        sm={5}
                        className="option"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            stayAlgeria: true
                          });
                          setformStep(6);
                          play();
                        }}
                      >
                        Me réorienter en Algérie
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={2}
                      className="formbuttonsGrid"
                      style={{ justifyContent: 'center' }}
                    >
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              level1: 'level1',
                              continueStudy: false
                            });

                            setformStep(2);
                            play();
                          }}
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
                    <Info
                      anchorEl={anchorEl}
                      setAnchorEl={setAnchorEl}
                      text={text}
                    />
                    <Grid
                      container
                      spacing={2}
                      className=""
                      style={{ justifyContent: 'center' }}
                    >
                      <Grid item xs={12} sm={5} className="inputGrid emailGrid">
                        <FormControl
                          variant="outlined"
                          className="selectformControl selectformControl2"
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="whichCountry"
                            value={whichCountry}
                            defaultValue={whichCountry}
                            onChange={onChange}
                            className={classes.select}
                            className="selectforeducation"
                            // onFocus={handleBlurSchools}
                          >
                            <MenuItem
                              value="whichCountry"
                              disabled
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>{'Quel pays'}</em>
                            </MenuItem>
                            {countrylist.map((item, i) => {
                              return <MenuItem value={item}>{item}</MenuItem>;
                            })}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={5} className="inputGrid">
                        <FormControl
                          variant="outlined"
                          className="selectformControl selectformControl2"
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="ville"
                            value={ville}
                            defaultValue={ville}
                            onChange={onChange}
                            className={classes.select}
                            className="selectforeducation"
                            disabled={whichCountry === 'whichCountry'}
                            // onFocus={handleBlurSchools}
                          >
                            <MenuItem
                              value="ville"
                              disabled
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>Quelle(s) ville(s)</em>
                            </MenuItem>
                            {cites.map((item, i) => {
                              return <MenuItem value={item}>{item}</MenuItem>;
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <FormControl
                          variant="outlined"
                          className="selectformControl selectformControl2"
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="budget"
                            value={budget}
                            defaultValue={budget}
                            onChange={onChange}
                            className={classes.select}
                            className="selectforeducation"
                            // onFocus={handleBlurSchools}
                          >
                            <MenuItem
                              value="budget"
                              disabled
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>{'Quel budget'}</em>
                            </MenuItem>
                            {budgetllist.map((item, i) => {
                              return <MenuItem value={item}>{item}</MenuItem>;
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {' '}
                        <InfoIcon
                          className="infoIcon"
                          onClick={(e) => handleClickinfo(e, 5)}
                        />
                      </div>
                    </Grid>
                    <Grid container spacing={2} className="formbuttonsGrid">
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => {
                            setformStep(4);
                            play();
                          }}
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
                          style={{ opacity: `${loading ? '0.5' : '1'}` }}
                          onClick={(e) => {
                            setformStep(8);
                            play();
                          }}
                        >
                          <b>
                            {' '}
                            {loading ? (
                              <div className="circulardiv">
                                <CircularProgress size={20} className="" />
                              </div>
                            ) : (
                              'Poursuivre'
                            )}
                          </b>
                        </button>
                      </Grid>
                    </Grid>
                  </>
                )}
                {formStep == 6 && (
                  <>
                    <div
                      style={{
                        textAlign: 'center',
                        margin: '5px',
                        width: '100%',
                        fontSize: '13px'
                      }}
                    >
                      <h1>Quel est ton dernier diplôme validé ?</h1>
                    </div>
                    <Grid
                      container
                      spacing={4}
                      className=""
                      style={{ justifyContent: 'center' }}
                    >
                      <Grid
                        item
                        xs={9}
                        sm={5}
                        className="Gridoptiontwo"
                        onClick={(e) => {
                          setFormData((prevState) => ({
                            ...prevState,
                            lastDiploma: 'Baccalauréat'
                          }));
                          handleSubmit3(e, 'no');
                          play();
                        }}
                      >
                        Baccalauréat
                      </Grid>
                      <Grid
                        item
                        xs={9}
                        sm={5}
                        className="Gridoptiontwo"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            lastDiploma: 'Licence'
                          });
                          setformStep(7);
                          play();
                        }}
                      >
                        Licence
                      </Grid>
                      <Grid
                        item
                        xs={9}
                        sm={5}
                        className="Gridoptiontwo"
                        onClick={() => {
                          setFormData({ ...formData, lastDiploma: 'Master' });
                          setformStep(7);
                          play();
                        }}
                      >
                        Master
                      </Grid>
                      <Grid
                        item
                        xs={9}
                        sm={5}
                        className="Gridoptiontwo"
                        onClick={() => {
                          setFormData({ ...formData, lastDiploma: 'Doctorat' });
                          setformStep(7);
                          play();
                        }}
                      >
                        Doctorat
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} className="formbuttonsGrid">
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => setformStep(4)}
                          onClick={() => {
                            setFormData({
                              ...formData,
                              stayAlgeria: false,
                              lastDiploma: ''
                            });
                            setformStep(4);
                            play();
                          }}
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
                {formStep == 7 && (
                  <>
                    <div
                      style={{
                        textAlign: 'center',
                        margin: '5px',
                        width: '100%',
                        fontSize: '13px'
                      }}
                    >
                      <h1>Vous êtes en :</h1>
                    </div>
                    <Grid
                      container
                      spacing={4}
                      className=""
                      style={{ justifyContent: 'center' }}
                    >
                      {lastDiploma == 'Licence' && (
                        <>
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              // setFormData({
                              //   ...formData,
                              //   studyYear: '1ère année d’études'
                              // });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            1ère année d’études
                          </Grid>
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                studyYear: '2ère année d’études'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            2ème année d’études
                          </Grid>
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                studyYear: '3ère année d’études'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            {' '}
                            3ème année d’études
                          </Grid>
                        </>
                      )}

                      {lastDiploma == 'Master' && (
                        <>
                          {' '}
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                studyYear: '4ère année d’études'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            4ème année d’études
                          </Grid>
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                studyYear: '5ère année d’études'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            5ème année d’études
                          </Grid>
                        </>
                      )}
                      {lastDiploma == 'Doctorat' && (
                        <>
                          {' '}
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                studyYear: '6ère année d’études'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            6ème année d’études
                          </Grid>
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                studyYear: '7ère année d’études'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            7ème année d’études
                          </Grid>
                        </>
                      )}
                    </Grid>

                    <Grid container spacing={2} className="formbuttonsGrid">
                      <Grid xs={12} sm={4}>
                        <div
                          size="large"
                          className="formbackbutton"
                          onClick={() => {
                            setformStep(6);
                            play();
                          }}
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
                {formStep == 8 && (
                  <>
                    <Grid
                      container
                      spacing={1}
                      className=""
                      style={{ justifyContent: 'center' }}
                    >
                      <Grid item xs={12} sm={8} className="inputGrid">
                        <FormControl
                          variant="outlined"
                          className="selectformControl selectformControl2"
                        >
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="motiveCriteria"
                            name="motiveCriteria"
                            value={motiveCriteria}
                            defaultValue={motiveCriteria}
                            onChange={onChange}
                            className={classes.select}
                            className="selectforeducation"
                            // onFocus={handleBlurSchools}
                          >
                            <MenuItem
                              value="motiveCriteria"
                              disabled
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>
                                {
                                  'Quel critère a le plus motivé ton choix de pays et de villes?'
                                }
                              </em>
                            </MenuItem>
                            {criterianData.map((item, i) => {
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
                          onClick={() => {
                            setFormData({
                              ...formData,
                              motiveCriteria: 'motiveCriteria'
                            });
                            setformStep(5);
                            play();
                          }}
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
                          style={{ opacity: `${loading ? '0.5' : '1'}` }}
                          onClick={(e) => {
                            handleSubmit3(e, 5);
                            play();
                          }}
                        >
                          <b>
                            {' '}
                            {loading ? (
                              <div className="circulardiv">
                                <CircularProgress size={20} className="" />
                              </div>
                            ) : (
                              'Poursuivre'
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
              handleSubmit={handleSubmit3}
              loadingresend={resendloading}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              timeInterval={timeInterval}
              setresendLoading={setresendLoading}
            />
          </Grid>
        )}{' '}
      </Grid>
    </>
  );
};
export default UserForm;
