import S from '@/components/table/member/memberList.module.css';
import MemberItem from './memberItem';
import ArrowButton from '@/components/button/arrow/arrowButton';
import { MemberProps } from '@/types/Member';

function MemberList({ members }: { members: MemberProps[] }) {
  return (
    <div className={S.container}>
      <div className={S.header}>
        구성원
        <div className={S.pagination}>
          1페이지 중 1
          <ArrowButton size="small" />
        </div>
      </div>
      <div className={S.label}>이름</div>
      <div>
        {members.map((member: MemberProps) => {
          return (
            <div className={S.tableItem} key={member.userId}>
              <MemberItem
                nickname={member.nickname}
                profileImageUrl={member.profileImageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemberList;
