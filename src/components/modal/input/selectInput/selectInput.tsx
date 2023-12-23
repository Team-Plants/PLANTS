import { useEffect, useState } from 'react';
import S from '@/components/modal/input/selectInput/selectInput.module.css';
import CheckImg from '@/assets/icons/CheckG.svg';
import Image from 'next/image';
import ManagerOption from '@/components/modal/input/selectInput/managerOption';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import ProgressChip from '@/components/chip/progress/progressChip';
import { StatusType } from '../../editTodoModal/editTodoModal';

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

// 모달 내 담당자, 상태 선택 옵션 컴포넌트
// type에 따라 내부 렌더링되는 칩이 다름, 이후 chip 컴포넌트로 변경 필요
// 선택된 값을 setValue를 통해 form에 저장
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
            <ProgressChip progress={selected as StatusType} />
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
                  <ProgressChip progress={e.value as StatusType} />
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
