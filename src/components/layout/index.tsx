import AsideBar from "@components/layout/aside-bar";
import { Grid } from "@components/mui";
import { Fragment, ReactNode } from "react";
import { COLORS } from "@constants";
import Header from "./header";
function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      <Grid
        container
        sx={{
          backgroundColor: COLORS.BACKGROUND.MAIN,
          color: COLORS.TYPOGRAPHY.MAIN,
          width: "100%",
          height: "100vh",
        }}
      >
        <Grid size={3}>
          <AsideBar />
        </Grid>
        <Grid size={9}>{children}</Grid>
      </Grid>
    </Fragment>
  );
}

export default MainLayout;
