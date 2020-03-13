import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {en, de} from './languages/';

let resources = {
  en: {
    translation: en.translations
  },
  de: {
    translation: de.translations
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en",
    // defaultNS: 'common',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  // i18n.addResourceBundle('en', 'translation', en);

  export default i18n;