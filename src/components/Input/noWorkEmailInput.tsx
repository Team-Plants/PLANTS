import S from '@/components/Input/Input.module.css';
import { MemberProps } from '@/types/Member';

interface EmailProps {
  data?: MemberProps;
}

function NoWorkEmailInput({ data }: EmailProps) {
  return (
    <>
      <label className={S.formLabel}>이메일</label>
      <div className={S.noWorkInputContainer}>{data?.email}</div>
    </>
  );
}

export default NoWorkEmailInput;
