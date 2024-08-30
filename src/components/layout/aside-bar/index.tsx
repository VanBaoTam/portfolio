import { Grid } from "@/components/mui";
import IconBar from "./IconBar";
import FileBar from "./FileBar";

function AsideBar() {
  return (
    <Grid container>
      <Grid size={3}>
        <IconBar />
      </Grid>
      <Grid size={8}>
        <FileBar />
      </Grid>
    </Grid>
  );
}

export default AsideBar;
