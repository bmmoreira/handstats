import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Box, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import { defaultColors } from "../Utils/constants"; 
import { height } from "@mui/system";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "340px",
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
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiInputBase-input': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
            backgroundColor: defaultColors.quaternary,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          "&.Mui-focused": {
            color: 'white',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'white',
        },
        select: {
          color: 'white',
          '&:before': {
            borderColor: 'white',
          },
          '&:after': {
            borderColor: 'white',
          },
          backgroundColor: defaultColors.quaternary,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: 'white',
          "&.Mui-selected": {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            "&:hover": {
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
            },
          },
          "&:hover": {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
        },
      },
    },
  },
});

function Player() {
  const [gender, setGender] = React.useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  

  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: "center", padding: "0px", backgroundColor: defaultColors.quaternary }}>
        <h2 style={{ color: "white" }}>New Player</h2>
        <img src="src/assets/images/player.png" alt="Player Logo" style={{ width: "96px" }} />
      </div>
      <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', backgroundColor: defaultColors.quaternary, p: 2 }}>
        <Box sx={{ width: 340 }}>
          <form>
            <TextField 
              fullWidth 
              id="player-name" 
              label="Name" 
              variant="outlined" 
              margin="normal" 
            />
            <TextField 
              fullWidth 
              id="team-name" 
              label="Team" 
              variant="outlined" 
              margin="normal" 
            />
            <TextField 
              fullWidth 
              id="category" 
              label="Category" 
              variant="outlined" 
              margin="normal" 
            />
            <TextField 
              fullWidth 
              id="description" 
              label="Description (optional)" 
              variant="outlined" 
              margin="normal" 
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="gender-select-label">Gender</InputLabel>
              <Select
                labelId="gender-select-label"
                id="gender-select"
                value={gender}
                label="Gender"
                onChange={handleGenderChange}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: defaultColors.quaternary, // Set the dropdown menu's background color
                      color: 'white', // Set the dropdown menu's text color
                    },
                  },
                }}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" type="submit" sx={{ mt: 2, width: '100%' }}>
              Add Player
            </Button>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
  
}

export default Player;