import { Box, Typography } from '@/components/mui';
import { COLORS } from '@/constants';
function Header() {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BACKGROUND.MAIN,
        color: COLORS.TYPOGRAPHY.MAIN,
        p: 1,
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Box
        sx={{
          border: `1px solid ${COLORS.BORDER.MAIN}`,
          py: '1px',
          textAlign: 'center',
          width: '40%',

          backgroundColor: COLORS.BACKGROUND.HEADER,
          borderRadius: 2,
        }}>
        <Typography fontSize={'0.875rem'}> Van Bao Tam - Portfolio</Typography>
      </Box>
    </Box>
  );
}

export default Header;
