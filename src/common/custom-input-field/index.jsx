import { TextField } from "@mui/material";

export const CustomInputField = ({
  name,
  label,
  autoComplete,
  onBlur = () => {},
  type = "text",
  variant = "outlined",
  required = false,
  fullWidth = true,
  autoFocus = false,
  sx = {},
}) => {
  return (
    <TextField
      onBlur={onBlur}
      type={type}
      variant={variant}
      sx={sx}
      required={required}
      fullWidth={fullWidth}
      id={name}
      label={label}
      name={name}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
    />
  );
};
