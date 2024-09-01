import { Box, Typography } from '@/components/mui';
import { Stack } from '@mui/material';
import Image from 'next/image';
import styles from './icon.module.css';
function FileBar() {
  return (
    <Box sx={{ py: 2, display: 'flex', width: '100%' }}>
      <Box>
        <Stack alignItems="center" direction="row">
          <Image
            key={'chevron-right'}
            className={styles['file_bar__icon--normal']}
            src={`/chevron-right.svg`}
            width={40}
            height={40}
            alt={`chevron right icon`}
          />
          <Typography fontSize={'14px'} fontWeight={'700'}>
            PORTFOLIO
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default FileBar;
