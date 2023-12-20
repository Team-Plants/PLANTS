import useAuthInput from '@/hooks/useAuthInput';
import Input from './Input';

function PasswordCheckInput() {
  return (
    <>
      <Input
        type="passwordCheck"
        label="비밀번호 확인"
      />
    </>
  );
}

export default PasswordCheckInput;
