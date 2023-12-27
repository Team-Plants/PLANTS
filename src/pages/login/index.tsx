import { handleLogin } from '@/api/user';
import EmailInput from '@/components/Input/emailInput';
import PasswordInput from '@/components/Input/passwordInput';
import AuthLayout from '@/components/layout/authLayout';

import { ReactElement } from 'react';

function Login() {
  return (
    <>
      <EmailInput />
      <PasswordInput />
    </>
  );
}

export default Login;

Login.getLayout = (page: ReactElement) => (
  <AuthLayout
    handleSubmit={handleLogin}
    greetingsContent="오늘도 만나서 반가워요!"
    submitButtonTitle="로그인"
    submitLink="/boards"
    memberStatus="회원이 아니신가요?"
    linkTitle="회원가입하기"
    link="/signup">
    {page}
  </AuthLayout>
);
