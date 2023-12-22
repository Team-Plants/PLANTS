import S from '@/components/button/add/add.module.css';
import PlusChip from '@/components/chip/plus/plusChip';

interface Category {
  device: DeviceType;
}

function AddButton({ device }: Category) {
  return (
    <button className={S[device]}>
      <PlusChip />
    </button>
  );
}

export default AddButton;
