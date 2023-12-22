interface tableListProps {
  name: string;
  label: string;
  tableData: string; // data[]
  pagination?: string; // 임시
  inviteButton?: string; // 임시
}

function tableList({
  name,
  label,
  tableData,
  pagination,
  inviteButton,
}: tableListProps) {
  return (
    <>
      <div>
        {name}, {pagination}, {inviteButton}
      </div>
      <div>{label}</div>
      <div>{tableData}</div>
      {/* 첫번째랑 마지막 child만 스타일 조정 */}
    </>
  );
}

export default tableList;
