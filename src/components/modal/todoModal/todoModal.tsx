import S from '@/components/modal/todoModal/todoModal.module.css';
import ModalLayout from '../modalLayout';
import Image from 'next/image';
import KebabImg from '@/assets/icons/Kebab.svg';
import CloseImg from '@/assets/icons/Close.svg';
import ManagerOption from '../input/selectInput/managerOption';
import TodoImg from '@/assets/images/Todo2.png';
import TextArea from '../textarea/textarea';
import Comment from './comment';
import TextareaButton from '../button/textareaButton/textareaButton';
import { useState } from 'react';

interface TodoModalProps {
  onClick: () => void;
}

const dummyComment = [
  {
    name: '정만철',
    date: '2022.12.27 14:00',
    comment: '오늘안에 CCC 까지 만들 수 있을까요?',
  },
  {
    name: '정만철',
    date: '2022.12.27 14:00',
    comment: '오늘안에 CCC 까지 만들 수 있을까요?',
  },
  {
    name: '정만철',
    date: '2022.12.27 14:00',
    comment: '오늘안에 CCC 까지 만들 수 있을까요?',
  },
];

function TodoModal({ onClick }: TodoModalProps) {
  const [comment, setComment] = useState('');

  function handleCommentSubmit() {
    //이후 구현 필요
  }

  return (
    <ModalLayout onClick={onClick}>
      <div className={S.todoModalContainer}>
        <div className={S.headerContainer}>
          <div className={S.modalTitle}>새로운 일정 관리 Taskify</div>
          <div className={S.modalToolContainer}>
            <Image src={KebabImg} alt="케밥 아이콘" width={28} height={28} />
            <Image
              src={CloseImg}
              alt="닫힘 아이콘"
              width={32}
              height={32}
              onClick={onClick}
            />
          </div>
        </div>

        <div className={S.mainContainer}>
          <div className={S.mainContentContainer}>
            {/* chip 컴포넌트 추가된 후 수정 필요 */}
            <div className={S.chipContainer}>
              <div></div>
              <div>|</div>
              <div></div>
            </div>

            <div className={S.mainContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum finibus nibh arcu, quis consequat ante cursus eget.
              Cras mattis, nulla non laoreet porttitor, diam justo laoreet eros,
              vel aliquet diam elit at leo.
            </div>

            <Image className={S.mainImg} src={TodoImg} alt="할 일 이미지" />

            <div className={S.commentInputContainer}>
              <div className={S.commentTitle}>댓글</div>
              <div className={S.textareaContainer}>
                <TextArea
                  placeholder="댓글 작성하기"
                  value={comment}
                  onChange={setComment}
                />
                <TextareaButton onClick={handleCommentSubmit} />
              </div>
            </div>

            <div className={S.commentContainer}>
              {dummyComment.map((e, index) => {
                return <Comment data={e} key={index} />;
              })}
            </div>
          </div>

          <div className={S.mainInfoContainer}>
            <div className={S.mainInfoItemContainer}>
              <div className={S.mainInfoTitle}>담당자</div>
              <ManagerOption name="배윤철"></ManagerOption>
            </div>
            <div className={S.mainInfoItemContainer}>
              <div className={S.mainInfoTitle}>마감일</div>
              <div className={S.mainInfoContent}>2022.12.30 19:00</div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
}

export default TodoModal;
