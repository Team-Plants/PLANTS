import Input from '@/components/Input/Input';
import Button from '@/components/button/button';
import S from '@/components/table/password/passwordTable.module.css';

function PasswordTable() {
  return (
    <div className={S.container}>
      <span className={S.title}>비밀번호 변경</span>
      <Input type="currentPassword" label="현재 비밀번호" />
      <Input type="newPassword" label="새 비밀번호" />
      <Input type="newPasswordCheck" label="새 비밀번호 확인" />

      <div className={S.buttonContainer}>
        <Button content="변경" status="primary" />
      </div>
    </div>
  );
}

export default PasswordTable;
