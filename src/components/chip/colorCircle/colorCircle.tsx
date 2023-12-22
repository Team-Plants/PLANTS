import CheckImg from '@/assets/icons/Check.svg';
import S from '@/components/chip/colorCircle/colorCircle.module.css';
import Image from 'next/image';
import { useState } from 'react';

interface Color {
  color: Theme;
}

function ColorCircle({ color }: Color) {
  const [isChecked, setIsChecked] = useState(false);

  function onClickChip() {
    setIsChecked(!isChecked);
  }

  return (
    <div className={S[color]} onClick={onClickChip}>
      {isChecked && <Image src={CheckImg} alt="체크 아이콘" />}
    </div>
  );
}

export default ColorCircle;
