import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";
import { Grid } from "@mui/material";
import Header from "../header/Header";

export const Layout = () => {
  return (
    <Grid container>
      <Grid item>
        <Navbar sx={{ height: "100vh" }} />
      </Grid>
      <Grid item xs>
        <Header />
        <Outlet />
      </Grid>
    </Grid>
  );
};
