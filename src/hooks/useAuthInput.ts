import { useForm } from 'react-hook-form';
import {
  EMAIL_STANDARD,
  ERROR_EMAIL_CHECK,
  ERROR_EMAIL_EMPTY,
  ERROR_PASSWORD_CHECK,
  ERROR_PASSWORD_EMPTY,
  ERROR_PASSWORD_SECOND_EMPTY,
  ERROR_PASSWORD_VALIDATION,
  PASSWORD_STANDARD,
} from '@/constants/auth';

function useAuthInput(type) {
  const matchInput = authInput.find((input) => input.type === type);
  const {
    register,
    formState: { errors },
    watch,
  } = useForm({ mode: 'onBlur' });

  const required = matchInput?.required;

  const pattern = {
    value: matchInput?.pattern?.value,
    message: matchInput?.pattern?.message,
  }

  const maxLength = {
    value: matchInput?.maxLength?.value,
    message: matchInput?.maxLength?.message,
  }

  // function checkPassword(value) {
  //   if (watch('password') != value) {
  //     return matchInput?.validate;
  //   }
  // }
  /* validate에서 password 값을 어떻게 받아와야 */

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
    validate : ERROR_PASSWORD_CHECK,
  },
];
