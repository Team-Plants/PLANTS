import { SignFormValuesType } from '@/types/SignFormValue';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AuthButton from '../button/auth/authButton';

interface SignFormProviderProps {
  children: ReactNode;
  onSubmit: (e: SignFormValuesType) => Promise<boolean | undefined>;
  submitLink: string;
  submitButtonTitle: string;
}

function SignFormProvider({
  children,
  onSubmit,
  submitLink,
  submitButtonTitle,
}: SignFormProviderProps) {
  const [mounted, setMounted] = useState(false);
  const methods = useForm<SignFormValuesType>({ mode: 'onChange' });
  const router = useRouter();

  const handleIsValidPasswordCheck = (passwordCheck: string) => {
    const password = methods.getValues('password');
    if (password !== passwordCheck) {
      methods.setError('passwordCheck', {
        type: 'validate',
        message: '비밀번호가 일치하지 않습니다.',
      });
      return false;
    }
    return true;
  };

  const handleOnSubmit = async (data: SignFormValuesType) => {
    const passwordCheck = methods.getValues('passwordCheck');
    let isValidPasswordCheck: boolean = true;

    if (passwordCheck !== undefined) {
      isValidPasswordCheck = handleIsValidPasswordCheck(passwordCheck);
    }
    if (!isValidPasswordCheck) return;

    const result = await onSubmit(data);

    if (result) {
      methods.reset();
      router.push(submitLink);
    }
  };
  const [isButtonActive, setIsButtonActive] = useState<'active' | 'inActive'>(
    'inActive',
  );

  const watchAll = Object.values(methods.watch());
  const { isValid } = methods.formState;

  useEffect(() => {
    if (watchAll.every((el) => el) && watchAll.length !== 0 && isValid) {
      setIsButtonActive('active');
      return;
    }
    setIsButtonActive('inActive');
  }, [isValid, watchAll]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            {children}
            <AuthButton
              content={submitButtonTitle}
              size="large"
              type="submit"
              active={isButtonActive}
            />
          </form>
        </FormProvider>
      )}
      <DevTool control={methods.control} />
    </>
  );
}

export default SignFormProvider;
