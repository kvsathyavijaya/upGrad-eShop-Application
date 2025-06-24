import { Button } from "@mui/material";
import { sxStylesButton } from "./index.style";

export const CustomButton = ({
  children,
  handleClick,
  fullWidth = false,
  variant = "contained",
  disabled = false,
  color = "primary",
  type = "button",
  sx = {},
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      onClick={handleClick}
      disabled={disabled}
      color={color}
      type={type}
      sx={{
        ...sxStylesButton(color),
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};
