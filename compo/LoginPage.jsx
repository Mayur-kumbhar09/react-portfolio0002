// import React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import LoginIcon from "@mui/icons-material/Login";
// import Button from "@mui/material/Button";
// import Face6Icon from "@mui/icons-material/Face6";
// import TextField from "@mui/material/TextField";
// import { useForm } from "react-hook-form";
// import Link from "@mui/material/Link";
// import GoogleIcon from "@mui/icons-material/Google";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
//   width: "25%",
//   height: "50%",
//   position: "absolute",
//   top: "55%",
//   left: "50%",
//   zIndex: "2",
//   transform: "translate(-50%, -50%)",
//   boxShadow:
//     "rgba(186, 223, 255, 0.48) 6px 2px 16px 0px, rgba(204, 204, 204, 0.8) -6px -2px 16px 0px",
// }));

// const LoginPage = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   console.log(watch("example"));
//   const MyStyle = {
//     display: "flex",
//     justifyContent: "center",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "20px",
//     width: "75%",
//     padding: "10px 14px",
//   };
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid size={4} sx={{ margin: "auto" }}>
//           <Item>
//             <Paper
//               sx={{
//                 width: "fit-content",
//                 margin: "auto",
//                 padding: "10px 12px",
//                 position: "absolute",
//                 top: "0%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 border: "0px solid black",
//                 borderRadius: "50%",
//                 boxShadow:
//                   "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
//               }}
//             >
//               <Typography
//                 variant="h5"
//                 sx={{ fontWeight: "650", color: "#040e9cff" }}
//               >
//                 <Face6Icon sx={{ fontSize: "65px" }} />
//               </Typography>
//             </Paper>
//             <Box
//               sx={{
//                 marginTop: "10%",
//                 width: "100%",
//                 height: "fit-content",
//                 display: "flex",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "45vh",
//                   margin: "auto",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   flexDirection: "column",
//                 }}
//               >
//                 <form onSubmit={handleSubmit(onSubmit)} style={MyStyle}>
//                   <TextField
//                     sx={{ width: "100%" }}
//                     label="User Name"
//                     {...register("Username", {
//                       required: "Please enter your username",
//                     })}
//                     error={!!errors.Username}
//                     // helperText={errors.Username?.message}
//                   />

//                   <TextField
//                     sx={{ width: "100%" }}
//                     label="Password"
//                     type="password"
//                     {...register("password", { required: true })}
//                     error={!!errors.password}
//                   />
//                   <span>
//                     <Link to="/createNewPass" sx={{ textDecoration: "none" }}>
//                       Forget Password ?
//                     </Link>
//                   </span>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     color="success"
//                     sx={{
//                       width: "100%",
//                       height: "55px",
//                       "&:hover": {
//                         backgroundColor: "#040e9cff",
//                         color: "#fff",
//                       },
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         color: "#ffffffff",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       Submit <LoginIcon />
//                     </Typography>
//                   </Button>
//                   <hr
//                     style={{
//                       width: "100%",
//                       marginTop: "0px",
//                       borderColor: "#ccc",
//                     }}
//                   />
//                   <span>
//                     <Link
//                       to="/createAcc"
//                       sx={{ textDecoration: "none", marginTop: "0px" }}
//                     >
//                       I don't have an account ?
//                     </Link>
//                   </span>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       gap: "20px",
//                     }}
//                   >
//                     <GoogleIcon
//                       sx={{
//                         fontSize: "40px",
//                         "&:hover": {
//                           color: "#040e9cff",
//                         },
//                       }}
//                     />
//                     <GitHubIcon
//                       sx={{
//                         fontSize: "40px",
//                         "&:hover": {
//                           color: "#040e9cff",
//                         },
//                       }}
//                     />
//                     <LinkedInIcon
//                       sx={{
//                         fontSize: "40px",
//                         "&:hover": {
//                           color: "#040e9cff",
//                         },
//                       }}
//                     />
//                   </Box>
//                 </form>
//               </Box>
//             </Box>
//           </Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default LoginPage;
// import React, { useState, createContext } from "react";
// import { Box, Grid, Paper } from "@mui/material";
// import Face6Icon from "@mui/icons-material/Face6";
// import LoginForm from "../compo/form/LoginForm";
// import "./Styles/flipcard.css";
// import CreateAcc from "./form/CreateAcc";
// // Create context to pass toggle function and state
// export const MyContext = createContext();

// const LoginPage = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [flipped, setFlipped] = useState(false);

