import { FieldValues, useForm } from 'react-hook-form';
import ModalButtonSet from '@/components/modal/button/modalButtonSet';
import ColorChipInput from '@/components/modal/input/colorChipInput/colorChipInput';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import InputLayout from '@/components/modal/input/inputLayout';
import InputModal from '@/components/modal/inputModal/inputModal';
import CommonStyle from '@/components/modal/modalCommon.module.css';

interface NewDashboardModalProps {
  onClick: () => void;
}

function NewDashboardModal({ onClick }: NewDashboardModalProps) {
  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      dashboardName: '',
      color: '',
    },
  });

  const { handleSubmit, control, setValue } = methods;

  function handleNewDashboard(data: FieldValues) {
    console.log(data);
  }

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

          <ModalButtonSet
            isDelete={false}
            submitmButtonTitle="생성"
            onClickCancel={onClick}
          />
        </form>
      </InputLayout>
    </InputModal>
  );
}

export default NewDashboardModal;
