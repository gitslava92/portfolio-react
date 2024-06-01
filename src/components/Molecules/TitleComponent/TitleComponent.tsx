import { useCustomTranslation } from "@common/i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const TitleComponent = () => {
  const { i18n } = useTranslation();
  const { tc } = useCustomTranslation();

  useEffect(() => {
    document.title = tc("Pustovit Viacheslav (frontend web developer)");
  }, [i18n.language, tc]);

  return null;
};
