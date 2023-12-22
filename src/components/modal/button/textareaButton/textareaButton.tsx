import S from '@/components/modal/button/textareaButton/textareaButton.module.css';

function TextareaButton() {
  return (
    <button className={S.buttonContainer} type="submit">
      <div className={S.buttonTitle}>입력</div>
    </button>
  );
}

export default TextareaButton;
