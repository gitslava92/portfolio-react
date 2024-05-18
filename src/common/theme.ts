import { createTheme } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material/styles/createPalette';


export const palette = {
  mode: 'light',
  primary: {
    main: '#1fa4c4',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#38373c',
    dark: '#DCE4E8',
    contrastText: '#1B2632',
  },
  text: {
    primary: '#1B2632',
    secondary: '#323B49',
  },
  background: {
    default: '#EFEFEF',
    main: '#FFFFFF',
  },
  input: {
    border: '#4D4D4D',
    borderLight: '#C4C4C4',
  },
};

export const theme = createTheme({
  palette: palette as PaletteOptions,
  components: {
    MuiSelect: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
      },
      styleOverrides: {
        contained: {
          borderRadius: '4px',
          padding: '14px 40px',
        },
        outlined: {
          borderRadius: '4px',
          padding: '15px 32px',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: `${palette.input.border}!important`,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            pointerEvents: 'none',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'medium',
        margin: 'normal',
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '&:hover': {
            '& div:not(.Mui-error, .Mui-disabled) > fieldset': {
              borderColor: palette.input.border,
            },
          },
          '& label.Mui-focused': {
            color: palette.input.border,
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#E6E8EC',
            },
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Inter',
    body1: {
      color: palette.text.primary,
      fontSize: '16px',
      '@media (max-width:900px)': {
        fontSize: '14px',
      },
    },
    body2: {
      color: palette.text.primary,
      fontSize: '14px',
      '@media (max-width:900px)': {
        fontSize: '12px',
      },
    },
    subtitle1: {
      fontSize: '18px',
      '@media (max-width:900px)': {
        fontSize: '16px',
      },
    },
    subtitle2: {
      fontSize: '16px',
      '@media (max-width:900px)': {
        fontSize: '14px',
      },
    },
    h1: {
      fontSize: '40px',
      '@media (max-width:900px)': {
        fontSize: '36px',
      },
    },
    h2: {
      color: palette.text.primary,
      fontSize: '36px',
      '@media (max-width:900px)': {
        fontSize: '24px',
      },
    },
    h3: {
      fontSize: '24px',
      '@media (max-width:900px)': {
        fontSize: '20px',
      },
    },
    h4: {
      fontSize: '18px',
      '@media (max-width:900px)': {
        fontSize: '16px',
      },
    },
    h5: {
      fontSize: '16px',
      '@media (max-width:900px)': {
        fontSize: '14px',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1280,
      xl: 1440,
    },
  },
});