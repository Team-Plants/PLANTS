import { SignFormValuesType } from '@/types/SignFormValue';
import { DevTool } from '@hookform/devtools';
import { ReactNode, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface SignFormProviderProps {
  children: ReactNode;
  onSubmit: (e: SignFormValuesType) => void;
}

function SignFormProvider({ children, onSubmit }: SignFormProviderProps) {
  const [mounted, setMounted] = useState(false);
  const methods = useForm<SignFormValuesType>({ mode: 'onSubmit' });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
        <DevTool control={methods.control} />
      </>
    )
  );
}

export default SignFormProvider;
