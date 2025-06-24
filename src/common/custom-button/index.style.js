export const sxStylesButton = (color) => ({
  padding: "8px",
  margin: "8px",
  ...(color === "primary" && {
    bgcolor: "#3f51b5",
    "&:hover": {
      bgcolor: "#303f9f",
    },
  }),
});
