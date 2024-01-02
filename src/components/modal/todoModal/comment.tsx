import { deleteComment, getComments, putComment } from '@/api/comment';
import S from '@/components/modal/todoModal/comment.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { CommentData, CommentDetail } from '@/types/Comment';
import { useMutation, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import TextArea from '../textarea/textarea';

interface CommentProps {
  data: CommentDetail;
}

function Comment({ data }: CommentProps) {
  const [modifyInput, setModifyInput] = useState(false);

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      content: data.content,
    },
  });

  const { handleSubmit, control } = methods;

  const { refetch } = useQuery<CommentData>({
    queryKey: [QUERY_KEYS.comment],
    queryFn: () => getComments(172),
    enabled: false,
  });

  const mutation = useMutation({
    mutationFn: (data: FieldValues) => putComment(1025, data.content), // commentId
    onError: (error) => {
      alert(error);
    },

    onSuccess: () => {
      refetch();
    },
  });

  useQuery({
    queryKey: [QUERY_KEYS.deleteComment],
    queryFn: () => deleteComment(data.id),
  });

  async function onClickCommentDeleteBtn() {
    await refetch();
  }

  async function onClickCommentModifyBtn(data: FieldValues) {
    mutation.mutate(data);
    setModifyInput(!modifyInput);
  }

  return (
    <div className={S.commentContainer}>
      {data.author.profileImageUrl ? (
        <Image
          src={data.author.profileImageUrl}
          alt="유저 프로필 이미지"
          className={S.profileImg}
        />
      ) : (
        <div className={S.noImg}></div>
      )}

      <div className={S.commentContentContainer}>
        <div className={S.commentTopContainer}>
          <div className={S.name}>{data.author.nickname}</div>
          <div className={S.date}>{data.createdAt}</div>
        </div>

        {modifyInput ? (
          <form
            className={S.textareaContainer}
            onSubmit={handleSubmit(onClickCommentModifyBtn)}>
            <TextArea
              placeholder="댓글을 수정하세요"
              control={control}
              name="content"
            />
            <div className={S.commentToolContainer}>
              <button type="submit" className={S.commentToolItem}>
                완료
              </button>
              <div
                className={S.commentToolItem}
                onClick={() => setModifyInput(!modifyInput)}>
                취소
              </div>
            </div>
          </form>
        ) : (
          <>
            <div className={S.commentContent}>{data.content}</div>

            <div className={S.commentToolContainer}>
              <div
                className={S.commentToolItem}
                onClick={() => setModifyInput(!modifyInput)}>
                수정
              </div>
              <div
                className={S.commentToolItem}
                onClick={() => onClickCommentDeleteBtn()}>
                삭제
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
