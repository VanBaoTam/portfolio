import { Typography } from '@mui/material';
import styles from './contactLink.module.css';
function ContactLink(props: { title: string; anchor: string; text: string }) {
  const { title, anchor, text } = props ?? {};
  return (
    <Typography>
      {title}: &nbsp;
      <a className={styles.contact_link} href={anchor} target="_blank">
        {text}
      </a>
    </Typography>
  );
}

export default ContactLink;
