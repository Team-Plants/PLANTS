import { deleteCard } from '@/api/card';
import S from '@/components/button/card/kebab.module.css';

interface Props {
  cardId: number;
  onClick: () => void;
}

function KebabButton({ cardId, onClick }: Props) {
  function onClickCardDeleteBtn(cardId: number) {
    if (confirm('해당 카드를 삭제하시겠습니까?')) {
      deleteCard(cardId);
    }
  }

  return (
    <div className={S.container}>
      <button className={S.clickContainer} onClick={onClick}>
        수정하기
      </button>
      <button
        className={S.clickContainer}
        onClick={() => onClickCardDeleteBtn(cardId)}>
        삭제하기
      </button>
    </div>
  );
}

export default KebabButton;
