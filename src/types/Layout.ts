import { SignFormValuesType } from './SignFormValue';

export interface AuthLayoutType {
  greetingsContent: string;
  submitButtonTitle: string;
  submitLink: string;
  memberStatus: string;
  linkTitle: string;
  link: string;
  handleSubmit: (e: SignFormValuesType) => Promise<boolean | undefined>;
}
