// src/common/custom-input-field.jsx
import TextField from "@mui/material/TextField";

export const CustomInputField = ({ name, label, type, required, onChange, ...props }) => (
  <TextField
    margin="normal"
    fullWidth
    name={name}
    label={label}
    type={type}
    required={required}
    onChange={onChange}
    {...props}
  />
);
