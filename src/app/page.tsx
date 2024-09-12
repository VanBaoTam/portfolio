import AnimationText from '@/components/common/AnimationText';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Box sx={{ pt: 10 }}>
        <Typography fontWeight={700} fontSize={24}>
          Xin chào, My name is
        </Typography>
        <AnimationText text="Văn Bảo Tâm" />
        <Typography fontSize={20} fontWeight={700}>
          A Front-end Web Developer with a strong passion for continuous
          learning and growth.
        </Typography>
      </Box>
    </main>
  );
}
