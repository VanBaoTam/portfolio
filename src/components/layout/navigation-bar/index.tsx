'use client';
import { Box, Typography } from '@/components/mui';
import { COLORS, FILES } from '@/constants';
import { redirect } from '@/utils';
import { Stack } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

function NavigationBar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Box borderBottom={`1px solid ${COLORS.BORDER.MAIN}`} display={'flex'}>
      {FILES.map((ele) => {
        return (
          <Box
            key={ele.id}
            sx={{
              width: 150,
              backgroundColor:
                ele.file === pathname
                  ? COLORS.BACKGROUND.ACTIVE
                  : COLORS.BACKGROUND.SECONDARY,
              borderRight: `1px solid ${COLORS.BORDER.MAIN}`,
            }}
            onClick={() => {
              redirect(router, ele.file);
            }}>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent={'center'}>
              <Image
                key={ele.icon}
                src={`/` + ele.icon}
                width={18}
                height={18}
                alt={ele.icon}
              />
              <Typography sx={{ p: '8px', color: COLORS.TYPOGRAPHY.SECONDARY }}>
                {ele.name}
              </Typography>
            </Stack>
          </Box>
        );
      })}
    </Box>
  );
}

export default NavigationBar;
