import React,{useContext}from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  Google as GoogleIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Login as LoginIcon,
} from "@mui/icons-material";


const CreateAcc = () => {
  const {setDisp } = useContext(MyContaxt);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log("Signup data:", data);
    // Optionally flip back after a delay
    setDisp(true);
  };

  const renderInput = (label, name, type = "text", validationMsg) => (
    <TextField
      fullWidth
      label={label}
      type={type}
      {...register(name, { required: validationMsg })}
      error={!!errors[name]}
      helperText={errors[name]?.message}
    />
  );
  const handelClick = () => {
    // setFlipped(!false);
    console.log("the btn get clicked....");
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2.5,
        width: "100%",
        maxWidth: 300,
        mx: "auto",
      }}
    >
      {renderInput(
        "First Name",
        "FirstName",
        "text",
        "Please enter your First Name"
      )}
      {renderInput(
        "Last Name",
        "LastName",
        "text",
        "Please enter your Last Name"
      )}
      {renderInput("Email", "Email", "email", "Please enter your Email")}
      {renderInput(
        "Password",
        "Password",
        "password",
        "Please enter your Password"
      )}

      <Link href="#" underline="hover" fontSize="14px">
        Forgot Password?
      </Link>

      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        sx={{
          height: 55,
          "&:hover": {
            backgroundColor: "#040e9cff",
            color: "#fff",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          Submit <LoginIcon />
        </Typography>
      </Button>

      <Divider sx={{ width: "100%", borderColor: "#ccc" }} />

      <Link
        component="button"
        underline="hover"
        fontSize="14px"
        onClick={handelClick}
      >
        {"I already have an account"}
      </Link>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2.5 }}>
        {[GoogleIcon, GitHubIcon, LinkedInIcon].map((Icon, idx) => (
          <Icon
            key={idx}
            sx={{
              fontSize: 40,
              cursor: "pointer",
              transition: "color 0.3s",
              "&:hover": { color: "#040e9cff" },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CreateAcc;
