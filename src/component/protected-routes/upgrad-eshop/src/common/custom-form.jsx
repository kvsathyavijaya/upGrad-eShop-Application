import React, { useState } from "react";
import { Container, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import CreatableSelect from "react-select/creatable";
import { CustomInputField } from "./custom-input-field";
import { CustomButton } from "./custom-button";

export const CustomForm = ({ fields, onSubmit, children: formHeader }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Grid container sx={{ padding: 2 }} maxWidth="xs">
        <Grid
          container
          size={12}
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex", marginBottom: 2 }}
        >
          {formHeader}
        </Grid>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            {fields.map((field, index) => (
              <Grid
                size={{ xs: field.halfGrid ? 6 : 12 }}
                key={`${field.name}.${index}`}
                sx={{
                  marginLeft: field.componentType === "button" ? "-8px" : "0px",
                }}
              >
                {field.componentType === "input-field" && (
                  <>
                    {field.type === "creatable-select" ? (
                      <CreatableSelect
                        isClearable
                        options={field.options}
                        onChange={(option) =>
                          handleInputChange(
                            field.name,
                            option ? option.value : ""
                          )
                        }
                        placeholder={field.label}
                        styles={customSelectStyles}
                      />
                    ) : (
                      <CustomInputField
                        name={field.name}
                        label={field.label}
                        type={field.type}
                        required={field.required}
                        autoComplete={field.autoComplete}
                        sx={field.sx}
                        onChange={(e) =>
                          handleInputChange(field.name, e.target.value)
                        }
                      />
                    )}
                  </>
                )}

                {field.componentType === "button" && (
                  <CustomButton
                    type={field.type}
                    variant={field.variant}
                    color={field.color}
                    fullWidth={field.fullWidth}
                    onClick={field.onClick}
                  >
                    {field.label}
                  </CustomButton>
                )}

                {field.componentType === "link" && (
                  <Link href={field.href} variant="body2">
                    {field.label}
                  </Link>
                )}
              </Grid>
            ))}
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#fff", // Ensure control has a background color
    zIndex: 100, // Ensure z-index is high enough
    height: "55px",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 1000, // Ensure the menu is displayed on top
    backgroundColor: "#fff", // Add a background color to the dropdown
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#f0f0f0" : "#fff", // Highlight on hover
    color: "#333",
  }),
};

export default CustomForm;
