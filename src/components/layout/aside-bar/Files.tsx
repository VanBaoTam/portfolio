import { FILES } from '@/constants';
import { Box } from '@mui/material';

function Files() {
  return (
    <Box>
      {FILES.map((ele) => {
        return (
          <Box key={ele.id} pb={1} ml={'48px'}>
            {ele.name}
          </Box>
        );
      })}
    </Box>
  );
}

export default Files;
