import AsideBar from '@/components/layout/aside-bar';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import NavigationBar from '@/components/layout/navigation-bar';
import { Box, Grid } from '@/components/mui';
import { COLORS } from '@/constants';
import { ActiveFileProvider } from '@/context/File';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Van Bao Tam',
  description: 'Van Bao Tam - Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <ActiveFileProvider>
            <Header />
            <Grid
              container
              sx={{
                backgroundColor: COLORS.BACKGROUND.MAIN,
                color: COLORS.TYPOGRAPHY.MAIN,
                width: '100%',
                minHeight: '92vh',
              }}>
              <Grid size={3}>
                <AsideBar />
              </Grid>
              <Grid size={9}>
                <NavigationBar />
                <Box sx={{ p: 2 }}>{children}</Box>
              </Grid>
            </Grid>
            <Grid container>
              <Footer />
            </Grid>
          </ActiveFileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
