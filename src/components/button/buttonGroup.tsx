import { MouseEvent } from 'react';
import Button from '@/components/button/button';
import { putInvitations } from '@/api/invitations';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import S from '@/components/button/button.module.css';

interface ButtonProps {
  primaryContent: string;
  secondaryContent: string;
  invitationId?: number;
}

function ButtonGroup({
  primaryContent,
  secondaryContent,
  invitationId,
}: ButtonProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (status: boolean) => putInvitations(invitationId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invitations', 'dashboards'] });
      // queryClient.invalidateQueries({ queryKey: ['dashboards'] });
    },
  });

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const content = (e.currentTarget as HTMLButtonElement).textContent;
    if (content === '수락') {
      mutation.mutate(true);
    } else if (content === '거절') {
      mutation.mutate(false);
    }
  }

  return (
    <div className={S.groupContainer}>
      <Button
        content={secondaryContent}
        status="secondary"
        onClick={handleClick}
      />
      <Button content={primaryContent} status="primary" onClick={handleClick} />
    </div>
  );
}

export default ButtonGroup;
