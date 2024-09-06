import ContactLink from '@/components/common/ContactLink';
import { Grid, Typography } from '@/components/mui';
import { SOCIALS, WORKS } from '@/constants';

function Contact() {
  return (
    <Grid container sx={{ textDecoration: 'none', textTransform: 'none' }}>
      <Grid size={12}>
        <Typography pt={3} pb={1} color={'#a3e474'} fontWeight={'bold'}>
          Commit {`"`}Contact For Work{`"`} (HEAD {`->`} main, origin/main,
          origin/HEAD)
        </Typography>
        {WORKS.map((ele) => {
          return (
            <ContactLink
              key={ele.id}
              anchor={ele.anchor}
              title={ele.title}
              text={ele.text}
            />
          );
        })}
        <Typography pt={3} pb={1} color={'#80c0c4'} fontWeight={'bold'}>
          Commit {`"`}Socials{`"`}
        </Typography>
        {SOCIALS.map((ele) => {
          return (
            <ContactLink
              key={ele.id}
              anchor={ele.anchor}
              title={ele.title}
              text={ele.text}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Contact;
