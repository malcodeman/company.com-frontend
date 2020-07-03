import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import bs from "./translations/bs.json";
import sw from "./translations/sw.json";

const resources = {
  bs: {
    translation: bs,
  },
  sw: {
    translation: sw,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
