import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: ["fr", "en"],
    // we init with resources
    resources: {
      ['en-GB']: {
        translations: {
          'Become Content Creator': 'Become Content Creator',
          'Get Early Access': 'Get Early Access',
          'Tous droits réservés': 'Tous droits réservés',
          "Commençons le test d'orientation":
            "Commençons le test d'orientation",
          'À la fin de ce questionnaire, une proposition de voeux pour ton orientation te sera formulée':
            'À la fin de ce questionnaire, une proposition de voeux pour ton orientation te sera formulée',
          'Pour commencer, choisis le profil dans lequel tu te reconnais le plus:':
            'Pour commencer, choisis le profil dans lequel tu te reconnais le plus:'
        }
      },
      fr: {
        translations: {
          'Become Content Creator': 'Devenir un créateur de contenu',
          'Get Early Access': "S'inscrire"
        }
      },
      ar: {
        translations: {
          // 'Become Content Creator': 'Devenir un créateur de contenu',
          // 'Get Early Access': "S'inscrire",
          // 'Tous droits réservés': 'جميع الحقوق محفوظة',
          // "Commençons le test d'orientation": 'لنبدأ اختبار التوجيه',
          // 'À la fin de ce questionnaire, une proposition de voeux pour ton orientation te sera formulée':
          //   'في نهاية هذا الاستبيان ، سيتم صياغة اقتراح رغبات لتوجيهك',
          // 'Pour commencer, choisis le profil dans lequel tu te reconnais le plus:':
          //   'Pour commencer, choisis le profil dans lequel tu te reconnais le plus:'
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
