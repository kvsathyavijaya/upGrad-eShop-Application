import { Grid } from "@mui/material";
import { NavigationBar } from "../../component/navigation-bar";
import { Outlet } from "react-router-dom";
import {
  sxStylesContentLayout,
  sxStylesLayout,
  sxStylesNavLayout,
} from "./index.style";

export const Layout = () => {
  return (
    <Grid container direction="column" sx={sxStylesLayout}>
      <Grid item="true" sx={sxStylesNavLayout}>
        <NavigationBar />
      </Grid>
      <Grid item="true" sx={sxStylesContentLayout}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
