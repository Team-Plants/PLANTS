import { putDashboard } from '@/api/dashboard';
import ColorChipInput from '@/components/modal/input/colorChipInput/colorChipInput';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import S from '@/components/table/editDashboard/editDashboard.module.css';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface EditDashboardProps {
  dashboardId: string;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditDashboard({ dashboardId, setFlag }: EditDashboardProps) {
  const [isColorValid, setIsColorValid] = useState(false);
  const [isDashboardNameValid, setIsDashboardNameValid] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      dashboardTitle: '',
      color: '',
    },
  });

  async function handleEditDashboard(data: FieldValues) {
    const result = await putDashboard(
      dashboardId,
      data.dashboardTitle,
      data.color,
    );
    if (result) setFlag(true);
  }

  const { handleSubmit, control, setValue, watch } = methods;

  useEffect(() => {
    if (watch('color') === '') setIsColorValid(false);
    else setIsColorValid(true);

    if (watch('dashboardTitle') === '') setIsDashboardNameValid(false);
    else setIsDashboardNameValid(true);
  }, [watch()]);

  useEffect(() => {
    if (isColorValid && isDashboardNameValid) setIsActive(true);
    else setIsActive(false);
  }, [isColorValid, isDashboardNameValid]);

  return (
    <form className={S.container} onSubmit={handleSubmit(handleEditDashboard)}>
      <div className={S.header}>
        <div className={S.headerTitle}>{'대시보드 타이틀'}</div>
        <div className={S.chipContainer}>
          <ColorChipInput setValue={setValue} />
        </div>
      </div>
      <p className={S.p}>대시보드 이름</p>
      <DefaultInput
        placeholder="수정할 이름을 입력해 주세요."
        control={control}
        name="dashboardTitle"
      />
      <div className={S.buttonContainer}>
        <button
          className={isActive ? S.submitButton : S.disabledSubmitButton}
          disabled={isActive ? false : true}>
          변경
        </button>
      </div>
    </form>
  );
}

export default EditDashboard;
