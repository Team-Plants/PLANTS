import { useState } from 'react';
import S from '@/components/modal/input/tagInput/tagInput.module.css';

function TagInput() {
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (tagItem.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    const updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
  };

  return (
    <div className={S.tagBox}>
      <div className={S.tagItemContainer}>
        {tagList.map((tagItem, index) => {
          return (
            // chip 컴포넌트로 교체 예정
            <div className={S.tagItem} key={index}>
              <div>{tagItem}</div>
            </div>
          );
        })}
      </div>

      <input
        className={S.tagInput}
        type="text"
        placeholder="입력 후 Enter"
        tabIndex={2}
        onChange={(e) => setTagItem(e.target.value)}
        value={tagItem}
        onKeyDown={onKeyPress}
      />
    </div>
  );
}

export default TagInput;
