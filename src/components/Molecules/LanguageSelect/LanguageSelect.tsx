import { LANGUAGE_KEY } from "@common/constants";
import { languages } from "@common/i18n";
import { palette } from "@common/theme";
import { ExpandMore } from "@mui/icons-material";
import {
  Select as MUISelect,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Select = styled(MUISelect)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontWeight: "400",
  color: theme.palette.primary.main,
  maxWidth: 60,
  textTransform: "uppercase",
  border: "none",
  "& .MuiSelect-select": {
    paddingBottom: 0,
  },
  "&:before": {
    borderBottom: "none",
  },
  svg: {
    color: theme.palette.primary.main,
  },
}));

const initialLanguage = languages[1].id;

export const LanguageSelect = () => {
  const [languageId, setLanguageId] = useState<string>(initialLanguage);
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguageId =
      localStorage.getItem(LANGUAGE_KEY) || initialLanguage;

    if (languageId !== storedLanguageId) {
      setLanguageId(storedLanguageId);
      i18n.changeLanguage(storedLanguageId);
    }
  }, [i18n, languageId]);

  const handleChangeLanguage = (e: SelectChangeEvent<unknown>) => {
    const selectedLanguageId = e.target.value as string;

    if (selectedLanguageId) {
      setLanguageId(selectedLanguageId);
      localStorage.setItem(LANGUAGE_KEY, selectedLanguageId);
      i18n.changeLanguage(selectedLanguageId);
    }
  };

  return (
    <Select
      value={languageId}
      variant="standard"
      IconComponent={ExpandMore}
      onChange={handleChangeLanguage}
    >
      {languages.map((lang) => (
        <MenuItem
          key={lang.id}
          value={lang.id}
          sx={{ textTransform: "uppercase", color: palette.primary.main }}
        >
          {lang.title}
        </MenuItem>
      ))}
    </Select>
  );
};
