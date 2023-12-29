import CircleChip from '@/components/chip/circle/circleChip';
import { useState } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import S from '@/components/modal/newDashboardModal/newDashboardModal.module.css';

const color: ThemeType[] = [
  'green#00FF00',
  'purple#800080',
  'orange#FFA500',
  'blue#0000FF',
  'pink#FFC0CB',
];

function ColorChipInput(props: { setValue: UseFormSetValue<FieldValues> }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [, setIsSelected] = useState(false);

  function handleChip(color: string) {
    setSelectedColor(color);
    props.setValue('color', color.slice(-7, color.length));
  }
  return (
    <div className={S.colorChipContainer}>
      {color.map((e, index) => {
        return (
          <CircleChip
            key={index}
            color={e}
            isChecked={e === selectedColor}
            setIsChecked={setIsSelected}
            onClick={handleChip}
          />
        );
      })}
    </div>
  );
}

export default ColorChipInput;
