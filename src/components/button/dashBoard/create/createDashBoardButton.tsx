import S from '@/components/button/dashBoard/create/createDashBoard.module.css';
import PlusChip from '@/components/chip/plus/plusChip';

function CreateDashBoardButton() {
  return (
    <button className={S.container}>
      새로운 대시보드
      <PlusChip />
    </button>
  );
}

export default CreateDashBoardButton;
