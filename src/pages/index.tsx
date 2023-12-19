import { Inter } from 'next/font/google';
import S from './index.module.css';
import Image from 'next/image';
import HomeImg from '@/assets/images/Home1.png';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <header></header> */}
      <main className={S.main}>
        <div className={S.article}>
          <div className={S.imgContainer}>
            <Image src={HomeImg} alt="홈이미지1" fill={true} />
          </div>
          <div className={S.h1Container}>
            <p className={S.h1}>새로운 일정 관리</p>
            <p className={S.h1Violet}>Taskify</p>
          </div>
          <p className={S.serviceDescription}>서비스에 대한 설명</p>
          {/* <button></button> */}
        </div>
        <div></div>
        <div></div>
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
