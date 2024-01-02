import S from '@/components/modal/modalLayout.module.css';
import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalLayoutProp {
  children: ReactNode;
  onClick: () => void;
  isOpen?: boolean;
}

function ModalLayout({ children, onClick, isOpen }: ModalLayoutProp) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
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
