import ContactLink from '@/components/common/ContactLink';
import { Grid, Typography } from '@/components/mui';
import { COLORS, SOCIALS, WORKS } from '@/constants';

function Contact() {
  return (
    <Grid container>
      <Grid size={12} px={2}>
        {' '}
        <Typography
          pb={1}
          width={'100%'}
          fontSize={38}
          textAlign={'center'}
          fontWeight={'bold'}
          color={COLORS.TYPOGRAPHY.SECONDARY}>
          Ready to collaborate?
        </Typography>
        <Typography py={1} color={'#a3e474'} fontSize={18} fontWeight={'bold'}>
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
        <Typography
          pt={3}
          pb={1}
          color={'#80c0c4'}
          fontSize={18}
          fontWeight={'bold'}>
          Commit {`"`}Socials{`"`} (e0c1512ba82f8389993f96ae)
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
