'use client';
import { IProfile } from '@/types';
import { Typography, keyframes } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

function AnimationText(props: {
  text: string;
  fontSize: number;
  flag: string;
  setIsMounted: Dispatch<SetStateAction<IProfile>>;
}) {
  const { text, fontSize = 20, flag, setIsMounted } = props;
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      setIsMounted((prev) => ({ ...prev, [flag]: true }));
      setIsTyping(false);
    }
  }, [currentIndex, flag, setIsMounted, text]);

  return (
    <Typography
      fontWeight={700}
      fontSize={fontSize}
      fontFamily={'__Be_Vietnam_Pro_4d2bfa'}
      sx={{
        position: 'relative',
        '&::after': isTyping
          ? {
              content: '"|"',
              animation: `${blink} 0.9s infinite`,
              borderRadius: 4,
            }
          : {},
      }}>
      {currentText}
    </Typography>
  );
}

export default AnimationText;
