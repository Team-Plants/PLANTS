import S from '@/components/button/dashBoard/create/createDashBoard.module.css';
import PlusChip from '@/components/chip/plus/plusChip';
import { NewDashboardModalProps } from '@/components/modal/newDashboardModal/newDashboardModal';

function CreateDashBoardButton({ onClick }: NewDashboardModalProps) {
  return (
    <button className={S.container} onClick={onClick}>
      새로운 대시보드
      <PlusChip />
    </button>
  );
}

export default CreateDashBoardButton;
