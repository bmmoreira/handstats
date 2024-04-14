import React, { useContext, useState } from "react";
import Axios from "axios";
import DispatchContext from "../../DispatchContext";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../Utils/constants";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loginTheme } from "../Utils/Themes";
import { defaultColors } from "../Utils/constants";
import Input from "@mui/material/Input";
import { styled } from "@mui/system";
import loginBg from "../../assets/images/login_bg.png";

export default function Login() {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // get token from db if succefully logged
      const response = await Axios.post(`${LOGIN_URL}/login`, {
        username,
        password,
      });
      if (response.data) {
        console.log(response);
        // save values from response to local storage to remember user in the web browser's local storage, so that way they persist, or we can access them later
        appDispatch({ type: "login", data: response.data });
        appDispatch({
          type: "flashMessages",
          value: t("succefully_login"),
        });
        navigate(`/handball`);
      } else {
        console.log("incorrect username /password");
        appDispatch({
          type: "flashMessages",
          value: t("invalid_username"),
        });
      }
    } catch (error) {
      console.log("there was a problem in log in");
    }
  }

  const form = (
    <ThemeProvider theme={loginTheme}>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row ">
            <h4 style={{ margin: "0px 30px 0px 0px" }}>
              <Link
                to={`/`}
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <LockIcon />
                Login
              </Link>
            </h4>
          </div>
          <div className="row " style={{marginTop: '20px'}}>
            <Input
              aria-label="username"
              placeholder={t("username")}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              name="username"
              type="text"
            />
          </div>
          <div className="row " style={{marginTop: '10px'}}>
            <Input
              aria-label="Password"
              placeholder={t("password")}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              type="password"
            />
          </div>
          <div className="row d-flex justify-content-center" style={{marginTop: '10px'}}>
            <Button aria-label="login" endIcon={<PersonIcon />} type="submit">
              {t("signin")}
            </Button>
          </div>
        </div>
      </form>
    </ThemeProvider>
  );

  return (
    <div
      className="row middle-row g-0"
      style={{
        backgroundColor: defaultColors.quaternary,
        backgroundImage: `url(${loginBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="col d-flex justify-content-center align-items-center">
        <div className="row-content border-0 d-flex justify-content-center align-items-center">
          {/* Start Component content */}
          {form}
          {/* End Component content */}
        </div>
      </div>
    </div>
  );
}

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 240px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 4px 10px;
  margin: 10px 10px 10px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
