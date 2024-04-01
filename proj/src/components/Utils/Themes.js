import { createTheme } from "@mui/material/styles";

export const defaultColors = {
  primary: "#fde581ff" /* yellow */,
  secondary: "#f55760ff" /* red */,
  terciary: "#fde581ff" /* yellow */,
  quaternary: "#1a535c" /* dark blue */,
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

export const themeButtonPlayers = createTheme({
  typography: {
    h5: {
      fontSize: "0.575rem",
      color: "white",
    },
    // Disable h3 variant
    h3: {
      fontSize: "0.875rem",
      color: "red",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'selected', size: "large" },
          style: {
            backgroundColor: 'orange', // Example color
            color: 'white',
            // Add any other styles you want to customize
          },
        },
        {
          props: { variant: 'active', size: "large" },
          style: {
            backgroundColor: 'orange', // Example color
            color: 'white',
            border: '2px solid red',
            // Add any other styles you want to customize
          },
        },
        // Add more variants as needed for other combinations of variant and size
      ],
      styleOverrides: {
        root: {
          display: "block",
          width: "60px",
          height: "60px",
          backgroundColor: defaultColors.secondary, // Change background color of the button
          "&:hover": {
            backgroundColor: defaultColors.quaternary,
            color: "#ff0000", // Change text color on hover
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Add a box shadow on hover
            // Add any other styles you want to change on hover
          },
          "&.MuiButton-dark": {
            backgroundColor: defaultColors.quaternaryColor, // Example color for contained variant
            color: "white", // Example text color for contained variant
          },
          "&.MuiButton-light": {
            borderColor: "#f7fff7", // Example border color for outlined variant
            backgroundColor: "blue",
            color: "blue", // Example text color for outlined variant
          },
          borderRadius: "12px", // Change border radius of the button
          padding: "5px 0px", // Change padding of the button
          fontWeight: "bold", // Change font weight of the button text
          fontSize: "12px", // Change font size of the button text
          textTransform: "uppercase", // Change text transformation of the button text
          margin: "2px 2px 2px 2px",
          textAlign: "center",
          // Add any other styles you want to apply to all buttons
        },
      },
    },
  },
});

export const themeButtonHome = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", size: "small" },
          style: {
            // Define styles for 'contained' variant with 'small' size
            fontSize: "0.75rem", // Adjust size as needed
            padding: "8px 16px", // Adjust padding as needed
          },
        },
        {
          props: { variant: "contained", size: "medium" },
          style: {
            // Define styles for 'contained' variant with 'medium' size
            fontSize: "0.875rem", // Adjust size as needed
            padding: "10px 20px", // Adjust padding as needed
          },
        },
        // Add more variants as needed for other combinations of variant and size
      ],
      styleOverrides: {
        root: {
          width: "180px",
          height: "40px",
          backgroundColor: defaultColors.secondary,
          "&:hover": {
            backgroundColor: defaultColors.terciary,
            color: "#ff0000",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Add a box shadow on hover
            // Add any other styles you want to change on hover
          },
          "&.MuiButton-dark": {
            backgroundColor: defaultColors.quaternaryColor, // Example color for contained variant
            color: "white", // Example text color for contained variant
          },
          "&.MuiButton-light": {
            borderColor: "#f7fff7", // Example border color for outlined variant
            backgroundColor: "#f7fff7",
            color: "blue", // Example text color for outlined variant
          },
          borderRadius: "22px", // Change border radius of the button
          padding: "12px 24px", // Change padding of the button
          fontWeight: "bold", // Change font weight of the button text
          fontSize: "12px", // Change font size of the button text
          textTransform: "uppercase", // Change text transformation of the button text
          margin: "12px 2px 2px 2px",
          // Add any other styles you want to apply to all buttons
        },
      },
    },
  },
});



export const boxBench = {
  backgroundColor: defaultColors.terciary,
  width: "95%",
  color: "white",
  border: "2px solid grey",
  borderRadius: "20px",
  textAlign: "left",
  margin: "5px",
  minHeight: "150px",
};
export const boxField = {
  backgroundColor: defaultColors.terciary,
  width: "95%",
  color: "white",
  border: "2px solid grey",
  borderRadius: "20px",
  textAlign: "left",
  margin: "5px",
  minHeight: "150px",
};
export const boxFieldMobile = {
  backgroundColor: defaultColors.terciary,
  width: "95%",
  color: "white",
  border: "2px solid grey",
  borderRadius: "20px",
  textAlign: "left",
  margin: "5px",
  
};