import { putDashboard } from '@/api/dashboard';
import ColorChipInput from '@/components/modal/input/colorChipInput/colorChipInput';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import S from '@/components/table/editDashboard/editDashboard.module.css';
import { FieldValues, useForm } from 'react-hook-form';

interface EditDashboardProps {
  dashboardId: string;
}

function EditDashboard({ dashboardId }: EditDashboardProps) {
  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      dashboardTitle: '',
      color: '',
    },
  });

  async function handleEditDashboard(data: FieldValues) {
    await putDashboard(dashboardId, data.dashboardTitle, data.color);
  }

  const { handleSubmit, control, setValue } = methods;
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
        <button className={S.submitButton}>변경</button>
      </div>
    </form>
  );
}

export default EditDashboard;
