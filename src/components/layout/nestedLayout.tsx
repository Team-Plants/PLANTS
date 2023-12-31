import { ReactNode } from 'react';
import S from '@/components/layout/nestedLayout.module.css';

function NestedLayout({ children }: { children: ReactNode }) {
  return <div className={S.itemContainer}>{children}</div>;
}

export default NestedLayout;
