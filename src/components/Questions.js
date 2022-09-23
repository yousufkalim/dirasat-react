import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Store, UpdateStore } from '../StoreContext';
import winkingFinal from '../assets/img/WinkingFinal.png';
import encourageFinal from '../assets/img/EncourageFinal.png';
import arrogantFinal from '../assets/img/ArrogantFinal.png';
import asthonisedFinal from '../assets/img/AsthonisedFinal.png';
import thoughtfulFinal from '../assets/img/ThoughtfulFinal.png';
import victoriousFinal from '../assets/img/VictoriousFinal.png';
import qarrow from '../assets/icons/qarrow.png';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@material-ui/core/Grid';
import Info from './Info';
import useSound from 'use-sound';
import sound from '../assets/sound/sound.wav';
import arrowleft from '../assets/img/arrow2.png';
import { useTranslation, Trans } from 'react-i18next';

const Questions = ({ setStep, setActiveStep }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  let getprev;
  const [play] = useSound(sound);
  // init context
  const updateStore = UpdateStore();
  const { user, questions, answers, history, disc_ans_id } = Store();
  const scrollToTop = () => {
    window.scrollTo({
      top: 60,
      behavior: 'smooth'
    });
  };
  // state init
  const [nextQuestionId, setNextQuestionId] = useState('first');
  const [preFlag, setPrevFlag] = useState(false);
  const [prevQuestion, setprevQuestion] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = useState(null);
  console.log('disc_ans_id', disc_ans_id);
  // Here we will preload all the images
  useEffect(() => {
    let imageList = [
      winkingFinal,
      encourageFinal,
      arrogantFinal,
      thoughtfulFinal,
      victoriousFinal
    ];

    imageList.map((image) => {
      new Image().src = image;
    });
  }, []);
  useEffect(() => {
    if (
      user?.level1 == 'want to change' &&
      getQuestion()?.question ===
        'Veux-tu inclure les formations 100% en Arabe?' &&
      !preFlag
    ) {
      let options1 = answers?.find((answer) => {
        return (
          answer.question?._id === getQuestion()?._id && answer?.answer == 'Non'
        );
      });
      handleSelectOption(options1);
    }
    if (
      user?.level1 == 'want to change' &&
      getQuestion()?.question ===
        'Envisages-tu des études à l’étranger directement après le Bac?' &&
      !preFlag
    ) {
      let options1 = answers?.find((answer) => {
        return (
          answer.question?._id === '619cb1acdc223f3845b95c29' &&
          answer?.answer == 'Un Plan A'
        );
      });
      handleSelectOption(options1);
    }
  }, [nextQuestionId]);

  useEffect(() => {
    currentans();
    // scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevQuestion]);
  // stlyes
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch'
      }
    },
    main: {
      margin: 'auto',
      textAlign: 'center',
      marginTop: '5%',
      height: '70vh'
    },
    chekbox: {
      margin: 'auto'
    }
  }));
  const classes = useStyles();
  // when  select any option it will set next Q id ,update history , if Q type is discriminating update disc_ans_id
  const handleSelectOption = (ans) => {
    setPrevFlag(false);
    if (ans?.question?.questionType === 'discriminating') {
      updateStore({ disc_ans_id: [...disc_ans_id, ans?._id] });
    }
    setNextQuestionId(ans?.next_question);
    updateStore({ history: [...history, ans] });
    setprevQuestion([]);
    setCurrentAnswer(null);
    return play();
  };

  //it set the current answer which will be selected
  const currentans = () => {
    let currentans = prevQuestion?.find(
      (q) => q.question?._id === getQuestion()?._id
    );
    if (currentans !== undefined) {
      setCurrentAnswer(currentans);
    }
  };
  // if show the questions by filteron the base of nextquestionId
  const getQuestion = () => {
    if (nextQuestionId == null) {
      setStep(3);
      // setActiveStep((prevActiveStep) => prevActiveStep + 1)
      setActiveStep(3);
      return;
    }
    if (nextQuestionId === 'first') {
      return questions?.find((question) => question.isFirst);
    } else {
      return questions?.find((question) => question._id === nextQuestionId);
    }
  };
  // it show the options of question by filter answer on the base of question id
  const getOptions = (answers) => {
    let options = answers?.filter((answer) => {
      return answer.question?._id === getQuestion()?._id;
    });
    return options;
  };
  const handleClickinfo = (event, text) => {
    setAnchorEl(event.currentTarget);
    setText(text);
  };
  const getFacialExpresion = (facialExpression) => {
    if (facialExpression == 1) {
      return (
        <img
          src={thoughtfulFinal}
          className=" thoughtfulFinal"
          alt="thougtful"
        />
      );
    } else if (facialExpression == 2) {
      return (
        <img
          src={thoughtfulFinal}
          className=" thoughtfulFinal"
          alt="thoughtful"
        />
      );
    } else if (facialExpression == 3) {
      return (
        <img
          src={asthonisedFinal}
          className=" asthonisedFinal"
          alt="asthonised"
        />
      );
    } else if (facialExpression == 4) {
      return (
        <img
          src={victoriousFinal}
          className=" victoriousFinal "
          alt="victorious"
        />
      );
    } else if (facialExpression == 5) {
      return <img src={winkingFinal} className=" winkingFinal" alt="winking" />;
    } else if (facialExpression == 6) {
      return (
        <img src={arrogantFinal} className=" arrogantFinal" alt="arrogant" />
      );
    } else if (facialExpression == 7) {
      return (
        <img src={encourageFinal} className=" encourageFinal" alt="encourage" />
      );
    } else if (facialExpression == 8) {
      return <img src={winkingFinal} className=" winkingFinal" alt="winking" />;
    } else {
      // return <img src={Dummy} className="dummyimgQuestion forweb" />;
      return <img src={winkingFinal} className=" winkingFinal" alt="winking" />;
    }
  };

  // for previos Button

  // when Click on Previous Button it get previous question
  // by match nextquestion from history saved with current question and remove from history
  // if Q is discriminating it pop from disc_ans_id
  // it set next question id that is basically previous one which will show
  // create previous q array to get seleceted
  const handlePrev = () => {
    setPrevFlag(true);
    if (
      user?.level1 == 'want to change' &&
      getQuestion()?.question ===
        "Let's speak English! Veux-tu inclure les formations 100% en Anglais?"
    ) {
      getprev = history?.find(
        (his) => his?.next_question === '62a96a43bb109a016d565b59'
      );
    } else if (
      user?.level1 == 'want to change' &&
      getQuestion()?.question === 'À quel pays penses-tu en particulier?'
    ) {
      getprev = history?.find(
        (his) => his?.next_question === '619cb0e3dc223f3845b95c27'
      );
    } else {
      getprev = history?.find(
        (his) => his?.next_question === getQuestion()?._id
      );
    }
    if (getprev) {
      if (getprev?.question?.questionType === 'discriminating') {
        const disans = [...disc_ans_id];
        disans.pop();
        updateStore({
          disc_ans_id: disans
        });
      }
      updateStore({
        history: history.slice(0, history.length - 1)
      });
      setNextQuestionId(getprev?.question?._id);
      setprevQuestion([...prevQuestion, getprev]);
    }
  };

  return (
    <>
      <Info anchorEl={anchorEl} setAnchorEl={setAnchorEl} text={text} />
      <Grid
        container
        spacing={2}
        className="mainquestionscreen questionsOuterDiv"
      >
        <Grid item xs={12} sm={4} className="imgGrid">
          {getFacialExpresion(getQuestion()?.facialExpression)}
        </Grid>
        <Grid item xs={12} sm={8} className="questionGrid">
          <div
            className={` 
            ${
              getOptions(answers)?.length >= 5 &&
              getOptions(answers)?.length <= 8
                ? 'marginBottomClass'
                : getOptions(answers)?.length === 11
                ? ''
                : getQuestion()?.question ==
                  'Je vois! Dans ce cas, quel rôle aimerais-tu y jouer?'
                ? 'uniquefouroptions'
                : 'questionDiv'
            }
            ${getOptions(answers)?.length == 9 && 'nineOptions'}
            ${getOptions(answers)?.length == 6 && 'sixOptions'}
            `}
          >
            <img src={qarrow} className="qboximg" alt="box" />
            <div
              className={`${
                language == 'ar' && 'arabicquestionBox'
              } questionBox ${
                getOptions(answers)?.length == 11 && 'ninthoptionquestion'
              }`}
            >
              <h1
                className={`${
                  getQuestion()?.question.length >= 90
                    ? 'longquestion'
                    : 'questiontext'
                }
                ${language == 'ar' && 'directionrtl'}
                `}
              >
                {getQuestion()?.question
                  ? `${t(getQuestion()?.question)}`
                  : "There's no Question please try again"}
                {getQuestion()?.question ==
                  'Encore une question, veux-tu inclure les études payantes?' && (
                  <InfoIcon
                    className="infoIcon"
                    onClick={(e) => handleClickinfo(e, 1)}
                  />
                )}
                {getQuestion()?.question ==
                  "Dernière question, étudier à l'étranger est pour toi:" && (
                  <InfoIcon
                    className="infoIcon"
                    onClick={(e) => handleClickinfo(e, 2)}
                  />
                )}
                {getQuestion()?.question ==
                  'Maintenant dis-moi si tu veux inclure les formations sélectives:' && (
                  <InfoIcon
                    className="infoIcon"
                    onClick={(e) => handleClickinfo(e, 3)}
                  />
                )}
                {getQuestion()?.question ==
                  'À quel pays penses-tu en particulier?' && (
                  <InfoIcon
                    className="infoIcon"
                    onClick={(e) => handleClickinfo(e, 4)}
                  />
                )}
              </h1>
            </div>
            <Grid container spacing={3} className="answerGrid">
              {answers &&
                getOptions(answers)?.map((ans) => (
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    className={`${
                      currentAnswer?.answer === ans?.answer
                        ? 'selectedOption'
                        : 'option'
                    } ${getOptions(answers)?.length == 11 && 'ninthoption'}`}
                    onClick={() => handleSelectOption(ans)}
                  >
                    {t(ans?.answer)}
                  </Grid>
                ))}
            </Grid>
            {history.length >= 1 ? (
              <div size="large" className="prevButton" onClick={handlePrev}>
                <img src={arrowleft} className="arrowleft" alt="leftarrow" />
                <b> {t('Retour')}</b>
              </div>
            ) : (
              ''
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Questions;
