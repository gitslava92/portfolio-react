import { i18nInitConfig } from '@common/i18n';
import { theme } from '@common/theme';
import { ThemeProvider } from '@mui/system';
import i18n from 'i18next';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';

import App from './App';
import './index.css';

i18n.use(initReactI18next).init(i18nInitConfig);

export default i18n;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </ThemeProvider>
  </React.StrictMode>
);
