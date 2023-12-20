import { Inter } from 'next/font/google';
import S from './index.module.css';
import Image from 'next/image';
import HomeImg from '@/assets/images/Home1.png';
import HomeImg2 from '@/assets/images/Home2.png';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <header></header> */}
      <body className={S.body}>
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
        <div className={S.pointContainer}>
          <div className={S.point}>
            <div className={S.pointHeader}>
              <p className={S.pointH1}>Point 1</p>
              <p className={S.pointDescription}>
                일의 <span className={S.pointDescriptionSpan}>우선순위를</span>{' '}
                <br />
                관리하세요
              </p>
            </div>
            <div className={S.pointImgContainer1}>
              <Image className={S.pointImg1} src={HomeImg2} alt="홈이미지2" />
            </div>
          </div>
          <div className={S.point}>2</div>
          <div></div>
        </div>
      </body>
      <footer></footer>
    </>
  );
}
