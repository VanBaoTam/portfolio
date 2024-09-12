/* eslint-disable @next/next/no-img-element */
'use client';
import AnimationText from '@/components/common/AnimationText';
import { IProfile } from '@/types';
import { Box, keyframes } from '@mui/material';
import { useState } from 'react';

const fadeInUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `;

export default function Home() {
  const [isMounted, setIsMounted] = useState<IProfile>({
    greeting: false,
    name: false,
    role: false,
    stats: false,
  });

  return (
    <main>
      <Box
        sx={{
          pt: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          pr: 10,
        }}>
        <Box>
          <AnimationText
            text="Xin chào, My name is"
            fontSize={20}
            flag={'greeting'}
            setIsMounted={setIsMounted}
            delay={40}
          />
          {isMounted?.greeting && (
            <AnimationText
              text="Văn Bảo Tâm"
              fontSize={80}
              flag={'name'}
              setIsMounted={setIsMounted}
              delay={100}
            />
          )}
          {isMounted?.name && (
            <AnimationText
              text="A Passionate Web Developer & Continuous Learner"
              fontSize={28}
              flag={'role'}
              setIsMounted={setIsMounted}
              delay={30}
            />
          )}
          {isMounted?.role && (
            <Box
              sx={{
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `${fadeInUp} 1.5s ease forwards`,
              }}>
              <Box>
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=vanbaotam&show_icons=true&locale=en&layout=compact"
                  style={{ width: '360px' }}
                  alt="vanbaotam top languages"
                />
              </Box>
              <Box>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=vanbaotam&show_icons=true&locale=en"
                  alt="vanbaotam github stats"
                  style={{ width: '420px' }}
                />
              </Box>
              <Box>
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=vanbaotam&"
                  alt="vanbaotam github streak"
                  style={{ width: '420px' }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </main>
  );
}
