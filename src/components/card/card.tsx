import CalendarImg from '@/assets/icons/Calendar.svg';
import S from '@/components/card/card.module.css';
import Image from 'next/image';
import CategoryChip from '../chip/category/categoryChip';
import { selectChipColor } from '@/utils/utility';

interface CardProps {
  title: string;
  date: string;
  profileImg?: string;
  cardImg?: string;
  onClick: () => void;
  tags: string[];
}

function Card({ title, date, profileImg, cardImg, onClick, tags }: CardProps) {
  console.log(tags);

  return (
    <div className={S.cardContainer} onClick={onClick}>
      {cardImg && (
        <Image className={S.cardImg} src={cardImg} alt="할 일 카드 이미지" />
      )}
      <div className={S.contentContainer}>
        <div className={S.cardTitle}>{title}</div>

        <div className={S.subContentContainer}>
          <div className={S.chipContainer}>
            {tags.map((value, index) => {
              return (
                <CategoryChip
                  content={value}
                  color={selectChipColor((value.length + index) % 6)} // 최초로 한 번만 실행되면서 특정한 수를 주는 방법
                  key={index}
                />
              );
            })}
          </div>
          <div className={S.bottomContainer}>
            <div className={S.dateContainer}>
              <Image
                src={CalendarImg}
                alt="캘린더 아이콘"
                className={S.dateIcon}
              />
              <div className={S.date}>{date}</div>
            </div>
            {profileImg ? (
              <Image src={profileImg} alt="프로필 이미지" />
            ) : (
              <div className={S.profileChip}>B</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
