import { useState } from 'react';
import S from '@/components/modal/input/selectInput/selectInput.module.css';
import CheckImg from '@/assets/icons/Check.svg';
import Image from 'next/image';
import ManagerOption from './managerOption';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

// chip 컴포넌트로 교체 예정
const Chip = (props: { content: string }) => {
  return <div className={S.a}>{props.content}</div>;
};

interface option {
  value: string;
  label: string;
}

interface SelectInputProps {
  optionData: option[];
  type: 'manager' | 'state';
  placeholder: string;
  setValue: UseFormSetValue<FieldValues>;
}

function SelectInput({
  optionData,
  type = 'manager',
  placeholder,
  setValue,
}: SelectInputProps) {
  const [selected, setSelected] = useState(placeholder);
  const [showOptions, setShowOptions] = useState(false);

  const onChangeSelect = (e: string) => {
    if (e) {
      setSelected(e);
      setValue('manager', e);
    } else setSelected('');
  };

  return (
    <div
      className={S.selectContainer}
      onClick={() => setShowOptions((prev) => !prev)}>
      <label className={S.selectedLabel}>
        {selected !== placeholder ? (
          type === 'manager' ? (
            <ManagerOption name={selected} />
          ) : (
            <Chip content={selected} />
          )
        ) : (
          <div className={S.placeholder}>{placeholder}</div>
        )}
      </label>
      {showOptions && (
        <ul className={S.selectOptionContainer}>
          {optionData.map((e, index) => {
            return (
              <li
                className={S.selectOption}
                key={index}
                onClick={() => onChangeSelect(e.value)}>
                {selected === e.value ? (
                  <Image
                    src={CheckImg}
                    alt="체크아이콘"
                    width={22}
                    height={22}
                  />
                ) : (
                  <div style={{ width: '22px', height: '22px' }}></div>
                )}

                {type === 'manager' ? (
                  <ManagerOption name={e.value} />
                ) : (
                  <Chip content={e.value} />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SelectInput;
