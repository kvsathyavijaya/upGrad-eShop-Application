export const customSelectStyles = {
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
