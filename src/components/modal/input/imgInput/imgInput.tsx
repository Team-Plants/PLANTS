import ImgPlusImg from '@/assets/icons/imgPlus.svg';
import S from '@/components/modal/input/imgInput/imgInput.module.css';
import Image from 'next/image';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  UseFormSetValue,
  useController,
} from 'react-hook-form';

interface ImgInputProps {
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  width?: number;
  height?: number;
}

// 할 일 생성, 할 일 수정 내부 이미지 업로드 컴포넌트
function ImgInput({ control, name, setValue, width, height }: ImgInputProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const targetFiles = e.target.files[0];
      const selectedFiles = URL.createObjectURL(targetFiles);
      setImageSrc(selectedFiles);
      setValue('imageUrl', e.target.files[0]);
    }
  };

  const handleUploadImg = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  const { field } = useController({
    name,
    control,
  });

  return (
    <div className={S.imgInputContainer}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt="할일 업로드 이미지"
          width={width ? width : 58}
          height={height ? height : 58}
        />
      ) : (
        <div className={S.noImgContainer} onClick={handleUploadImg}>
          <Image src={ImgPlusImg} alt="이미지 업로드 플러스 아이콘" />
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => onUpload(e)}
        className={S.input}
        ref={inputRef}
        id={field.name}
        name={field.name}
      />
    </div>
  );
}

export default ImgInput;