//   const toggleMode = () => {
//     setIsSignup((prev) => !prev);
//     setFlipped(true);
//     console.log("The form toggle button was clicked.");
//   };

//   return (
//     <MyContext.Provider value={{ isSignup, toggleMode }}>
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12}>
//             {/* Login / Signup Form */}
//             <Box className="flip-card-container">
//               <Paper
//                 className={`flip-card-inner ${flipped ? "flipped" : ""}`}
//                 sx={{
//                   position: "absolute",
//                   top: "55%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   width: "25%",
//                   height: "50%",
//                   padding: 2,
//                   zIndex: 2,
//                   textAlign: "center",
//                   backgroundColor: "#fff",
//                   boxShadow:
//                     "rgba(186, 223, 255, 0.48) 6px 2px 16px 0px, rgba(204, 204, 204, 0.8) -6px -2px 16px 0px",

//                   // Animated overlay
//                   "&::before": {
//                     content: '""',
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     background: "linear-gradient(120deg, #55000d91, #dd5582d0)",
//                     transformOrigin: "bottom right",
//                     transform: isSignup ? "scale(1)" : "scale(0)",
//                     transition: "transform 3.5s ease-in-out",
//                     zIndex: -1,
//                   },
//                 }}
//               >
//                 {/* Avatar Icon */}
//                 <Paper
//                   sx={{
//                     width: "fit-content",
//                     margin: "auto",
//                     padding: "10px 12px",
//                     position: "absolute",
//                     top: "0%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     borderRadius: "50%",
//                     boxShadow:
//                       "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
//                   }}
//                 >
//                   <Face6Icon sx={{ fontSize: 65, color: "#040e9cff" }} />
//                 </Paper>
//                 {/* Front: Login */}
//                 <Box className="flip-card-front">
//                   <LoginForm
//                     isSignup={isSignup}
//                     toggleMode={toggleMode}
//                     setFlipped={setFlipped}
//                   />
//                 </Box>
//               </Paper>
//               {/* Back: Signup */}
//               <Paper
//                 className={`flip-card-inner ${flipped ? "flipped" : ""}`}
//                 sx={{
//                   position: "absolute",
//                   top: "55%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   width: "25%",
//                   height: "50%",
//                   padding: 2,
//                   zIndex: 2,
//                   textAlign: "center",
//                   backgroundColor: "#fff",
//                   boxShadow:
//                     "rgba(186, 223, 255, 0.48) 6px 2px 16px 0px, rgba(204, 204, 204, 0.8) -6px -2px 16px 0px",

//                   // Animated overlay
//                   "&::before": {
//                     content: '""',
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     background: "linear-gradient(120deg, #55000d91, #dd5582d0)",
//                     transformOrigin: "bottom right",
//                     transform: isSignup ? "scale(1)" : "scale(0)",
//                     transition: "transform 3.5s ease-in-out",
//                     zIndex: -1,
//                   },
//                 }}
//               >
//                 {/* Avatar Icon */}
//                 <Paper
//                   sx={{
//                     width: "fit-content",
//                     margin: "auto",
//                     padding: "10px 12px",
//                     position: "absolute",
//                     top: "0%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     borderRadius: "50%",
//                     boxShadow:
//                       "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
//                   }}
//                 >
//                   <Face6Icon sx={{ fontSize: 65, color: "#040e9cff" }} />
//                 </Paper>
//                 <Box className="flip-card-back">
//                   <CreateAcc
//                     isSignup={isSignup}
//                     toggleMode={toggleMode}
//                     setFlipped={setFlipped}
//                   />
//                 </Box>
//               </Paper>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </MyContext.Provider>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LoginForm from "../compo/form/LoginForm";
import { Container } from "@mui/material";
import { createContext } from "react";
import CreateAcc from "./form/CreateAcc";

const LoginPage = () => {
  const [disp, setDisp] = useState(true);
  const MyContaxt = createContext();
  const toggleMode = () => {
    console.log("The toggle mode get clicked.....");
    setDisp(false);
  };
  return (
    <MyContaxt.Provider value={{toggleMode,  setDisp}}>
      {disp === true ? (
        <Container maxWidth="lg">
          <Card sx={{ width: "420px", margin: "auto" }}>
            <CardContent>
              <LoginForm/>
            </CardContent>
          </Card>
        </Container>
      ) : (
        <Container maxWidth="lg">
          <Card sx={{ width: "420px", margin: "auto" }}>
            <CardContent>
              <CreateAcc/>
            </CardContent>
          </Card>
        </Container>
      )}
    </MyContaxt.Provider>
  );
};

export default {LoginPage, MyContaxt};
