import S from '@/components/modal/input/defaultInput/defaultInput.module.css';

interface DefaultInputProps {
  placeholder: string;
  type?: 'text' | 'date';
}

function DefaultInput({ placeholder, type = 'text' }: DefaultInputProps) {
  return <input className={S.input} placeholder={placeholder} type={type} />;
}

export default DefaultInput;
