import S from '@/components/modal/modalLayout.module.css';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalLayoutProp {
  children: ReactNode;
  onClick: () => void;
}

function ModalLayout({ children, onClick }: ModalLayoutProp) {
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
