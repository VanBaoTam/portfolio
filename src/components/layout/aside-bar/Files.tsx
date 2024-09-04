'use client';
import { COLORS, FILES } from '@/constants';
import { redirect } from '@/utils';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

function Files(props: { isShown: boolean }) {
  const { isShown } = props ?? {};
  const pathname = usePathname();
  const router = useRouter();
  console.log(isShown);

  return (
    <Box
      width={'100%'}
      sx={{
        height: isShown ? '200px' : '0px',
        overflow: 'hidden',
        transition: 'height 0.4s ease-in-out',
      }}>
      {FILES.map((ele) => (
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
      ))}
    </Box>
  );
}

export default Files;
