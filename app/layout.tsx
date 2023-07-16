import './globals.css';

import { Navbar, Footer } from '@/components';

export const metadata = {
  title: 'RentMyWheels',
  description: 'Discover the Joy of Effortless Car Rentals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
