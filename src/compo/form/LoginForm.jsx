import React, { useContext } from "react";
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

const LoginForm = () => {
  const {toggleMode } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
      {renderInput("User Name", "Username", "text", "Please enter your username")}
      {renderInput("Password", "password", "password", "Please enter your password")}

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
        onClick={toggleMode}
        underline="hover"
        fontSize="14px"
      >
        {"I don't have an account?"}
      </Link>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2.5 }}>
        {[GoogleIcon, GitHubIcon, LinkedInIcon].map((Icon, idx) => (
          <Icon
            key={idx}
            sx={{
              fontSize: 40,
              cursor: "pointer",
              transition: "color 0.3s",
              "&:hover": { color: "#9198ffff" },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LoginForm;
