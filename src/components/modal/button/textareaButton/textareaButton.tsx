import S from '@/components/modal/button/textareaButton/textareaButton.module.css';

//textarea 내부 입력 버튼
function TextareaButton() {
  return (
    <button className={S.buttonContainer} type="submit">
      <div className={S.buttonTitle}>입력</div>
    </button>
  );
}

export default TextareaButton;
