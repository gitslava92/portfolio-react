import "./App.css";
import { ROUTES } from "@common/router";
import { getTheme } from "@common/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useMemo, createContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

dayjs.extend(utc);

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const App = () => {
  const router = createBrowserRouter(ROUTES);

  const [mode, setMode] = useState<PaletteMode>(
    localStorage.getItem("theme") || "light"
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          const newThemeMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("theme", newThemeMode);

          return newThemeMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
