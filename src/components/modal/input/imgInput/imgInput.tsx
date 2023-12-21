import S from '@/components/modal/input/imgInput/imgInput.module.css';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import ImgPlusImg from '@/assets/icons/imgPlus.svg';

function ImgInput() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUpload = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];

    const reader = new FileReader();
    reader.readAsDataURL(files);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        const reuslt = String(reader.result);
        setImageSrc(reuslt || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  const handleUploadImg = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <div className={S.imgInputContainer}>
      {imageSrc ? (
        <Image src={imageSrc} alt="할일 업로드 이미지" width={58} height={58} />
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
      />
    </div>
  );
}

export default ImgInput;
