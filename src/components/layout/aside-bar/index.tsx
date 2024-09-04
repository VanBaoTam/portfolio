import { Grid } from '@/components/mui';
import FileBar from './FileBar';
import IconBar from './IconBar';

function AsideBar() {
  return (
    <Grid container>
      <Grid size={3}>
        <IconBar />
      </Grid>
      <Grid size={9} sx={{ flexGrow: 1 }}>
        <FileBar />
      </Grid>
    </Grid>
  );
}

export default AsideBar;
