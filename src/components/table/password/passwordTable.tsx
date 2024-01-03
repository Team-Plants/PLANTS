import { putPassword } from '@/api/mypage';
import Input from '@/components/Input/Input';
import Button from '@/components/button/button';
import S from '@/components/table/password/passwordTable.module.css';
import { useMutation } from '@tanstack/react-query';
import { FieldValues, useForm } from 'react-hook-form';

function PasswordTable() {
  const methods = useForm<FieldValues>({
    mode: 'onChange',
  });

  const { handleSubmit, control, setValue } = methods;

  const mutation = useMutation({
    mutationFn: (data: FieldValues) =>
      putPassword(data.password, data.newPassword),
    onError: (error) => {
      alert(error);
    },

    onSuccess: () => {
      alert('변경 완료');
    },
  });

  async function handlePasswordModify(data: FieldValues) {
    mutation.mutate(data);
  }

  return (
    <form className={S.container} onSubmit={handleSubmit(handlePasswordModify)}>
      <span className={S.title}>비밀번호 변경</span>
      <Input
        type="currentPassword"
        label="현재 비밀번호"
        size="largeContainer"
      />
      <Input type="newPassword" label="새 비밀번호" size="largeContainer" />
      <Input
        type="newPasswordCheck"
        label="새 비밀번호 확인"
        size="largeContainer"
      />

      <div className={S.buttonContainer}>
        <Button content="변경" status="primary" />
      </div>
    </form>
  );
}

export default PasswordTable;
