import { LANGUAGE_KEY } from "@common/constants";
import { languages } from "@common/i18n";
import { ExpandMore } from "@mui/icons-material";
import {
  Select as MUISelect,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageSelectProps {
  isMobile?: boolean;
}

export const Select = styled(MUISelect, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile: boolean }>(({ theme, isMobile }) => ({
  display: "flex",
  alignItems: "center",
  fontWeight: "400",
  color: isMobile
    ? theme.palette.primary.main
    : theme.palette.primary.contrastText,
  maxWidth: 60,
  textTransform: "uppercase",
  border: "none",
  "& .MuiSelect-select": {
    paddingBottom: 0,
    color: isMobile
      ? theme.palette.primary.main
      : theme.palette.primary.contrastText,
  },
  "&:before": {
    borderBottom: "none",
  },
  svg: {
    color: isMobile
      ? theme.palette.primary.main
      : theme.palette.primary.contrastText,
  },
}));

const initialLanguage = languages[1].id;

export const LanguageSelect = ({ isMobile }: LanguageSelectProps) => {
  const [languageId, setLanguageId] = useState<string>(initialLanguage);
  const { i18n } = useTranslation();
  const theme = useTheme<Theme>();

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
      isMobile={isMobile}
    >
      {languages.map((lang) => (
        <MenuItem
          key={lang.id}
          value={lang.id}
          sx={{
            textTransform: "uppercase",
            color: theme.palette.primary.main,
          }}
        >
          {lang.title}
        </MenuItem>
      ))}
    </Select>
  );
};
