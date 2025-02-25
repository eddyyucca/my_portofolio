// src/app/layout.tsx
import './globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: 'Eddy Adha Saputra | Software Engineer',
  description: 'Portfolio website showcasing my software engineering, data analysis, and project management skills',
  icons: {
    icon: [
      { url: '/favicon.ico.svg' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto_mono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col bg-light dark:bg-dark text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}