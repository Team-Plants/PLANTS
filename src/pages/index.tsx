import AlertModal from '@/components/modal/alertModal/alertModal';
import ModalLayout from '@/components/modal/modalLayout';

export default function Home() {
  return (
    <ModalLayout>
      <AlertModal buttonItem={<div>aa</div>}>
        비밀번호가 일치하지 않습니다.
      </AlertModal>
    </ModalLayout>
  );
}
