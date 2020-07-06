import { useTranslation } from "react-i18next";

import { LANGUAGES } from "../lib/constants";

function Trans(props) {
  const { field, content } = props;
  const { i18n } = useTranslation();
  const lang = i18n.language;

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

export default Trans;
