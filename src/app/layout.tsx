import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Box, Grid } from "@/components/mui";
import { COLORS } from "@/constants";
import AsideBar from "@/components/layout/aside-bar";
import NavigationBar from "@/components/layout/navigation-bar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Van Bao Tam",
  description: "Van Bao Tam - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Grid
          container
          sx={{
            backgroundColor: COLORS.BACKGROUND.MAIN,
            color: COLORS.TYPOGRAPHY.MAIN,
            width: "100%",
            height: "100vh",
          }}
        >
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
      </body>
    </html>
  );
}
