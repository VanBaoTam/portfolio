import { MENU_BAR } from '@/constants';
import { Box, Typography } from '@mui/material';

function MenuBar() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {MENU_BAR.map((ele) => {
        return (
          <Typography key={ele} fontSize={14} ml={2} fontWeight={500}>
            {ele}
          </Typography>
        );
      })}
    </Box>
  );
}

export default MenuBar;
