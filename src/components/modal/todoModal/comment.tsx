import { deleteComment, putComment } from '@/api/comment';
import S from '@/components/modal/todoModal/comment.module.css';
import { CommentDetail } from '@/types/Comment';
import Image from 'next/image';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import TextArea from '../textarea/textarea';

interface CommentProps {
  data: CommentDetail;
}

function Comment({ data }: CommentProps) {
  const [modifyInput, setModifyInput] = useState(false);
  const { control } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      content: data.content,
    },
  });

  async function onClickCommentDeleteBtn(commentId: number) {
    if (confirm('해당 댓글을 삭제하시겠습니까?')) {
      await deleteComment(commentId);
    }
  }

  async function onClickCommentModifyBtn(commentId: number, content: string) {
    await putComment(commentId, content);
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
          <>
            <TextArea
              placeholder="댓글을 수정하세요"
              control={control}
              name="content"
            />
            <div className={S.commentToolContainer}>
              <button
                className={S.commentToolItem}
                onClick={() => {
                  setModifyInput(!modifyInput),
                    onClickCommentModifyBtn(data.id, data.content);
                }}>
                완료
              </button>
              <button
                className={S.commentToolItem}
                onClick={() => setModifyInput(!modifyInput)}>
                취소
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={S.commentContent}>{data.content}</div>
            <div className={S.commentToolContainer}>
              <button
                className={S.commentToolItem}
                onClick={() => setModifyInput(!modifyInput)}>
                수정
              </button>
              <button
                className={S.commentToolItem}
                onClick={() => onClickCommentDeleteBtn(data.id)}>
                삭제
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
