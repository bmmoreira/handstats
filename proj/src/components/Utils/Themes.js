import { createTheme } from "@mui/material/styles";

export const defaultColors = {
  primary: "#fde581ff" /* yellow */,
  secondary: "#f55760ff" /* red */,
  terciary: "#fde581ff" /* yellow */,
  quaternary: "#1a535c" /* dark blue */,
  quintenary: "#4cbd96" /* light green */,
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
          width: "80px",
          height: "80px",
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
          width: "155px",
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
          margin: "2px 2px 2px 2px",
          // Add any other styles you want to apply to all buttons
        },
      },
    },
  },
});

export const actionButtonsMobile = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "80px",
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

export const fieldBox = {
  backgroundColor: defaultColors.terciary,
  border: "1px solid grey",
  borderRadius: "12px",
  padding: "0px",
  margin: "5px 0 5px 0",
};

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

export const themeRegisterPage = createTheme({
  components: {
   
    MuiButton: {
      styleOverrides: {
        root: {
          width: "380px",
          height: "42px",
          backgroundColor: defaultColors.secondary, 
          borderRadius: "63.55px", 
          padding: "12px 24px", 
          fontWeight: "bold", 
          fontSize: "12px", 
          textTransform: "uppercase", 
          margin: "12px 2px 2px 2px",
          "&:hover": {
            backgroundColor: "#ffe66d",
            color: "#ff0000", 
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
          },
          "&.MuiButton-dark": {
            backgroundColor: defaultColors.quaternary, // Example color for contained variant
            color: "white", // Example text color for contained variant
          },
          "&.MuiButton-light": {
            borderColor: "#f7fff7", // Example border color for outlined variant
            backgroundColor: "#f7fff7",
            color: "blue", // Example text color for outlined variant
          },
         
          // Add any other styles you want to apply to all buttons
        },
      },
    },

  },
});


export const buttonFieldSecondRow = createTheme({
  typography: {
    h5: {
      fontSize: "0.575rem",
      color: "white",
    },
    h4: {
      fontSize: "1.5rem",
      color: "white",
    },
    h3: {
      fontSize: "0.875rem",
      color: "white",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'selected', size: "large" },
          style: {
            backgroundColor: 'brown', // Example color
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
        {
          props: { variant: 'gk', size: "large" },
          style: {
            backgroundColor: 'orange', // Example color
            color: 'white',
            border: '1px solid white',
            // Add any other styles you want to customize
          },
        },
        // Add more variants as needed for other combinations of variant and size
      ],
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: '#82c341',
            color: "#ff0000", 
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
            border: '1px solid white',
          },
          "&.MuiButton-dark": {
            backgroundColor: '#4cbd96', 
            color: "white", 
          },
          "&.MuiButton-light": {
            borderColor: "#f7fff7", 
            backgroundColor: "blue",
            color: "blue", 
          },
          display: "block",
          width: "23%",
          height: "80px",
          backgroundColor: '#4cbd96',
          borderRadius: "12px", 
          padding: "5px 0px", 
          fontWeight: "bold", 
          fontSize: "12px", 
          textTransform: "uppercase", 
          margin: "2px 2px 2px 2px",
          textAlign: "center",
        },
      },
    },
  },
});

export const buttonFieldFirstRow = createTheme({
  typography: {
    h5: {
      fontSize: "0.575rem",
      color: "white",
    },
    h4: {
      fontSize: "1.5rem",
      color: "white",
    },
    h3: {
      fontSize: "0.875rem",
      color: "white",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'selected', size: "large" },
          style: {
            backgroundColor: 'brown', // Example color
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
        {
          props: { variant: 'gk', size: "large" },
          style: {
            backgroundColor: 'orange', // Example color
            color: 'white',
            border: '1px solid white',
            // Add any other styles you want to customize
          },
        },
        // Add more variants as needed for other combinations of variant and size
      ],
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: '#82c341',
            color: "#ff0000", 
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
          },
          "&.MuiButton-dark": {
            backgroundColor: '#4cbd96', 
            color: "white", 
          },
          "&.MuiButton-light": {
            borderColor: "#f7fff7", 
            backgroundColor: "blue",
            color: "blue", 
          },
          display: "block",
          width: "23%",
          height: "80px",
          backgroundColor: '#4cbd96',
          borderRadius: "12px", 
          padding: "5px 0px", 
          fontWeight: "bold", 
          fontSize: "12px", 
          textTransform: "uppercase", 
          margin: "2px 2px 2px 2px",
          textAlign: "center",
        },
      },
    },
  },
});

