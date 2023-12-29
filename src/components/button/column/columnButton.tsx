import S from '@/components/button/column/column.module.css';
import PlusChip from '@/components/chip/plus/plusChip';

function ColumnButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={S.container} onClick={onClick}>
      새로운 컬럼 추가하기 <PlusChip />
    </button>
  );
}

export default ColumnButton;
