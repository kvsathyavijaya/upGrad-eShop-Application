import { Typography } from "@mui/material";
import { CustomForm } from "../../common/custom-form";

export const ModifyProductForm = () => {
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
      label: "Modify Product",
      type: "submit",
      fullWidth: true,
    },
  ];

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <CustomForm fields={fields} onSubmit={handleFormSubmit}>
      <Typography component="h1" variant="h5" sx={{ marginBottom: "16px" }}>
        Modify Product
      </Typography>
    </CustomForm>
  );
};
