import S from '@/components/modal/textarea/textarea.module.css';

interface TextareaProps {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}

function TextArea({ placeholder, onChange, value }: TextareaProps) {
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    onChange(value);
  }
  return (
    <textarea
      className={S.textarea}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default TextArea;
