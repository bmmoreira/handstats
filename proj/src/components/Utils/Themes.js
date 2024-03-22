import { createTheme } from '@mui/material/styles';

export const defaultColors = {
  primary: "#fde581ff",
  secondary: "#f55760ff",
  terciary: "#fde581ff",
  quaternary: "#1a535c",
};

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "120px",
          backgroundColor: defaultColors.quaternary,
          "&:hover": {
            backgroundColor: "#ffe66d",
            color: "#ff0000",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          },
          borderRadius: "18px",
          padding: "12px 24px",
          fontWeight: "bold",
          fontSize: "12px",
          textTransform: "uppercase",
        },
      },
    },
  },
});
