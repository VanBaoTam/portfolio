'use client';
import { Box, Typography } from '@/components/mui';
import { Stack } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import Files from './Files';
import styles from './icon.module.css';
function FileBar() {
  const [isShown, setIsShown] = useState<boolean>(true);
  return (
    <Box sx={{ py: 2, width: '100%' }}>
      <Box>
        <Stack alignItems="center" direction="row">
          {isShown ? (
            <Image
              key={'chevron-down'}
              className={styles['file_bar__icon--normal']}
              src={`/chevron-down.svg`}
              width={40}
              height={40}
              onClick={() => {
                setIsShown((prev) => !prev);
              }}
              alt={`chevron down icon`}
            />
          ) : (
            <Image
              key={'chevron-right'}
              className={styles['file_bar__icon--normal']}
              src={`/chevron-right.svg`}
              width={40}
              height={40}
              onClick={() => {
                setIsShown((prev) => !prev);
              }}
              alt={`chevron right icon`}
            />
          )}
          <Typography fontSize={'14px'} fontWeight={'700'}>
            PORTFOLIO
          </Typography>
        </Stack>
      </Box>
      {isShown && <Files />}
    </Box>
  );
}

export default FileBar;
