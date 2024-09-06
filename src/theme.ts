'use client';
import { createTheme } from '@mui/material/styles';
import { Be_Vietnam_Pro, Quicksand } from 'next/font/google';

const beVNPro = Be_Vietnam_Pro({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['vietnamese', 'latin'],
});
const quickSand = Quicksand({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['vietnamese', 'latin'],
});
const theme = createTheme({
  typography: {
    fontFamily: [beVNPro.style.fontFamily, quickSand.style.fontFamily].join(
      ', ',
    ),
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
