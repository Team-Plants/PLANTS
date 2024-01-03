import InputLayout from '@/components/modal/input/inputLayout';
import InputModal from '@/components/modal/inputModal/inputModal';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import ModalButtonSet from '@/components/modal/button/modalButtonSet';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postDashboardsInvitations } from '@/api/dashboard';

interface TOdoInviteProps {
  onClick: () => void;
  dashboardId?: string;
}

function TodoInvite({ onClick, dashboardId }: TOdoInviteProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (result: FieldValues) =>
      postDashboardsInvitations(result, dashboardId),
    onError: (error) => {
      alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invitations'] });
    },
  });

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const { handleSubmit, control, reset } = methods;

  async function handleAddTodo(result: FieldValues) {
    await mutation.mutate(result);
    onClick();
    reset();
  }

  return (
    <InputModal onClick={onClick} title={'초대하기'}>
      <InputLayout label="이메일" isNecessary={false}>
        <form
          onSubmit={handleSubmit(handleAddTodo)}
          className={CommonStyle.form}>
          <DefaultInput
            placeholder="이메일을 입력해 주세요"
            control={control}
            name="email"
          />
          <ModalButtonSet
            isDelete={false}
            submitButtonTitle="초대"
            onClickCancel={onClick}
          />
        </form>
      </InputLayout>
    </InputModal>
  );
}

export default TodoInvite;
