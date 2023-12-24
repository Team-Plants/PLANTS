import S from '@/components/button/column/column.module.css';
import PlusChip from '@/components/chip/plus/plusChip';

interface Category {
  device: DeviceType;
}

function ColumnButton({ device }: Category) {
  return (
    <button className={S[device]}>
      새로운 컬럼 추가하기 <PlusChip />
    </button>
  );
}

export default ColumnButton;
