import Header from '@/components/Header';
import './globals.css';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';

export const metadata = {
  title: 'IMDB clone',
  description: 'IMDB clone website using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
