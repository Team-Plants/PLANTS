import S from '@/components/card/card.module.css';
import CategoryChip from '../chip/category/categoryChip';
import CalendarImg from '@/assets/icons/Calendar.svg';
import Image from 'next/image';

interface CardProps {
  title: string;
  date: string;
  profileImg?: string;
  cardImg?: string;
}

interface Chip {
  content: string;
  color: Theme;
}

const dummyChip: Chip[] = [
  {
    content: '프로젝트',
    color: 'orange',
  },
  {
    content: '백엔드',
    color: 'pink',
  },
];

function Card({ title, date, profileImg, cardImg }: CardProps) {
  return (
    <div className={S.cardContainer}>
      {cardImg && (
        <Image className={S.cardImg} src={cardImg} alt="할 일 카드 이미지" />
      )}
      <div className={S.contentContainer}>
        <div className={S.cardTitle}>{title}</div>

        <div className={S.subContentContainer}>
          <div className={S.chipContainer}>
            {dummyChip.map((e, index) => {
              return (
                <CategoryChip content={e.content} color={e.color} key={index} />
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
