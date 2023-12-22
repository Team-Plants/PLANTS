import {
  useForm,
  UseFormRegister,
  FieldValues,
  FieldErrors,
} from 'react-hook-form';
import {
  EMAIL_STANDARD,
  ERROR_EMAIL_CHECK,
  ERROR_EMAIL_EMPTY,
  ERROR_NICKNAME_CHECK,
  ERROR_NICKNAME_EMPTY,
  ERROR_PASSWORD_CHECK,
  ERROR_PASSWORD_EMPTY,
  ERROR_PASSWORD_SECOND_EMPTY,
  ERROR_PASSWORD_VALIDATION,
  NICKNAME_STANDARD,
  PASSWORD_STANDARD,
} from '@/constants/auth';
import { SignFormValuesType } from '@/types/SignFormValue';

interface AuthInput {
  register: UseFormRegister<SignFormValuesType>;
  errors: FieldErrors<FieldValues>;
  required: string | undefined;
  pattern: {
    value: RegExp | undefined;
    message: string | undefined;
  };
  maxLength: {
    value: number | undefined;
    message: string | undefined;
  };
}

function useAuthInput(type: string): AuthInput {
  const matchInput = authInput.find((input) => input.type === type);
  const {
    register,
    formState: { errors },
  } = useForm<SignFormValuesType>({ mode: 'onBlur' });

  const required = matchInput?.required;

  const pattern = {
    value: matchInput?.pattern?.value,
    message: matchInput?.pattern?.message,
  };

  const maxLength = {
    value: matchInput?.maxLength?.value,
    message: matchInput?.maxLength?.message,
  };
  return { required, pattern, maxLength, register, errors };
}

export default useAuthInput;

const authInput = [
  {
    type: 'email',
    required: ERROR_EMAIL_EMPTY,
    pattern: { value: EMAIL_STANDARD, message: ERROR_EMAIL_CHECK },
  },
  {
    type: 'password',
    required: ERROR_PASSWORD_EMPTY,
    pattern: { value: PASSWORD_STANDARD, message: ERROR_PASSWORD_VALIDATION },
    maxLength: { value: 8, message: ERROR_PASSWORD_VALIDATION },
  },
  {
    type: 'passwordCheck',
    required: ERROR_PASSWORD_SECOND_EMPTY,
    validate: ERROR_PASSWORD_CHECK,
  },
  {
    type: 'nickname',
    required: ERROR_NICKNAME_EMPTY,
    pattern: { value: NICKNAME_STANDARD, message: ERROR_NICKNAME_CHECK },
  },
];
