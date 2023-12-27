import EyeCloseImg from '@/assets/icons/EyeClose.svg';
import EyeOpenImg from '@/assets/icons/EyeOpen.svg';
import S from '@/components/Input/Input.module.css';
import useAuthInput from '@/hooks/useAuthInput';
import { ErrorMessage } from '@hookform/error-message';
import Image from 'next/image';
import { useState } from 'react';

interface InputProps {
  type:
    | 'email'
    | 'password'
    | 'passwordCheck'
    | 'nickname'
    | 'currentPassword'
    | 'newPassword'
    | 'newPasswordCheck';
  label:
    | '이메일'
    | '비밀번호'
    | '비밀번호 확인'
    | '닉네임'
    | '현재 비밀번호'
    | '새 비밀번호'
    | '새 비밀번호 확인';
  size?: 'shortContainer';
}

function Input({ type, label, size }: InputProps) {
  const { register, errors, rules } = useAuthInput(type);
  const [eye, setEye] = useState(false);

  return (
    <div className={size ? S[size] : S.formContainer}>
      <label className={S.formLabel} htmlFor={type}>
        {label}
      </label>
      <div
        className={
          errors[type]?.message
            ? `${S.inputContainer} ${S.errorBorder}`
            : `${S.inputContainer}`
        }>
        <input
          id={type}
          type={type.includes('password') ? (eye ? 'text' : 'password') : type}
          className={S.input}
          placeholder={rules.required}
          {...register(type, {
            pattern: rules.pattern,
            maxLength: rules.maxLength,
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
      <ErrorMessage
        name={type}
        errors={errors}
        render={({ message }) => <p className={S.error}>{message}</p>}
      />
    </div>
  );
}

export default Input;
