import { ChangeEvent, KeyboardEvent, useState } from 'react';
import S from '@/components/modal/input/tagInput/tagInput.module.css';
import {
  Control,
  FieldPath,
  FieldValues,
  UseFormSetValue,
  useController,
} from 'react-hook-form';
import CategoryChip from '@/components/chip/category/categoryChip';
import { randomChipColor } from '@/utils/utility';

interface TagInputProps {
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

interface TagItem {
  content: string;
  color?: ThemeType;
}
// 모달 내 태그 옵션 컴포넌트
function TagInput({ control, name, setValue }: TagInputProps) {
  const [tagItem, setTagItem] = useState<TagItem | null>();
  const [tagList, setTagList] = useState<TagItem[]>([]);

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (tagItem?.content.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    const updatedTagList = [...tagList];
    updatedTagList.push(tagItem!);
    setTagList(updatedTagList);
    setValue(
      'tag',
      updatedTagList.map((i) => i.content),
    );
    setTagItem({ content: '' });
  };

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const color = randomChipColor();
    setTagItem({ content: e.target.value, color: color });
  }

  const { field } = useController({
    name,
    control,
  });

  return (
    <div className={S.tagBox}>
      <div className={S.tagItemContainer}>
        {tagList.map((tagItem, index) => {
          return (
            <CategoryChip
              content={tagItem.content}
              key={index}
              color={tagItem.color || 'green#00FF00'}
            />
          );
        })}
      </div>

      <input hidden={true} />

      <input
        className={S.tagInput}
        type="text"
        placeholder="입력 후 Enter"
        tabIndex={2}
        onChange={(e) => handleChangeInput(e)}
        value={tagItem?.content}
        onKeyDown={onKeyPress}
        id={field.name}
        name={field.name}
      />
    </div>
  );
}

export default TagInput;
