import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Épicurien - Restaurant Gastronomique',
  description:
    'Restaurant gastronomique proposant une expérience culinaire unique avec des plats raffinés et un service exceptionnel.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(lora.className, 'antialiased', 'h-full')}>{children}</body>
    </html>
  );
}
