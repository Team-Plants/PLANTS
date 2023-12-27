import { postSignup } from '@/api/user';
import EmailInput from '@/components/Input/emailInput';
import NicknameInput from '@/components/Input/nickName';
import PasswordCheckInput from '@/components/Input/passwordCheck';
import PasswordInput from '@/components/Input/passwordInput';
import AuthLayout from '@/components/layout/authLayout';
import { ReactElement } from 'react';
import S from '@/components/layout/authLayout.module.css';
import CheckboxInput from '@/components/Input/checkboxInput';

function Signup() {
  return (
    <>
      <EmailInput />
      <NicknameInput />
      <PasswordInput />
      <PasswordCheckInput />
      <div className={S.checkboxInputContainer}>
        <CheckboxInput />
        <div className={S.checkboxContent}>이용약관에 동의합니다.</div>
      </div>
    </>
  );
}

export default Signup;

Signup.getLayout = (page: ReactElement) => (
  <AuthLayout
    handleSubmit={postSignup}
    greetingsContent="첫 방문을 환영합니다!"
    submitButtonTitle="가입하기"
    submitLink="/login"
    memberStatus="이미 가입하셨나요?"
    linkTitle="로그인하기"
    link="/login">
    {page}
  </AuthLayout>
);
