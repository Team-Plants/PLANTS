import { getCards } from '@/api/card';
import SettingImg from '@/assets/icons/Setting.svg';
import S from '@/components/column/column.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { CardList } from '@/types/Card';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AddButton from '../button/add/addButton';
import NumberChip from '../chip/number/numberChip';

interface ColumnProps {
  columnId: number;
  columnName: string;
  addClick: () => void;
  settingClick: () => void;
}

function Column({ columnId, columnName, addClick, settingClick }: ColumnProps) {
  const [cards, setCards] = useState<CardList[]>([]);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [cursorId, setCursorId] = useState();

  const { isLoading, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.card],
    queryFn: () => getCards(3, cursorId, columnId),
    enabled: false,
  });

  async function fetchMoreCards() {
    if (isLoading) return;
    refetch();
  }

  useIntersectionObserver({
    target: target,
    fetchCallback: fetchMoreCards,
    props: cursorId,
  });

  useEffect(() => {
    if (data) {
      setCursorId(data.cursorId + 3);
      setCards((prev) => [...prev, ...data.cards]);
    }
  }, [data]);

  return (
    <div className={S.container}>
      <div className={S.infoContainer}>
        <div className={S.info}>
          <div className={S.chip} />
          <span className={S.sectionName}>{columnName}</span>
          <NumberChip num={cards.length} />
        </div>
        <button onClick={settingClick}>
          <Image src={SettingImg} alt="설정 버튼" width={22} height={22} />
        </button>
      </div>
      <AddButton onClick={addClick} />
      <div ref={setTarget} className={S.refContainer}>
        <div className={S.loading}>{isLoading && 'loading...'}</div>
      </div>
    </div>
  );
}

export default Column;
