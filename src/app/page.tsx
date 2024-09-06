import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Box sx={{}}>
        <Typography fontWeight={700}>Xin chào, My name is</Typography>
        <Typography fontWeight={700} fontFamily={'__Be_Vietnam_Pro_4d2bfa'}>
          Văn Bảo Tâm.
        </Typography>
        <Typography fontWeight={700}>
          A Front-end Web Developer with a strong passion for continuous
          learning and growth.
        </Typography>
      </Box>
    </main>
  );
}
