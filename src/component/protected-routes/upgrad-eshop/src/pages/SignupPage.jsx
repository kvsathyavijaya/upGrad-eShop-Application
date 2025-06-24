import React from "react";
import { Typography, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { CustomForm } from "../common/custom-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fields = [
  {
    componentType: "input-field",
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    componentType: "input-field",
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    componentType: "input-field",
    label: "Email Address",
    name: "email",
    type: "email",
    required: true,
  },
  {
    componentType: "input-field",
    name: "password",
    label: "Password",
    type: "password",
    required: true,
  },
  {
    componentType: "input-field",
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    required: true,
  },
  {
    componentType: "input-field",
    name: "contactNumber",
    label: "Contact Number",
    type: "tel",
    required: true,
  },
  {
    componentType: "button",
    label: "Sign Up",
    type: "submit",
    fullWidth: true,
  },
  {
    componentType: "link",
    label: "Already have an account? Sign In",
    href: "/login",
  },
];

export const SignUpPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    try {
      await axios.post("https://dev-project-ecommerce.upgrad.dev/api/auth/signup", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        contactNumber: data.contactNumber,
        role: ["USER"],  // <-- Added role here
      });

      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <CustomForm fields={fields} onSubmit={handleFormSubmit}>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PersonAddIcon
          fontSize="large"
          sx={{
            p: 1,
            bgcolor: "secondary.main",
            color: "white",
            borderRadius: "50%",
          }}
        />
        <Typography component="h1" variant="h5" sx={{ pt: 1, color: "text.primary" }}>
          Sign Up
        </Typography>
      </Box>
    </CustomForm>
  );
};

export default SignUpPage;
