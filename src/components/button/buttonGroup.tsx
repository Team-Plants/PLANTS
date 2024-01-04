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
      queryClient.invalidateQueries({ queryKey: ['invitations'] });
      queryClient.invalidateQueries({ queryKey: ['dashboards'] });
    },
  });

  return (
    <div className={S.groupContainer}>
      <Button
        content={secondaryContent}
        status="secondary"
        onClick={() => mutation.mutate(true)}
      />
      <Button
        content={primaryContent}
        status="primary"
        onClick={() => mutation.mutate(false)}
      />
    </div>
  );
}

export default ButtonGroup;
