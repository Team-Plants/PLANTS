import S from '@/components/modal/input/defaultInput/defaultInput.module.css';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

interface DefaultInputProps {
  placeholder: string;
  type?: 'text' | 'date';
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
}

function DefaultInput({
  placeholder,
  type = 'text',
  name,
  control,
}: DefaultInputProps) {
  const { field } = useController({
    name,
    control,
    rules: {
      required: { value: true, message: '입력해주세요' },
    },
  });
  return (
    <input
      className={S.input}
      placeholder={placeholder}
      type={type}
      id={field.name}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
    />
  );
}

export default DefaultInput;
