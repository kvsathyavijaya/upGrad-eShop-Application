import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import { CustomButton } from "../../common/custom-button";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import {
  sxStylesAppBar,
  sxStylesBoxWrapper,
  sxStylesInputBase,
  sxStylesLink,
  sxStylesSearch,
  sxStylesSearchBoxWrapper,
  sxStylesSearchIconWrapper,
} from "./index.style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, isAdmin, handleSignOut } = useAuth();

  const handleNavigation = (path) => {
    navigate(`/${path}`);
    console.log("nav", path);
  };

  const handleLogout = () => {
    handleNavigation("sign-in");
    console.log("logout");
    handleSignOut();
  };

  return (
    <Box>
      <AppBar sx={sxStylesAppBar}>
        <Toolbar>
          <Box sx={sxStylesBoxWrapper}>
            <ShoppingCart />
            <Typography>upGrad E-commerce</Typography>
          </Box>
          <Box sx={sxStylesSearchBoxWrapper}>
            {isLoggedIn && (
              <Box sx={sxStylesSearch}>
                <Box sx={sxStylesSearchIconWrapper}>
                  <SearchOutlined />
                </Box>
                <InputBase placeholder="Search…" sx={sxStylesInputBase} />
              </Box>
            )}
          </Box>
          <Box sx={sxStylesBoxWrapper}>
            {isLoggedIn ? (
              <>
                <CustomButton
                  handleClick={() => handleNavigation("products")}
                  variant="text"
                  sx={sxStylesLink}
                >
                  Home
                </CustomButton>
                {isAdmin && (
                  <CustomButton
                    handleClick={() => handleNavigation("add-product")}
                    variant="text"
                    sx={sxStylesLink}
                  >
                    Add Product
                  </CustomButton>
                )}
                <CustomButton handleClick={handleLogout} color="error">
                  Logout
                </CustomButton>
              </>
            ) : (
              <>
                <CustomButton
                  handleClick={() => handleNavigation("sign-in")}
                  variant="text"
                  sx={sxStylesLink}
                >
                  Login
                </CustomButton>{" "}
                <CustomButton
                  handleClick={() => handleNavigation("sign-up")}
                  variant="text"
                  sx={sxStylesLink}
                >
                  Sign Up
                </CustomButton>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