export const actionButtons = createTheme({
  typography: {
    h5: {
      fontSize: "0.575rem",
      color: "white",
    },
    h4: {
      fontSize: "1.5rem",
      color: "white",
    },
    h3: {
      fontSize: "0.875rem",
      color: "white",
    },
  },
  
  components: {
    MuiIconButton: {
      variants: [
        {
          props: { variant: 'selected', size: "large" },
          style: {
            backgroundColor: 'brown', // Example color
            color: 'white',
            
          },
        },
      ],
      styleOverrides: {
        root: {
          
          "&:hover": {
            backgroundColor: defaultColors.primary,
            color: "#1a535c",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
          },
          "&.MuiButton-dark": {
            backgroundColor: defaultColors.quaternary, 
            color: "white", 
          },
          "&.MuiButton-light": {
            borderColor: "#f7fff7", 
            backgroundColor: "blue",
            color: "white", 
            alignContent: 'center',
          },
          backgroundColor: defaultColors.secondary, // Action Button Background Color RED
          borderRadius: "12px", 
          padding: "0px 0px",
          fontWeight: "bold", 
          fontSize: "12px", 
          textTransform: "uppercase", 
          margin: "2px 2px 2px 2px",
          color: "white",
          display: "block",
          width: "20%",
          height: "60px",
          padding: "5px",
          justifyContent: 'center'
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'selected', size: "large" },
          style: {
            backgroundColor: 'brown', // Example color
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
        {
          props: { variant: 'gk', size: "large" },
          style: {
            backgroundColor: 'orange', // Example color
            color: 'white',
            border: '1px solid white',
            // Add any other styles you want to customize
          },
        },
        // Add more variants as needed for other combinations of variant and size
      ],
      styleOverrides: {
        root: {
          
          backgroundColor: defaultColors.secondary, // Change background color of the button
          "&:hover": {
            backgroundColor: 'pink',
            color: "#ff0000", // Change text color on hover
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Add a box shadow on hover
            // Add any other styles you want to change on hover
          },
          "&.MuiButton-dark": {
            backgroundColor: defaultColors.quaternary, // Example color for contained variant
            color: "white", // Example text color for contained variant
          },
          "&.MuiButton-light": {
            borderColor: "#f7fff7", 
            backgroundColor: "blue",
            color: "white", 
            alignContent: 'center',
            
          },
          borderRadius: "12px", 
          padding: "0px 0px",
          fontWeight: "bold", 
          fontSize: "12px", 
          textTransform: "uppercase", 
          margin: "2px 2px 2px 2px",
          display: "block",
          width: "23%",
          height: "60px",
          padding: "5px",
          justifyContent: 'center'
        },
      },
    },
  },
});

export const btBenchPlayers = createTheme({
  typography: {
    h5: {
      fontSize: "0.575rem",
      color: "white",
    },
    h4: {
      fontSize: "1.5rem",
      color: "white",
    },
    h3: {
      fontSize: "0.875rem",
      color: "white",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'selected', size: "large" },
          style: {
            backgroundColor: 'brown', // Example color
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
        {
          props: { variant: 'gk', size: "large" },
          style: {
            backgroundColor: 'orange', // Example color
            color: 'white',
            border: '1px solid white',
            // Add any other styles you want to customize
          },
        },
        // Add more variants as needed for other combinations of variant and size
      ],
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: '#82c341',
            color: "#ff0000", 
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
            border: '1px solid white',
          },
          "&.MuiButton-dark": {
            backgroundColor: defaultColors.quaternary, 
            color: "white", 
          },
          "&.MuiButton-light": {
            borderColor: "#f7fff7", 
            backgroundColor: "blue",
            color: "blue", 
          },
          display: "block",
          width: "23%",
          height: "80px",
          backgroundColor: defaultColors.quaternary,
          borderRadius: "12px", 
          padding: "5px 0px", 
          fontWeight: "bold", 
          fontSize: "12px", 
          textTransform: "uppercase", 
          margin: "2px 2px 2px 2px",
          textAlign: "center",
        },
      },
    },
  },
});


export const timeCounter = createTheme({
  typography: {
    h5: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "white",
    },
    h4: {
      fontSize: "1.5rem",
      color: "white",
    },
    h3: {
      fontSize: "0.875rem",
      color: "white",
    },
  },
  components: {
    MuiIconButton: {
      variants: [
        {
          props: { variant: 'selected', size: "large" },
          style: {
            backgroundColor: 'brown', // Example color
            color: 'white',
            
          },
        },
      ],
      styleOverrides: {
        root: {
          
          "&:hover": {
            backgroundColor: defaultColors.primary, // hover button color YELLOW
            color: "#1a535c",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
          },
          "&.MuiButton-dark": {
            backgroundColor: defaultColors.quaternary, 
            color: "white", 
          },
          "&.MuiButton-light": {
            borderColor: "#f7fff7", 
            backgroundColor: "blue",
            color: "white", 
            alignContent: 'center',
          },
          backgroundColor: defaultColors.secondary, // Action Button Background Color RED
          borderRadius: "12px", 
          padding: "0px 0px",
          fontWeight: "bold", 
          fontSize: "12px", 
          textTransform: "uppercase", 
          margin: "2px 2px 2px 2px",
          color: "white",
          display: "block",
          width: "100px",
          height: "30px",
          padding: "5px",
          justifyContent: 'center'
        },
      },
    },
  },
});

export const themesActions = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: defaultColors.primary, 
          "&:hover": {
            backgroundColor: "#ffe66d",
            color: "#ff0000", 
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
          },
          borderRadius: "18px",
          padding: "12px 24px",
          fontWeight: "bold",
          fontSize: "14px",
          textTransform: "uppercase",
        },
      },
    },
  },
});

