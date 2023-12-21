import S from '@/components/modal/input/inputLayout.module.css';
import { ReactNode } from 'react';

interface InputLayoutProps {
  label: string;
  isNessary: boolean;
  children: ReactNode;
}

function InputLayout({ label, isNessary, children }: InputLayoutProps) {
  return (
    <div className={S.inputContainer}>
      <label className={S.label}>
        {label}
        {isNessary && <span className={S.violetLabel}>*</span>}
      </label>
      <div>{children}</div>
    </div>
  );
}

export default InputLayout;
