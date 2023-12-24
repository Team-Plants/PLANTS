import S from '@/components/button/dashBoard/create/createDashBoard.module.css';
import PlusChip from '@/components/chip/plus/plusChip';

interface Category {
  device: DeviceType;
}

function CreateDashBoardButton({ device }: Category) {
  return (
    <button className={S[device]}>
      새로운 대시보드
      <PlusChip />
    </button>
  );
}

export default CreateDashBoardButton;
