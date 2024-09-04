import { Grid, Typography } from '@/components/mui';
import { COLORS } from '@/constants';
import MenuBar from './MenuBar';
function Header() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: COLORS.BACKGROUND.MAIN,
        color: COLORS.TYPOGRAPHY.MAIN,
        p: 1,
      }}>
      <Grid size={4}>
        <MenuBar />
      </Grid>
      <Grid
        size={6}
        sx={{
          border: `1px solid ${COLORS.BORDER.MAIN}`,
          py: '1px',
          textAlign: 'center',
          width: '40%',
          backgroundColor: COLORS.BACKGROUND.HEADER,
          borderRadius: 2,
        }}>
        <Typography fontSize={'0.875rem'}> Van Bao Tam - Portfolio</Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
