import { ColorModeContext } from "../../../App";
import { LANGUAGE_KEY } from "@common/constants";
import { LangTitle, useCustomTranslation } from "@common/i18n";
import { languages } from "@common/i18n";
import { DarkMode, LightMode, Translate, Settings } from "@mui/icons-material";
import { SpeedDialAction, SpeedDial as MUISpeedDial } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";

enum ActionType {
  Language = "language",
  Theme = "theme",
}

const getActions = (isDarkTheme: boolean) => {
  return [
    {
      id: 0,
      icon: <Translate />,
      title: "toggle language to",
      type: ActionType.Language,
    },
    {
      id: 1,
      icon: isDarkTheme ? <LightMode /> : <DarkMode />,
      title: "toggle theme to",
      type: ActionType.Theme,
    },
  ];
};

const initialLanguage = languages[1].id;

export const SpeedDial = () => {
  const { t, tc } = useCustomTranslation();

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const isDarkTheme = theme.palette.mode === "dark";

  const [languageId, setLanguageId] = useState<LangTitle>(initialLanguage);
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLnguage =
      localStorage.getItem(LANGUAGE_KEY) === LangTitle.Eng
        ? LangTitle.Eng
        : LangTitle.Rus;
    const storedLanguageId = savedLnguage || initialLanguage;

    if (languageId !== storedLanguageId) {
      setLanguageId(storedLanguageId);
      i18n.changeLanguage(storedLanguageId);
    }
  }, [i18n, languageId]);

  useEffect(() => {
    document.documentElement.lang = languageId;
    document.title = tc("Pustovit Viacheslav (frontend developer)");
  }, [languageId, tc]);

  const toggleLanguage = () => {
    setLanguageId((prev) => {
      const newLanguage =
        prev === LangTitle.Eng ? LangTitle.Rus : LangTitle.Eng;

      localStorage.setItem(LANGUAGE_KEY, newLanguage);
      i18n.changeLanguage(newLanguage);
      return newLanguage;
    });
  };

  return (
    <MUISpeedDial
      ariaLabel={tc("settings")}
      sx={{ position: "fixed", bottom: 16, left: 16 }}
      icon={<Settings fontSize="small" />}
    >
      {getActions(isDarkTheme).map((action) => (
        <SpeedDialAction
          key={action.id}
          icon={action.icon}
          tooltipTitle={`${tc(action.title)} ${t(
            languageId === LangTitle.Eng ? "russian" : "english"
          )}`}
          onClick={
            action.type === ActionType.Language
              ? toggleLanguage
              : colorMode.toggleColorMode
          }
        />
      ))}
    </MUISpeedDial>
  );
};
