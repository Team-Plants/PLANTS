import { Inter } from 'next/font/google';
import S from '@/styles/Home.module.css';
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
            <Image src={HomeImg} alt="홈이미지1" objectFit="cover" />
          </div>

          <h1 className={S.h1}>새로운 일정 관리</h1>
          <br className={S.br} />
          <h1 className={S.h1Violet}>Taskify</h1>
          <p>서비스에 대한 설명</p>
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
