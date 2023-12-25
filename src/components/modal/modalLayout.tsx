import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import S from '@/components/modal/modalLayout.module.css';

interface ModalLayoutProp {
  children: ReactNode;
  onClick: () => void;
}

function ModalLayout({ children, onClick }: ModalLayoutProp) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <>
      {ReactDOM.createPortal(
        <div className={S.overlay}>
          <div className={S.outerModalContainer} onClick={onClick} />

          {children}
        </div>,
        document?.getElementById('modal') as HTMLElement,
      )}
    </>
  );
}

export default ModalLayout;
