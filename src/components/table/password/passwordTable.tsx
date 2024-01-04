import { putPassword } from '@/api/mypage';
import Input from '@/components/Input/Input';
import Button from '@/components/button/button';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import InputLayout from '@/components/modal/input/inputLayout';
import S from '@/components/table/password/passwordTable.module.css';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { FieldValues, useForm } from 'react-hook-form';

function PasswordTable() {
  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      newPasswordCheck: '',
    },
  });

  const { handleSubmit, control, setError, reset } = methods;

  const mutation = useMutation({
    mutationFn: (data: FieldValues) =>
      putPassword(data.currentPassword, data.newPassword),
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          setError('currentPassword', {
            type: 'validate',
            message: error.response.data.message,
          });
          return;
        }
        return;
      }
      alert(error);
    },

    onSuccess: () => {
      alert('비밀번호 변경이 완료되었습니다. ');
      reset();
    },
  });

  async function handlePasswordModify(data: FieldValues) {
    if (data.newPassword !== data.newPasswordCheck) {
      setError('newPasswordCheck', {
        type: 'validate',
        message: '새 비밀번호가 일치하지 않습니다.',
      });
      return;
    }
    mutation.mutate(data);
  }

  return (
    <form className={S.container} onSubmit={handleSubmit(handlePasswordModify)}>
      <span className={S.title}>비밀번호 변경</span>
      <InputLayout label="현재 비밀번호" isNecessary={false}>
        <DefaultInput
          placeholder="현재 비밀번호"
          name="currentPassword"
          control={control}
          size="largeInput"
        />
      </InputLayout>
      <InputLayout label="새 비밀번호" isNecessary={false}>
        <DefaultInput
          placeholder="새 비밀번호"
          name="newPassword"
          control={control}
          size="largeInput"
        />
      </InputLayout>
      <InputLayout label="새 비밀번호 확인" isNecessary={false}>
        <DefaultInput
          placeholder="새 비밀번호 확인"
          name="newPasswordCheck"
          control={control}
          size="largeInput"
        />
      </InputLayout>

      <div className={S.buttonContainer}>
        <Button content="변경" status="primary" />
      </div>
    </form>
  );
}

export default PasswordTable;
