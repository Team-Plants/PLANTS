import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/icons/WhiteLogoWithLetter.svg';
import SmallLogo from '@/assets/icons/WhiteSmallLogo.svg';
import S from '@/components/header/DarkHeader.module.css';

function DarkHeader() {
  return (
    <div className={S.headerContainer}>
      <div className={S.logo}>
        <Image
          src={Logo}
          alt="이미지와 폰트가 있는 로고"
          width={121}
          height={39}
        />
      </div>
      <div className={S.smallLogo}>
        <Image src={SmallLogo} alt="이미지 로고 " width={23} height={27} />
      </div>
      <div className={S.links}>
        <Link href="/signin">로그인</Link>
        <Link href="/signup">회원가입</Link>
      </div>
    </div>
  );
}

export default DarkHeader;
