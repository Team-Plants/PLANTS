import S from '@/components/modal/todoModal/comment.module.css';
import Image from 'next/image';

interface CommentProps {
  data: {
    name: string;
    date: string;
    comment: string;
    profileImg?: string;
  };
}

function Comment({ data }: CommentProps) {
  return (
    <div className={S.commentContainer}>
      {data.profileImg ? (
        <Image
          src={data.profileImg}
          alt="유저 프로필 이미지"
          className={S.profileImg}
        />
      ) : (
        <div className={S.noImg}></div>
      )}
      <div className={S.commentContentContainer}>
        <div className={S.commentTopContainer}>
          <div className={S.name}>{data.name}</div>
          <div className={S.date}>{data.date}</div>
        </div>

        <div className={S.commentContent}>{data.comment}</div>

        <div className={S.commentToolContainer}>
          <div className={S.commentToolItem}>수정</div>
          <div className={S.commentToolItem}>삭제</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
