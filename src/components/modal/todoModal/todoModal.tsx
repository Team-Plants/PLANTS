import { getComments, postComments } from '@/api/comment';
import CloseImg from '@/assets/icons/Close.svg';
import KebabImg from '@/assets/icons/Kebab.svg';
import TodoImg from '@/assets/images/Todo2.png';
import KebabButton from '@/components/button/card/kebabButton';
import CategoryChip from '@/components/chip/category/categoryChip';
import ProgressChip from '@/components/chip/progress/progressChip';
import TextareaButton from '@/components/modal/button/textareaButton/textareaButton';
import ManagerOption from '@/components/modal/input/selectInput/managerOption';
import ModalLayout from '@/components/modal/modalLayout';
import TextArea from '@/components/modal/textarea/textarea';
import Comment from '@/components/modal/todoModal/comment';
import S from '@/components/modal/todoModal/todoModal.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { CardData } from '@/types/Card';
import { CommentData } from '@/types/Comment';
import { useMutation, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface TodoModalProps {
  state: boolean;
  cardData: CardData;
  modal: () => void;
}

function TodoModal({ state, cardData, modal }: TodoModalProps) {
  const [openKebab, setOpenKebab] = useState(false);
  const [isOpenState, setIsOpenState] = useState<boolean>(state);

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      comment: '',
    },
  });

  const { handleSubmit, control } = methods;

  const { data, refetch } = useQuery<CommentData>({
    queryKey: [QUERY_KEYS.comment],
    queryFn: () => getComments(172),
  });

  const mutation = useMutation({
    mutationFn: (data: FieldValues) =>
      postComments(data.content, 172, 1012, 323),
    onError: (error) => {
      alert(error);
    },
    onSuccess: () => {
      refetch();
    },
  });

  async function handleCommentSubmit(data: FieldValues) {
    mutation.mutate(data);
    //  cardId, columnId, dashboardId,
  }

  return (
    <ModalLayout
      onClick={() => {
        setIsOpenState(!false);
      }}
      isOpen={isOpenState}>
      <div className={S.todoModalContainer}>
        <div className={S.headerContainer}>
          <div className={S.modalTitle}>{cardData?.title}</div>
          <div className={S.modalToolContainer}>
            <div>
              <Image
                src={KebabImg}
                alt="케밥 아이콘"
                width={28}
                height={28}
                onClick={() => setOpenKebab(!openKebab)}
              />
              {openKebab && (
                <KebabButton cardId={cardData.id} onClick={modal} />
              )}
            </div>

            <Image
              src={CloseImg}
              alt="닫힘 아이콘"
              width={32}
              height={32}
              onClick={() => setIsOpenState(false)}
            />
          </div>
        </div>
        <div className={S.mainContainer}>
          <div className={S.mainContentContainer}>
            <div className={S.chipContainer}>
              <ProgressChip progress="ToDo" />
              <div>|</div>
              <div className={S.categoryChipContainer}>
                {cardData?.tags?.map((e, index) => {
                  return (
                    <CategoryChip
                      content={e}
                      key={index}
                      color="green#00FF00"
                    />
                  );
                })}
              </div>
            </div>

            <div className={S.mainContent}>{cardData?.description}</div>
            <Image className={S.mainImg} src={TodoImg} alt="할 일 이미지" />
            <div className={S.commentInputContainer}>
              <div className={S.commentTitle}>댓글</div>
              <form
                className={S.textareaContainer}
                onSubmit={handleSubmit(handleCommentSubmit)}>
                <TextArea
                  placeholder="댓글 작성하기"
                  control={control}
                  name="content"
                />
                <TextareaButton />
              </form>
            </div>

            <div className={S.commentContainer}>
              {data?.comments.map((item, index) => {
                return <Comment data={item} key={index} />;
              })}
            </div>
          </div>

          <div className={S.mainInfoContainer}>
            <div className={S.mainInfoItemContainer}>
              <div className={S.mainInfoTitle}>담당자</div>
              <ManagerOption
                name={cardData?.assignee.nickname}
                profileImg={cardData?.assignee?.profileImageUrl}
              />
            </div>
            <div className={S.mainInfoItemContainer}>
              <div className={S.mainInfoTitle}>마감일</div>
              <div className={S.mainInfoContent}>{cardData?.dueDate}</div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
}

export default TodoModal;
