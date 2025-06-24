import { Typography } from "@mui/material";
import { CustomForm } from "../../common/custom-form";

export const AddProductForm = () => {
  const fields = [
    {
      componentType: "input-field",
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      componentType: "input-field",
      name: "category",
      label: "Category",
      type: "creatable-select",
      required: true,
      options: [
        { value: "developer", label: "Developer" },
        { value: "designer", label: "Designer" },
        { value: "manager", label: "Manager" },
      ],
    },
    {
      componentType: "input-field",
      name: "manufacturer",
      label: "Manufacturer",
      type: "text",
      required: true,
    },
    {
      componentType: "input-field",
      name: "availableItems",
      label: "Available Items",
      type: "number",
      required: true,
    },
    {
      componentType: "input-field",
      name: "price",
      label: "Price",
      type: "text",
      required: true,
    },
    {
      componentType: "input-field",
      name: "imageUrl",
      label: "Image URL",
      type: "url",
      required: true,
    },
    {
      componentType: "input-field",
      name: "contact",
      label: "Product Description",
      type: "text",
      required: true,
    },
    {
      componentType: "button",
      label: "Save Product",
      type: "submit",
      fullWidth: true,
    },
    {
      componentType: "button",
      label: "Sign Up",
      type: "submit",
      fullWidth: true,
      halfGrid: true,
    },
    {
      componentType: "button",
      label: "Sign Up",
      type: "submit",
      fullWidth: true,
      halfGrid: true,
      variant: "outlined",
    },
  ];

  const handleFormSubmit = (data) => {
    console.log(data); // Handle your form submission logic here
  };

  //   const buttons = [
  //     // { label: "Sign Up", type: "submit", fullWidth: false },
  //     // { label: "Sign Up", type: "submit", fullWidth: true, halfGrid: true },
  //     // { label: "Sign Up", type: "submit", fullWidth: true, halfGrid: true },
  //     { label: "Save Product", type: "submit", fullWidth: true },
  //   ];

  return (
    <CustomForm fields={fields} onSubmit={handleFormSubmit}>
      <Typography component="h1" variant="h5" sx={{ marginBottom: "16px" }}>
        Add Product
      </Typography>
    </CustomForm>
  );
};
