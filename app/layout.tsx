import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ZiNote',
  description: 'Note app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Link href={'/'}>Home</Link>
            <Link href={'/profile'}>Profile</Link>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
