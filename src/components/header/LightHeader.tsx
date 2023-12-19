import Image from 'next/image';
import Link from 'next/link';
import SmallLogo from '@/assets/icons/logoIcon.svg';
import Logo from '@/assets/icons/logoWithLetter.svg';
import S from '@/components/header/LightHeader.module.css';

function LightHeader() {
  return (
    <div className={S.headerContainer}>
      <div className={S.logo}>
        <Image src={Logo} alt="로고 네이밍" width={121} height={39} />
      </div>
      <div className={S.links}>
        <Link href="/signin">로그인</Link>
        <Link href="/signup">회원가입</Link>
      </div>
    </div>
  );
}

export default LightHeader;
