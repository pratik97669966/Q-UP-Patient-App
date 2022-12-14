import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import basic from "basic-authorization-header";
import axios from "axios";
var finalMobileNumber = "";
var finalOtp = "";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#/">
        Qup App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const [user, setUser] = React.useState({ mobileNumber: "" });

  const [mobile, setMobile] = React.useState({});

  const [otp, setOtp] = React.useState("");

  const signIn = async () => {
    const payload = {
      requestedRole: "PATIENT",
    };
    const responce = await axios({
      method: "post",
      url: `https://api.qupdev.com/userauth/users/sign-in/` + finalMobileNumber,
      // url: `http://68.183.83.230:8765/userauth/users/sign-in/`+stringname,
      data: payload, // you are sending body instead

      headers: {
        // "Authorization": `bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("linkId", responce.data);
    setMobile(responce.data);
  };

  const verifyOtp = async () => {
    console.log("button Clicked");
    const data2 = new FormData();
    data2.append("scope", "openid");
    data2.append("grant_type", "password");
    data2.append("username", finalMobileNumber);
    data2.append("password", finalOtp);

    const responce = await axios({
      
      method: "post",
      url: `https://api.qupdev.com/userauth/oauth/token`,

      headers: {
        'Authorization': 'Basic '+btoa('qup-mobile:mob@46$qup'),
      },
      data: data2, // you are sending body instead
    });
    console.log("otp", responce.data);
    setOtp(responce.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  const handleChange = (event) => {
    finalMobileNumber = event.target.value + "";
  };
  const handelOtp = (event) => {
    finalOtp = event.target.value + "";
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://qupapp.com/assets/img/doctor-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://qupapp.com/assets/img/favicon.png"
              sx={{ width: 90, height: 90 }}
            />
            <Typography variant="h5" component="h5">
              Welcome
            </Typography>
            ;
            <Typography component="h6" variant="h6">
              Book appointment for your doctor
            </Typography>
            <Box
              component="form"
              noValidate
              alignContent={"flex-end"}
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="number"
                label="Enter your mobile number"
                name="number"
                autoComplete="number"
                onChange={handleChange}
                autoFocus
              />

              <Button
                onClick={signIn}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send OTP
              </Button>
              <TextField
                margin="normal"
                required
                fullWidth
                name="OTP"
                label="OTP"
                onChange={handelOtp}
                type="OTP"
                id="OTP"
                autoComplete="current-OTP"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                onClick={verifyOtp}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Next
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot OTP?
                  </Link>
                </Grid> */}
                {/* <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid> */}
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
