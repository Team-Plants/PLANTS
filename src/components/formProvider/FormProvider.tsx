import { FormValuesType } from '@/types/FormValue';
import { DevTool } from '@hookform/devtools';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function CommonFormProvider({ children }: PropsWithChildren) {
  const methods = useForm<FormValuesType>({ mode: 'onSubmit' });
  function onSubmit(data: FormValuesType) {
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

export default CommonFormProvider;
