import EmailInput from '@/components/Input/emailInput';
import PasswordCheckInput from '@/components/Input/passwordCheck';
import PasswordInput from '@/components/Input/passwordInput';
import AuthLayout from '@/components/layout/authLayout';
import { ReactElement } from 'react';

function Signup() {
  return (
    <>
      <EmailInput />
      <PasswordInput />
      <PasswordCheckInput />
    </>
  );
}

export default Signup;

Signup.getLayout = (page: ReactElement) => (
  <AuthLayout
    greetingsContent="첫 방문을 환영합니다!"
    submitButtonTitle="가입하기"
    submitButtonLink="/signin"
    memberStatus="이미 가입하셨나요?"
    linkTitle="로그인하기"
    link="/login">
    {page}
  </AuthLayout>
);
