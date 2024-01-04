import S from '@/components/modal/input/defaultInput/defaultInput.module.css';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

interface DefaultInputProps {
  placeholder: string;
  type?: 'text' | 'date' | 'datetime-local';
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  isRequired?: boolean;
  size?: 'middleInput' | 'default' | 'largeInput';
}

// 모달 내 기본 input
function DefaultInput({
  placeholder,
  type = 'text',
  name,
  control,
  isRequired = true,
  size = 'default',
}: DefaultInputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: isRequired
      ? {
          required: { value: true, message: '값을 입력해주세요' },
        }
      : {},
  });
  return (
    <div>
      <input
        className={`${S.input} ${error ? S.errorInput : ''} ${S[size]}`}
        placeholder={placeholder}
        type={type}
        id={field.name}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
      />
      {error && <div className={S.errorMessage}>{error.message}</div>}
    </div>
  );
}

export default DefaultInput;
