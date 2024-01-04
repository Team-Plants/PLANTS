import { deleteCard } from '@/api/card';
import S from '@/components/button/card/kebab.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

interface Props {
  cardId: number;
  onClick: () => void;
}

function KebabButton({ cardId, onClick }: Props) {
  const { refetch } = useQuery({
    queryKey: [QUERY_KEYS.deleteCard],
    queryFn: () => deleteCard(cardId),
    enabled: false,
  });

  async function onClickCardDeleteBtn() {
    await refetch();
  }

  return (
    <div className={S.container}>
      <button className={S.clickContainer} onClick={onClick}>
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
