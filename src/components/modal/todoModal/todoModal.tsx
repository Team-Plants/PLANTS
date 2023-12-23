import S from '@/components/modal/todoModal/todoModal.module.css';
import ModalLayout from '@/components/modal/modalLayout';
import Image from 'next/image';
import KebabImg from '@/assets/icons/Kebab.svg';
import CloseImg from '@/assets/icons/Close.svg';
import ManagerOption from '@/components/modal/input/selectInput/managerOption';
import TodoImg from '@/assets/images/Todo2.png';
import TextArea from '@/components/modal/textarea/textarea';
import Comment from '@/components/modal/todoModal/comment';
import TextareaButton from '@/components/modal/button/textareaButton/textareaButton';
import { FieldValues, useForm } from 'react-hook-form';
import ProgressChip from '@/components/chip/progress/progressChip';
import CategoryChip from '@/components/chip/category/categoryChip';

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

interface Category {
  content: string;
  color: Theme;
}

const dummyCategory: Category[] = [
  {
    content: '프로젝트',
    color: 'orange',
  },
  {
    content: '일반',
    color: 'green',
  },
  {
    content: '백엔드',
    color: 'pink',
  },
];

function TodoModal({ onClick }: TodoModalProps) {
  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      comment: '',
    },
  });
  const { handleSubmit, control } = methods;

  function handleCommentSubmit(data: FieldValues) {
    //이후 구현 필요
    console.log(data);
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
            <div className={S.chipContainer}>
              <ProgressChip progress="ToDo" />
              <div>|</div>
              <div className={S.categoryChipContainer}>
                {dummyCategory.map((e, index) => {
                  return (
                    <CategoryChip
                      content={e.content}
                      key={index}
                      color={e.color}
                    />
                  );
                })}
              </div>
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
              <form
                className={S.textareaContainer}
                onSubmit={handleSubmit(handleCommentSubmit)}>
                <TextArea
                  placeholder="댓글 작성하기"
                  control={control}
                  name="comment"
                />
                <TextareaButton />
              </form>
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
