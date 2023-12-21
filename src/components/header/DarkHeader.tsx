import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '@/assets/icons/WhiteLogoWithLetter.svg';
import SmallLogoImg from '@/assets/icons/WhiteSmallLogo.svg';
import S from '@/components/header/header.module.css';

function DarkHeader() {
  return (
    <div className={`${S.headerContainer} ${S.darkBg}`}>
      <div className={S.logo}>
        <Image
          src={LogoImg}
          alt="이미지와 폰트가 있는 로고"
          width={121}
          height={39}
        />
      </div>
      <div className={S.smallLogo}>
        <Image src={SmallLogoImg} alt="이미지 로고 " width={23} height={27} />
      </div>
      <div className={`${S.links} ${S.darkBg}`}>
        <Link href="/signin">로그인</Link>
        <Link href="/signup">회원가입</Link>
      </div>
    </div>
  );
}

export default DarkHeader;
