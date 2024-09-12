'use client';
import AnimationText from '@/components/common/AnimationText';
import { IProfile } from '@/types';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [isMounted, setIsMounted] = useState<IProfile>({
    greeting: false,
    name: false,
    role: false,
  });
  return (
    <main>
      <Box sx={{ pt: 10 }}>
        <AnimationText
          text="Xin chào, My name is"
          fontSize={24}
          flag={'greeting'}
          setIsMounted={setIsMounted}
        />
        {isMounted?.greeting && (
          <AnimationText
            text="Văn Bảo Tâm"
            fontSize={70}
            flag={'name'}
            setIsMounted={setIsMounted}
          />
        )}
        {isMounted?.name && (
          <AnimationText
            text="Front-end Web Developer - Passionate Learner"
            fontSize={20}
            flag={'role'}
            setIsMounted={setIsMounted}
          />
        )}
      </Box>
    </main>
  );
}
