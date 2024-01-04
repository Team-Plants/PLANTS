import S from '@/components/Input/Input.module.css';
import { MemberProps } from '@/types/Member';
import SInput from '@/components/modal/input/inputLayout.module.css';

interface EmailProps {
  data?: MemberProps;
}

function NoWorkEmailInput({ data }: EmailProps) {
  return (
    <>
      <label className={SInput.label}>이메일</label>
      <div className={S.noWorkInputContainer}>{data?.email}</div>
    </>
  );
}

export default NoWorkEmailInput;
