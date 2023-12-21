import { SignFormValuesType } from '@/types/SignFormValue';
import { DevTool } from '@hookform/devtools';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function SignFormProvider({ children }: PropsWithChildren) {
  const methods = useForm<SignFormValuesType>({ mode: 'onSubmit' });
  function onSubmit(data: SignFormValuesType) {
    console.log(data);
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
      <DevTool control={methods.control} />
    </>
  );
}

export default SignFormProvider;
