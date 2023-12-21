import S from '@/components/modal/button/textareaButton/textareaButton.module.css';

interface TextareaButtonProps {
  onClick: () => void;
}

function TextareaButton({ onClick }: TextareaButtonProps) {
  return (
    <div className={S.buttonContainer} onClick={onClick}>
      <div className={S.buttonTitle}>입력</div>
    </div>
  );
}

export default TextareaButton;
