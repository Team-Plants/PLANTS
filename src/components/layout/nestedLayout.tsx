import { ReactElement } from 'react';
import S from '@/components/layout/nestedLayout.module.css';

function NestedLayout({ children }: { children: ReactElement }) {
  return <div className={S.itemContainer}>{children}</div>;
}

export default NestedLayout;
