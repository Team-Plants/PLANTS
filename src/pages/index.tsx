import { Inter } from 'next/font/google';
import LightHeader from '@/components/header/LightHeader';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <LightHeader></LightHeader>;
}
