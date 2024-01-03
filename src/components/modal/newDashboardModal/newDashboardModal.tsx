import { FieldValues, useForm } from 'react-hook-form';
import ColorChipInput from '@/components/modal/input/colorChipInput/colorChipInput';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import InputLayout from '@/components/modal/input/inputLayout';
import InputModal from '@/components/modal/inputModal/inputModal';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import { useEffect, useState } from 'react';
import ActiveModalButtonSet from '@/components/modal/button/activeModalButtonSet';
import { postDashboards } from '@/api/dashboard';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface NewDashboardModalProps {
  onClick: () => void;
  redirect?: boolean;
}

function NewDashboardModal({
  onClick,
  redirect = true,
}: NewDashboardModalProps) {
  const [isColorValid, setIsColorValid] = useState(false);
  const [isDashboardNameValid, setIsDashboardNameValid] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      dashboardName: '',
      color: '',
    },
  });

  const { handleSubmit, control, setValue, watch, reset } = methods;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: FieldValues) =>
      postDashboards(data.dashboardName, data.color),
    onError: (error) => {
      console.error('오류가 발생했습니다:', error);
      alert('오류가 발생했습니다: ' + error);
    },
    onSuccess: (data) => {
      const dashBoardId = data.id;
      queryClient.invalidateQueries({ queryKey: ['dashboards'] }); //쿼리무효화

      if (dashBoardId && redirect) {
        router.push(`/dashboard/${dashBoardId}`);
      }
    },
  });

  async function handleNewDashboard(data: FieldValues) {
    await mutation.mutate(data);
    onClick();
    reset();
  }

  useEffect(() => {
    if (watch('color') === '') setIsColorValid(false);
    else setIsColorValid(true);

    if (watch('dashboardName') === '') setIsDashboardNameValid(false);
    else setIsDashboardNameValid(true);
  }, [watch()]);

  useEffect(() => {
    if (isColorValid && isDashboardNameValid) setIsActive(true);
    else setIsActive(false);
  }, [isColorValid, isDashboardNameValid]);

  return (
    <InputModal onClick={onClick} title={'새로운 대시보드'}>
      <InputLayout label="대시보드 이름" isNecessary={false}>
        <form
          onSubmit={handleSubmit(handleNewDashboard)}
          className={CommonStyle.form}>
          <DefaultInput
            placeholder="대시보드 이름을 입력해 주세요"
            control={control}
            name="dashboardName"
          />
          <ColorChipInput setValue={setValue} />

          <ActiveModalButtonSet
            isDelete={false}
            submitButtonTitle="생성"
            onClickCancel={onClick}
            isActive={isActive}
          />
        </form>
      </InputLayout>
    </InputModal>
  );
}

export default NewDashboardModal;
