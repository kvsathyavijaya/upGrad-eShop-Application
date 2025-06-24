import { Button } from "@mui/material";

export const CustomButton = ({ handleClick, children, ...props }) => {
  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};
