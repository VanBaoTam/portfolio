import { Box } from '@/components/mui';
import { ICON_BAR } from '@/constants/icons';
import Image from 'next/image';
import styles from './icon.module.css';

function IconBar() {
  return (
    <Box sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
      {ICON_BAR.map((ele) => (
        <Image
          key={ele.id}
          className={styles['icon_bar__icon--normal']}
          src={`/${ele.name}`}
          width={48}
          height={48}
          alt={`${ele.id} icon`}
        />
      ))}
    </Box>
  );
}

export default IconBar;
