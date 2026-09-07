import type { Metadata } from 'next';
import { DM_Sans, Syne } from 'next/font/google';
import './globals.css';

const bodyFont = DM_Sans({ variable: '--font-body', subsets: ['latin'] });
const displayFont = Syne({ variable: '--font-display', subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Franc Cadet | IT Student & Cybersecurity Enthusiast',
  description: 'Portfolio of Franc Cadet, an Information Technology student at the University of Central Florida focused on networking and cybersecurity.',
  openGraph: { title: 'Franc Cadet | IT Student', description: 'IT · Networking · Cybersecurity', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Franc Cadet | IT Student', description: 'IT · Networking · Cybersecurity', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body></html>; }
