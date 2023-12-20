import { useState } from 'react';
import Image from 'next/image';
import { ErrorMessage } from '@hookform/error-message';
import useAuthInput from '@/hooks/useAuthInput';
import EyeCloseImg from '@/assets/icons/EyeClose.svg';
import EyeOpenImg from '@/assets/icons/EyeOpen.svg';
import S from './Input.module.css';

interface InputProps {
  type: 'email' | 'password';
  label: '이메일' | '비밀번호' | '비밀번호 확인';
}

function Input({ type, label } : InputProps) {
  const { register, errors, required, pattern, maxLength} = useAuthInput(type);
  const [eye, setEye] = useState(false);

  return (
    <div className={S.formContainer}>
      <label className={S.formLabel} htmlFor={type}>
        {label}
      </label>
      <div className={S.inputContainer} >
        <input
          id={type}
          type={type.includes('password') ? (eye ? 'text' : 'password') : type}
          className={errors[type]?.message ? `${S.input} ${S.errorBorder}`: `${S.input}` }
          placeholder={required}
          {...register(type, {
            pattern: pattern,
            maxLength : maxLength,
            // validate: value => checkPassword(value),
          })}
        />
        <Image
          className={
            type.includes('password') ? `${S.image}` : `${S.image} ${S.display}`
          }
          src={eye ? EyeOpenImg : EyeCloseImg}
          onClick={() => setEye(!eye)}
          width={24}
          height={24}
          alt="비밀번호 보기"
        />
      </div>
      <ErrorMessage name={type} errors={errors} render={({message}) => <p className={S.error}>{message}</p>} />
    </div>
  );
}

export default Input;
