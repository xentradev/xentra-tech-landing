import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";
import defaultTheme from "./defaultTheme";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0"
        />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="apple-touch-icon-precomposed" href="/icon.png"></link>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ChatWidget />
      </head>
      <main>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <AppRouterCacheProvider>
              <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
            </AppRouterCacheProvider>
          </NextIntlClientProvider>
        </body>
      </main>
    </html>
  );
}
