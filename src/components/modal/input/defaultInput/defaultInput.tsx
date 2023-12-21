import S from '@/components/modal/input/defaultInput/defaultInput.module.css';
// import { Control, FieldPath, useController } from 'react-hook-form';

interface DefaultInputProps {
  label: string;
  placeholder: string;
  isNessary: boolean;
  //   control: Control<any>;
  //   name: FieldPath<any>;
}

function DefaultInput({ label, placeholder, isNessary }: DefaultInputProps) {
  //   const {
  //     field,
  //     fieldState: { error },
  //   } = useController({
  //     name,
  //     control,
  //   });

  return (
    <div className={S.inputContainer}>
      <label className={S.label}>
        {label}
        {isNessary && <span className={S.violetLabel}>*</span>}
      </label>
      <div>
        <input className={S.input} placeholder={placeholder}></input>
      </div>
    </div>
  );
}

export default DefaultInput;
