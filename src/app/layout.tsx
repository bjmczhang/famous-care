import type { Metadata } from "next";

import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material";
import theme from "@/mui_theme/theme";

import Topbar from "@/components/header/Topbar";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Industrial",
  description: "Nextjs + MUI + SASS + CSS BEM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0 }}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <header>
            <Topbar />
            <Navbar />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
