import S from '@/components/button/add/add.module.css';
import PlusChip from '@/components/chip/plus/plusChip';

function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={S.container} onClick={onClick}>
      <PlusChip />
    </button>
  );
}

export default AddButton;
