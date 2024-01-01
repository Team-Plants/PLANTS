import CheckImg from '@/assets/icons/Check.svg';
import S from '@/components/chip/circle/circle.module.css';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface Color {
  color: ThemeType;
  isChecked: boolean;
  setIsChecked?: Dispatch<SetStateAction<boolean>>;
  onClick?: (e: string) => void;
}

function CircleChip({ color, isChecked, setIsChecked, onClick }: Color) {
  function onClickChip() {
    if (setIsChecked && onClick) {
      setIsChecked(!isChecked);
      onClick(color);
    }
  }

  return (
    <div className={S[color.slice(0, -7)]} onClick={onClickChip}>
      {isChecked && <Image src={CheckImg} alt="체크 아이콘" />}
    </div>
  );
}

export default CircleChip;
