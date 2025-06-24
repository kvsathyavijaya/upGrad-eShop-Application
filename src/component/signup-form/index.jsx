import { Typography, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  sxStylesFormWrapper,
  sxStylesIcon,
  sxStylesTypography,
} from "./index.style";
import { CustomForm } from "../../common/custom-form";

export const SignUp = () => {
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
      name: "contact",
      label: "Contact Number",
      type: "tel",
      required: true,
    },
    {
      componentType: "button",
      label: "Sign Up",
      type: "submit",
      fullWidth: true,
      onClick: () => {},
    },
    {
      componentType: "link",
      label: "Already have an account? Sign In",
      href: "/",
    },
  ];

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <CustomForm fields={fields} onSubmit={handleFormSubmit}>
      <Box style={sxStylesFormWrapper}>
        <PersonAddIcon fontSize="large" style={sxStylesIcon} />
        <Typography component="h1" variant="h5" sx={sxStylesTypography}>
          Sign Up
        </Typography>
      </Box>
    </CustomForm>
  );
};
