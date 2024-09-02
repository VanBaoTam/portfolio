import { COLORS, FILES } from '@/constants';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

function Files() {
  return (
    <Box>
      {FILES.map((ele) => {
        return (
          <Box key={ele.id} ml={'36px'}>
            <Stack alignItems="center" direction="row">
              <Image
                key={ele.icon}
                src={`/` + ele.icon}
                width={18}
                height={18}
                alt={ele.icon}
              />
              <Typography
                sx={{ px: 1, py: '1px', color: COLORS.TYPOGRAPHY.SECONDARY }}>
                {ele.name}
              </Typography>
            </Stack>
          </Box>
        );
      })}
    </Box>
  );
}

export default Files;
