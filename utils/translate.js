import { LANGUAGES } from "../lib/constants";

function translate(field, content, lang) {
  if (
    lang === LANGUAGES.swedish.code &&
    content[`${field}_${LANGUAGES.swedish.code}`]
  ) {
    return content[`${field}_${LANGUAGES.swedish.code}`];
  } else if (
    lang === LANGUAGES.bosnian.code &&
    content[`${field}_${LANGUAGES.bosnian.code}`]
  ) {
    return content[`${field}_${LANGUAGES.bosnian.code}`];
  }

  return content[`${field}`];
}

export default translate;
