import S from '@/components/column/column.module.css';
import NumberChip from '../chip/number/numberChip';
import Image from 'next/image';
import AddButton from '../button/add/addButton';
import SettingImg from '@/assets/icons/Setting.svg';

interface ColumnProps {
  columnName: string;
  cardNum: number;
  addClick: () => void;
  settingClick: () => void;
}

function Column({ columnName, cardNum, addClick, settingClick }: ColumnProps) {
  return (
    <div className={S.container}>
      <div className={S.infoContainer}>
        <div className={S.info}>
          <div className={S.chip} />
          <span className={S.sectionName}>{columnName}</span>
          <NumberChip num={cardNum} />
        </div>
        <button onClick={settingClick}>
          <Image src={SettingImg} alt="설정 버튼" width={22} height={22} />
        </button>
      </div>
      <AddButton onClick={addClick} />
    </div>
  );
}

export default Column;
