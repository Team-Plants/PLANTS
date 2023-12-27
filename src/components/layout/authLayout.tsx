import LogoImg from '@/assets/icons/Logo.svg';
import S from '@/components/layout/authLayout.module.css';
import { AuthLayoutType } from '@/types/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import SignFormProvider from '../formProvider/SignFormProvider';
import useAuthInput from '@/hooks/useAuthInput';

function AuthLayout({
  greetingsContent,
  submitButtonTitle,
  submitLink,
  memberStatus,
  linkTitle,
  link,
  children,
  handleSubmit,
}: PropsWithChildren<AuthLayoutType>) {
  return (
    <div className={S.container}>
      <Link href="/">
        <Image src={LogoImg} alt="로고" />
      </Link>

      <span className={S.greetings}>{greetingsContent}</span>

      <SignFormProvider
        onSubmit={handleSubmit}
        submitLink={submitLink}
        submitButtonTitle={submitButtonTitle}>
        <div className={S.inputContainer}>{children}</div>

        {/* TODO: 버튼 수정되면 prop 수정 필요 */}
        {/* <AuthButton content={submitButtonTitle} size="large" type="submit" /> */}
      </SignFormProvider>

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
