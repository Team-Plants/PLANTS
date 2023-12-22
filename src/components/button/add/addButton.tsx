import S from '@/components/button/add/add.module.css';
import PlusChip from '@/components/chip/plus/plusChip';

interface Category {
  device: DeviceType;
}

function AddButton({ device }: Category) {
  return (
    <div className={S[device]}>
      <PlusChip />
    </div>
  );
}

export default AddButton;
