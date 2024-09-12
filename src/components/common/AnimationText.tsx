'use client';
import { Typography, keyframes } from '@mui/material';
import { useEffect, useState } from 'react';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

function AnimationText(props: { text?: string }) {
  const { text = 'Văn Bảo Tâm' } = props;
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 120);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <Typography
      fontWeight={700}
      fontSize={70}
      fontFamily={'__Be_Vietnam_Pro_4d2bfa'}
      sx={{
        position: 'relative',
        '&::after': {
          content: '"|"',
          width: 0,
          animation: `${blink} 0.9s infinite`,
          borderRadius: 4,
        },
      }}>
      {currentText}
    </Typography>
  );
}

export default AnimationText;
