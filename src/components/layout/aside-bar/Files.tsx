'use client';
import { COLORS, FILES } from '@/constants';
import { redirect } from '@/utils';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
function Files() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Box width={'100%'}>
      {FILES.map((ele) => {
        return (
          <Box
            key={ele.id}
            pl={'36px'}
            sx={{
              backgroundColor:
                ele.file === pathname ? COLORS.BACKGROUND.ACTIVE : '',
            }}
            onClick={() => {
              redirect(router, ele.file);
            }}>
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
