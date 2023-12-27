import { SignFormValuesType } from '@/types/SignFormValue';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface SignFormProviderProps {
  children: ReactNode;
  onSubmit: (e: SignFormValuesType) => Promise<boolean | undefined>;
  submitLink: string;
}

function SignFormProvider({
  children,
  onSubmit,
  submitLink,
}: SignFormProviderProps) {
  const [mounted, setMounted] = useState(false);
  const methods = useForm<SignFormValuesType>({ mode: 'onSubmit' });
  const router = useRouter();

  const handleOnSubmit = async (data: SignFormValuesType) => {
    const result = await onSubmit(data);

    if (result) {
      methods.reset();
      router.push(submitLink);
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            {children}
          </form>
        </FormProvider>
        <DevTool control={methods.control} />
      </>
    )
  );
}

export default SignFormProvider;
