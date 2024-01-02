import { getCards } from '@/api/card';
import SettingImg from '@/assets/icons/Setting.svg';
import S from '@/components/column/column.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { CardData } from '@/types/Card';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AddButton from '@/components/button/add/addButton';
import NumberChip from '@/components/chip/number/numberChip';
import Card from '@/components/card/card';

interface ColumnProps {
  columnId: number;
  columnName: string;
  addClick: () => void;
  settingClick: () => void;
}

function Column({ columnId, columnName, addClick, settingClick }: ColumnProps) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [cursorId, setCursorId] = useState();

  const { isLoading, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.uniqueCard],
    queryFn: () => getCards(3, cursorId, columnId),
  });

  async function fetchMoreCards() {
    if (isLoading) return;
    if (!cursorId) return;
    refetch();
  }

  useIntersectionObserver({
    target: target,
    fetchCallback: fetchMoreCards,
    props: cursorId,
  });

  useEffect(() => {
    if (data) {
      setCursorId(data.cursorId);
      setTotalCount(data.totalCount);
      setCards((prev) => [...prev, ...data.cards]);
    }
  }, [data]);

  useEffect(() => {
    data;
  }, [data]);

  return (
    <div className={S.container}>
      <div className={S.infoContainer}>
        <div className={S.info}>
          <div className={S.chip} />
          <span className={S.sectionName}>{columnName}</span>
          <NumberChip num={totalCount} />
        </div>
        <button onClick={settingClick}>
          <Image src={SettingImg} alt="설정 버튼" width={22} height={22} />
        </button>
      </div>
      <div className={S.addContainer}></div>
      <AddButton onClick={addClick} />
      <div className={S.cardContainer}>
        {cards &&
          cards.map((card) => (
            <div key={card.id}>
              <Card title={card.title} date={card.dueDate} />
            </div>
          ))}
        <div ref={setTarget} className={S.refContainer}>
          <div className={S.loading}>{isLoading && 'loading...'}</div>
        </div>
      </div>
    </div>
  );
}

export default Column;
