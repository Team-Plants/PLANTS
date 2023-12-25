import LogoImg from '@/assets/icons/Logo.svg';
import S from '@/components/layout/authLayout.module.css';
import { AuthLayoutType } from '@/types/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

function AuthLayout({
  greetingsContent,
  submitButtonTitle,
  submitButtonLink,
  memberStatus,
  linkTitle,
  link,
  children,
}: PropsWithChildren<AuthLayoutType>) {
  return (
    <div className={S.container}>
      <Link href="/">
        <Image src={LogoImg} alt="로고" />
      </Link>

      <span className={S.greetings}>{greetingsContent}</span>
      {/* input component */}
      <div className={S.inputContainer}>{children}</div>

      {/* auth button component */}
      <Link href={submitButtonLink}>
        <div>{submitButtonTitle}</div>
      </Link>

      <div className={S.memberStatusContainer}>
        {memberStatus}
        <Link href={link}>
          <span className={S.linkTitle}>{linkTitle}</span>
        </Link>
      </div>
    </div>
  );
}

export default AuthLayout;
