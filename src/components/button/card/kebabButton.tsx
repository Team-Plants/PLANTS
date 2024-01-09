import { deleteCard } from '@/api/card';
import S from '@/components/button/card/kebab.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

interface Props {
  cardId: number;
  openEditModal: () => void;
  closeTodoModal: () => void;
}

function KebabButton({ cardId, openEditModal, closeTodoModal }: Props) {
  const { refetch } = useQuery({
    queryKey: [QUERY_KEYS.deleteCard],
    queryFn: () => deleteCard(cardId),
    enabled: false,
  });

  async function onClickCardDeleteBtn() {
    await refetch();
    closeTodoModal();
  }

  return (
    <div className={S.container}>
      <button className={S.clickContainer} onClick={openEditModal}>
        수정하기
      </button>
      <button
        className={S.clickContainer}
        onClick={() => onClickCardDeleteBtn()}>
        삭제하기
      </button>
    </div>
  );
}

export default KebabButton;
