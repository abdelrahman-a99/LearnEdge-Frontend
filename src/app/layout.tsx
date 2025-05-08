import type { Metadata } from 'next';

import Providers from "@/components/Providers";

// import "./globals.css";

export const metadata: Metadata  = {
  title: 'LearnEdge',
  description: 'Empowering Egyptian high school students with quality education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
