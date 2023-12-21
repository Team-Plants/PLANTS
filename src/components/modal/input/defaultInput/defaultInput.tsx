import S from '@/components/modal/input/defaultInput/defaultInput.module.css';

interface DefaultInputProps {
  placeholder: string;
}

function DefaultInput({ placeholder }: DefaultInputProps) {
  return <input className={S.input} placeholder={placeholder} />;
}

export default DefaultInput;
