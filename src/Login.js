// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// // function Copyright(props) {
// //   return (
// //     <Typography
// //       variant="body2"
// //       color="text.secondary"
// //       align="center"
// //       {...props}
// //     >
// //       {"Copyright © "}
// //       <Link color="inherit" href="https://mui.com/">
// //         Your Website
// //       </Link>{" "}
// //       {new Date().getFullYear()}
// //       {"."}
// //     </Typography>
// //   );
// // }

// const theme = createTheme();

// // onMobileNumberChange = (value) => {
// //   let error = "";
// //   value = value.trim();

// //   if (value === "") {
// //   } else if (/^0/.test(value)) {
// //     error = this.props.labels.startWith0Error;
// //   } else if (!/^\d+$/.test(value)) {
// //     error = "Alphabets & Special characters are not allowed";
// //   } else if (!/^[1-9]\d{9}$/.test(value)) {
// //     error = this.props.labels.invalidMobileNo;
// //   }
// // };
// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       mobileNumber: data.get("mobileNumber"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="mobileNumber"
//               label="Mobile Number"
//               name="onMobileNumberChange"
//               autoComplete="mobileNumber"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="OTP"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             {/* <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               //   label="Remember me"
//             /> */}
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   {/* Forgot password? */}
//                 </Link>
//               </Grid>
//               <Grid item>
//                 {/* <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link> */}
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
//       </Container>
//     </ThemeProvider>
//   );
// }

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
import axios from "axios";
// import Token from "./Token";
// import { signIn } from "./Token";
// import Config from "./config";

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

// const signIn = () => {
//   const endPointURL = `http://68.183.83.230:8765/userauth/users/sign-in/1065378638`;

//   let data = {
//     requestedRole: "PATIENT",
//   };

//   fetch(endPointURL, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   {
//     "userId": "5c8f67805bc728000d2172cb",
//     "mobileNumber": 1065378638,
//     "firstName": "Pratik",
//     "lastName": "Pansare",
//     "prefix": null,
//     "currentRole": "PATIENT",
//     "preferredLanguageId": "5ad887231fd47a000d03368d",
//     "_links": {
//         "self": {
//             "href": "http://68.183.83.230:8765/userauth/users/1065378638"
//         }
//     }
// }
//   console.log("endPointURL", endPointURL);

// .then(checkStatus)
// .then(parseJSON)
// .then((result) => {
//   const state = getState().application;
//   const languageList = state.languageList;
//   const selectedLanguage = _.find(languageList, {
//     languageId: result.preferredLanguageId,
//   });
//   const labels = state.labels;

//   result.preferredLanguageName = selectedLanguage
//     ? selectedLanguage.languageName
//     : "English";

//   dispatch({
//     type: Constants.USERDETAILS_RECEIVED,
//     payload: { user: result },
//   });
//   dispatch({
//     type: Constants.USER_SELECTED_LANGUAGE,
//     payload: selectedLanguage,
//   });

//   history.push("/otp");
//   localStorage.setItem("userDetails", JSON.stringify(result));
// })
// .catch((error) => {
//   if (error.statusCode === 404) {
//     dispatch({
//       type: Constants.USERDETAILS_RECEIVED,
//       payload: {
//         isNewUser: true,
//         user: { mobileNumber },
//       },
//     });
//     sessionStorage.setItem("mobileNo", mobileNumber);
//     history.push("/newuser");
//   } else {
//     dispatch({
//       type: Constants.SHOW_ERROR,
//       payload: { message: "Error while Signing In." },
//     });
//   }
// });
// };

const Login = () => {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const [user, setUser] = React.useState({ mobileNumber: "" });

  const [mobile, setMobile] = React.useState({});

  const signIn = async (mobileNumber) => {
    const payload = {
      requestedRole: "PATIENT",
    };
    const responce = await axios({
      method: "post",
      url: `http://68.183.83.230:8765/userauth/users/sign-in/${mobileNumber}`,
      data: payload, // you are sending body instead

      headers: {
        // Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("linkId", responce.data);
    setMobile(responce.data);
  };
  const signIn2 = () => {
    alert("number");
  };
  //   React.useEffect(() => {
  //     // axios
  //     //   .post("/userauth/users/sign-in/{mobile_numer}")
  //     //   .then((response) => {
  //     //     setMobile(response.data);
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log("Error", error);
  //     //   });
  //     signIn();
  //   }, []);
  //   console.log("signIn", signIn);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      number: data.get("number"),
      OTP: data.get("OTP"),
    });
  };
  const handleChange = (event) => {
     event.target.value;
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
              <img src="data:image/jpeg;base64,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" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Enter Your Mobile number
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="number"
                label="Mobile Number"
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
                type="OTP"
                id="OTP"
                autoComplete="current-OTP"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
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
