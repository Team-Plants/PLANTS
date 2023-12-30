import S from '@/components/button/add/add.module.css';
import PlusChip from '@/components/chip/plus/plusChip';

function AddButton() {
  return (
    <button className={S.container}>
      <PlusChip />
    </button>
  );
}

export default AddButton;
