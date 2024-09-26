export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import {Inter, Roboto_Mono, IBM_Plex_Serif} from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})


const Roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-roboto-mono'
})

export const metadata: Metadata = {
  title: "TemPay",
  description: "Your banking Digital",
  icons: {
    icon: '/icons/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} ${Roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
