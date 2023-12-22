import S from '@/components/modal/textarea/textarea.module.css';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

interface TextareaProps {
  placeholder: string;
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
}

function TextArea({ placeholder, control, name }: TextareaProps) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <textarea
      className={S.textarea}
      placeholder={placeholder}
      id={field.name}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
    />
  );
}

export default TextArea;
