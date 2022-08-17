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
import { useTranslation, Trans } from 'react-i18next';

let class_listData = ['1ère AS', '2ème AS', '3ème AS', 'Postbac'];
// arabic translate function

let yas;
function arabicValue(txt) {
  yas = txt.value;

  yas = yas.replace(/`/g, 'ذ');
  yas = yas.replace(/0/g, '۰');
  yas = yas.replace(/1/g, '۱');
  yas = yas.replace(/2/g, '۲');
  yas = yas.replace(/3/g, '۳');
  yas = yas.replace(/4/g, '٤');
  yas = yas.replace(/5/g, '۵');
  yas = yas.replace(/6/g, '٦');
  yas = yas.replace(/7/g, '۷');
  yas = yas.replace(/8/g, '۸');
  yas = yas.replace(/9/g, '۹');
  yas = yas.replace(/0/g, '۰');
  yas = yas.replace(/q/g, 'ض');
  yas = yas.replace(/w/g, 'ص');
  yas = yas.replace(/e/g, 'ث');
  yas = yas.replace(/r/g, 'ق');
  yas = yas.replace(/t/g, 'ف');
  yas = yas.replace(/y/g, 'غ');
  yas = yas.replace(/u/g, 'ع');
  yas = yas.replace(/i/g, 'ه');
  yas = yas.replace(/o/g, 'خ');
  yas = yas.replace(/p/g, 'ح');
  yas = yas.replace(/\[/g, 'ج');
  yas = yas.replace(/\]/g, 'د');
  yas = yas.replace(/a/g, 'ش');
  yas = yas.replace(/s/g, 'س');
  yas = yas.replace(/d/g, 'ي');
  yas = yas.replace(/f/g, 'ب');
  yas = yas.replace(/g/g, 'ل');
  yas = yas.replace(/h/g, 'ا');
  yas = yas.replace(/j/g, 'ت');
  yas = yas.replace(/k/g, 'ن');
  yas = yas.replace(/l/g, 'م');
  yas = yas.replace(/\;/g, 'ك');
  yas = yas.replace(/\'/g, 'ط');
  yas = yas.replace(/z/g, 'ئ');
  yas = yas.replace(/x/g, 'ء');
  yas = yas.replace(/c/g, 'ؤ');
  yas = yas.replace(/v/g, 'ر');
  yas = yas.replace(/b/g, 'لا');
  yas = yas.replace(/n/g, 'ى');
  yas = yas.replace(/m/g, 'ة');
  yas = yas.replace(/\,/g, 'و');
  yas = yas.replace(/\./g, 'ز');
  yas = yas.replace(/\//g, 'ظ');
  yas = yas.replace(/~/g, ' ّ');
  yas = yas.replace(/Q/g, 'َ');
  yas = yas.replace(/W/g, 'ً');
  yas = yas.replace(/E/g, 'ُ');
  yas = yas.replace(/R/g, 'ٌ');
  yas = yas.replace(/T/g, 'لإ');
  yas = yas.replace(/Y/g, 'إ');
  yas = yas.replace(/U/g, '‘');
  yas = yas.replace(/I/g, '÷');
  yas = yas.replace(/O/g, '×');
  yas = yas.replace(/P/g, '؛');
  yas = yas.replace(/A/g, 'ِ');
  yas = yas.replace(/S/g, 'ٍ');
  yas = yas.replace(/G/g, 'لأ');
  yas = yas.replace(/H/g, 'أ');
  yas = yas.replace(/J/g, 'ـ');
  yas = yas.replace(/K/g, '،');
  yas = yas.replace(/L/g, '/');
  yas = yas.replace(/Z/g, '~');
  yas = yas.replace(/X/g, 'ْ');
  yas = yas.replace(/B/g, 'لآ');
  yas = yas.replace(/N/g, 'آ');
  yas = yas.replace(/M/g, '’');
  yas = yas.replace(/\?/g, '؟');
  txt.value = yas;
}
let wilayasvalue = [
  { name: 'Adrar', code: '01' },
  { name: 'Chlef', code: '02' },
  { name: 'Laghouat', code: '03' },
  { name: 'Oum Bouaghi', code: '04' },
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
  { name: 'Bordj Badji Mokhtar', code: '50' },
  { name: 'Ouled Djellal', code: '51' },
  { name: 'Béni Abbès', code: '52' },
  { name: 'In Salah', code: '53' },
  { name: 'In Guezzam', code: '54' },
  { name: 'Touggourt', code: '55' },
  { name: 'Djanet', code: '56' },
  { name: 'El Meghaïer', code: '57' },
  { name: 'El Ménia', code: '58' }
];
let budgetllist = ['5 000€ - 7 500€', '5 000€ - 7 500€', 'Plus de 15 000€'];
let criterianData = [
  "J'ai déjà un logement là-bas",
  "J'ai un ou plusieurs membres de ma famille sur qui je peux compter",
  'Cette destination correspond à mon budget',
  'Je pars avec des amis',
  "L'établissement ou le programme que je vise se trouve dans cette destination",
  "J'ai entendu de bons retours la part d'amis et de proches",
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
  const { t, i18n } = useTranslation();
  const { language } = i18n;
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
    languageis: 'languagee',
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
    languageis,
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
    },
    dropdownSelect: {
      textAlign: 'right !important'
    },
    menuitem: {
      direction: `${language == 'ar' ? 'rtl' : 'ltr'}`
    }
  });
  const classes = useStyles();

  // onChange Function for Input Field
  const onChange = (e) => {
    console.log('onChange,e.target.value', e.target.value);

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
  // onChange Function for Input Field
  const handleInputChange = (e) => {
    console.log('t', language);
    if (typeof e.target.value == 'string' && language == 'ar') {
      // arabicValue(e.target);
    }
    console.log(' handleInputChange,e.target.value', e.target.value);

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
    console.log('FormData', formData);
    console.log('FormData2', ref.current);

    setLoading(true);
    setresendLoading(true);
    play();
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
  const handleSubmitStep5 = (e) => {
    e.preventDefault();

    if (whichCountry === 'whichCountry') {
      return toast.error('Veuillez ajouter un pays');
    }
    if (ville === 'ville') {
      return toast.error('Veuillez ajouter une villa');
    }
    if (budget === 'budget') {
      return toast.error('Veuillez ajouter un bug');
    }
    setformStep(8);
    play();
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
              <Grid
                container
                className={`${
                  language == 'ar' && 'arabicuserformgrid'
                } userformgrid`}
              >
                <Grid item xs={12} sm={12} className="">
                  {formStep != 6 && formStep != 7 && (
                    <h3 className="formheading">
                      {t(
                        'Pour mieux te conseiller, j’ai besoin d’en savoir davantage sur toi!'
                      )}
                    </h3>
                  )}
                </Grid>
                {formStep == 1 && (
                  <>
                    <Grid container spacing={2} className="inputgrid1">
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          name="first_name"
                          placeholder={t('Prénom')}
                          className={`${
                            language == 'ar' && 'arabicinputField'
                          } inputField`}
                          value={first_name}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          name="last_name"
                          value={last_name}
                          onChange={handleInputChange}
                          placeholder={t('Nom')}
                          className={`${
                            language == 'ar' && 'arabicinputField'
                          } inputField`}
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
                          className={`${
                            language == 'ar' && 'arabicinputField'
                          } inputField`}
                          value={date_of_birth}
                          autoComplete="off"
                          placeholderText={t('Date de naissance')}
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
                        className={`${
                          language == 'ar' && 'arabicwilayaGrid'
                        } wilayaGrid`}
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
                              className={classes.dropdownSelect}
                              className={classes.menuitem}
                              // style={{
                              //   textAlign: 'right !important'
                              // }}
                            >
                              <em>{t('Wilaya')}</em>
                            </MenuItem>
                            {wilayasvalue.map((w, i) => {
                              return (
                                <MenuItem
                                  className={classes.menuitem}
                                  value={w}
                                >
                                  {t(w.name) + ' - ' + w.code}
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
                          onChange={handleInputChange}
                          placeholder={t('E-mail')}
                          className={`${
                            language == 'ar' && 'arabicinputField'
                          } inputField`}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          type="tel"
                          name="phone"
                          value={phone}
                          onChange={handleInputChange}
                          maxlength={'10'}
                          placeholder={t('Numéro de téléphone')}
                          className={`${
                            language == 'ar' && 'arabicinputField'
                          } inputField`}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        className={`${
                          language == 'ar' && 'arabicwilayaGrid'
                        } wilayaGrid`}
                      >
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
                              className={classes.menuitem}
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>{t('Classe')}</em>
                            </MenuItem>
                            {class_listData.map((list, i) => {
                              return (
                                <MenuItem
                                  className={classes.menuitem}
                                  value={list}
                                >
                                  {t(list)}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        className={`${
                          language == 'ar' && 'arabicwilayaGrid'
                        } wilayaGrid`}
                      >
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
                              className={classes.menuitem}
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>{t('Série de Baccalauréat')}</em>
                            </MenuItem>
                            {bacseriData.map((item, i) => {
                              return (
                                <MenuItem
                                  className={classes.menuitem}
                                  value={item}
                                >
                                  {t(item)}
                                </MenuItem>
                              );
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
                          onChange={handleInputChange}
                          placeholder={t(
                            'Ville de votre établissement scolaire'
                          )}
                          className={`${
                            language == 'ar' && 'arabicinputField'
                          } inputField`}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} className="inputGrid">
                        <input
                          type="text"
                          name="school_name"
                          value={school_name}
                          onChange={handleInputChange}
                          placeholder={t('Nom de votre école')}
                          className={`${
                            language == 'ar' && 'arabicinputField'
                          } inputField`}
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
                      className={`${
                        language == 'ar'
                          ? 'arabictermsandconditionGrid'
                          : 'termsandconditionGrid'
                      } `}
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
                        {t('J’accepte les termes et les conditions')}
                      </span>
                    </Grid>

                    <Grid
                      container
                      spacing={2}
                      className={`${
                        language == 'ar' && 'arabicformbuttonsGrid'
                      } formbuttonsGrid`}
                    >
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
                          <b> {t('Retour')}</b>
                        </div>
                      </Grid>

                      <Grid xs={12} sm={4}></Grid>

                      <Grid xs={12} sm={4}>
                        <button
                          variant="contained"
                          className={`${
                            language == 'ar' && 'arabicformSubmitButton'
                          } formSubmitButton`}
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
                              `${t('Passer au suivant')}`
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
                          {t(
                            'J’ai déjà mon baccalauréat mais je n’ai pas encore débuté mes études supérieures'
                          )}
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
                        <span className="">
                          {t('Je n’ai pas mon baccalauréat')}
                        </span>
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
                        {t(
                          'J’ai déjà débuté mes études supérieures et je veux me réorienter ou poursuivre mes études supérieures dans un autre programme.'
                        )}
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
                          <b> {t('Retour')}</b>
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
                                {t('Moyenne générale obtenue au Baccalauréat')}
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
                            {t('Arrondir à l’unité inférieure')}
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
                          <b> {t('Retour')}</b>
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
                              `${t('Poursuivre')}`
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
                        {t("Partir à l'étranger")}
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
                        {t('Me réorienter en Algérie')}
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
                          <b> {t('Retour')}</b>
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
                              className={classes.menuitem}
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>{t('Quel pays')}</em>
                            </MenuItem>
                            {countrylist.map((item, i) => {
                              return (
                                <MenuItem
                                  className={classes.menuitem}
                                  value={item}
                                >
                                  {t(item)}
                                </MenuItem>
                              );
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
                              className={classes.menuitem}
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>{t('Quelle(s) ville(s)')}</em>
                            </MenuItem>
                            {cites.map((item, i) => {
                              return (
                                <MenuItem
                                  className={classes.menuitem}
                                  value={item}
                                >
                                  {t(item)}
                                </MenuItem>
                              );
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
                              className={classes.menuitem}
                              style={{ textAlign: 'left !important' }}
                            >
                              <em>{t('Quel budget')}</em>
                            </MenuItem>
                            {budgetllist.map((item, i) => {
                              return (
                                <MenuItem
                                  className={classes.menuitem}
                                  value={item}
                                >
                                  {t(item)}
                                </MenuItem>
                              );
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
                            setFormData({
                              ...formData,
                              whichCountry: 'whichCountry',
                              ville: 'ville',
                              budget: 'budget'
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
                          <b> {t('Retour')}</b>
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
                            handleSubmitStep5(e);
                          }}
                        >
                          <b>
                            {' '}
                            {loading ? (
                              <div className="circulardiv">
                                <CircularProgress size={20} className="" />
                              </div>
                            ) : (
                              `${t('Poursuivre')}`
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
                      <h1>{t('Quel est ton dernier diplôme validé ?')}</h1>
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
                        onClick={() => {
                          setFormData({
                            ...formData,
                            lastDiploma: 'Baccalauréat'
                          });
                          setformStep(7);
                          play();
                        }}
                      >
                        {t('Baccalauréat')}
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
                        {t('Licence')}
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
                        {t('Master')}
                      </Grid>
                      <Grid
                        item
                        xs={9}
                        sm={5}
                        className="Gridoptiontwo"
                        onClick={(e) => {
                          setFormData((prevState) => ({
                            ...prevState,
                            lastDiploma: 'Doctorat'
                          }));
                          handleSubmit3(e, 'no');
                          play();
                        }}
                      >
                        {t('Doctorat')}
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
                          <b> {t('Retour')}</b>
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
                      <h1>{t('Vous êtes en')}</h1>
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
                              setFormData({
                                ...formData,
                                studyYear: '1ère année de master '
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            {t('1ère année de master')}
                          </Grid>
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                studyYear: '2ème année de master'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            {t('2ème année de master')}
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
                                studyYear: '1ère année de doctorat'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            {t('1ère année de doctorat')}
                          </Grid>
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                studyYear: '2ème année de doctorat'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            {t('2ème année de doctorat')}
                          </Grid>
                        </>
                      )}
                      {lastDiploma == 'Baccalauréat' && (
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
                                studyYear: '1ère année de licence'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            {t('1ère année de licence')}
                          </Grid>
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                studyYear: '2ème année de licence'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            {t('2ème année de licence')}
                          </Grid>
                          <Grid
                            item
                            xs={9}
                            sm={4}
                            className="Gridoptiontwo"
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                studyYear: '3ème année de licence'
                              });
                              handleSubmit3(e, 'no');
                              play();
                            }}
                          >
                            {t('3ème année de licence')}
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
                          <b> {t('Retour')}</b>
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
                              className="motiveCriteriamenu"
                              style={{
                                textAlign: 'left !important',
                                // fontSize: '10px',
                                padding: '10px'
                              }}
                              className={classes.menuitem}
                            >
                              <em>
                                {t(
                                  'Quel critère a le plus motivé ton choix de pays et de villes?'
                                )}
                              </em>
                            </MenuItem>
                            {criterianData.map((item, i) => {
                              return (
                                <MenuItem
                                  className="motiveCriteriamenu"
                                  style={{
                                    textAlign: 'left !important',
                                    // fontSize: '10px',
                                    padding: '10px'
                                  }}
                                  className={classes.menuitem}
                                  value={item}
                                >
                                  {t(item)}
                                </MenuItem>
                              );
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
                          <b> {t('Retour')}</b>
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
                              `${t('Poursuivre')}`
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
