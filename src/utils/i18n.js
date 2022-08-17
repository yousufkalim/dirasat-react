import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import {
  arabicHeader,
  frenchHeader,
  frenchLandingPage,
  ArabicLandingPage,
  frenchUserform,
  arabicUserform,
  frenchWillaya,
  arabicWillaya,
  frenchContactus,
  arabicContactus,
  frenchPopups,
  arabicPopups,
  frenchQuestions,
  arabicQuestions,
  frenchAnswers,
  arabicAnswers,
  frenchFooter,
  arabicFooter
} from './translation';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: ["fr", "en"],
    // we init with resources
    resources: {
      ['en-GB']: {
        translations: {
          // header
          ...frenchHeader(),
          // landing page
          ...frenchLandingPage(),
          // contactus
          ...frenchContactus(),
          // userform
          ...frenchUserform(),
          // willaya
          ...frenchWillaya(),
          // infopopups
          ...frenchPopups(),
          // "questions"
          ...frenchQuestions(),
          // answers
          ...frenchAnswers(),
          // footer
          ...frenchFooter()
        }
      },
      fr: {
        translations: {
          'Tous droits réservés': 'Tous droits réservés'
        }
      },
      ar: {
        translations: {
          // header
          ...arabicHeader(),
          // landing page
          ...ArabicLandingPage(),
          // contactus
          ...arabicContactus(),
          // userform
          ...arabicUserform(),
          // willaya
          ...arabicWillaya(),
          // infopopups
          ...arabicPopups(),
          // "questions"
          ...arabicQuestions(),
          // answers
          ...arabicAnswers(),
          // footer
          ...arabicFooter()
        }
      }
    },
    fallbackLng: 'ar',
    debug: true,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
