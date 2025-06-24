import { Typography, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  sxStylesFormWrapper,
  sxStylesHeaderTypography,
  sxStylesIcon,
} from "./index.style";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { CustomForm } from "../../common/custom-form";
import { toast } from "react-toastify";

export const SignIn = () => {
  const { handleSignIn } = useAuth();
  const navigate = useNavigate();

  const fields = [
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
      componentType: "button",
      label: " Sign In",
      type: "submit",
      fullWidth: true,
    },
    {
      componentType: "link",
      label: "Don't have an account? Sign Up",
      href: "/sign-up",
    },
  ];

  const handleFormSubmit = (data) => {
    console.log(data);
    handleSignIn(true);
    navigate("/products");
    toast.success("user logged in succesfully");
  };

  return (
    <CustomForm fields={fields} onSubmit={handleFormSubmit}>
      <Box style={sxStylesFormWrapper}>
        <LockOutlinedIcon
          fontSize="large"
          color="secondary"
          style={sxStylesIcon}
        />

        <Typography component="h1" variant="h5" sx={sxStylesHeaderTypography}>
          Sign In
        </Typography>
      </Box>
    </CustomForm>
  );
};
