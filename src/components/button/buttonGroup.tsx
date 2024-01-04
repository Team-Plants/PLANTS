import Button from '@/components/button/button';
import { putInvitations } from '@/api/invitations';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import S from '@/components/button/button.module.css';

interface ButtonProps {
  primaryContent: string;
  secondaryContent: string;
  invitationId?: number;
  invited?: boolean;
}

function ButtonGroup({
  primaryContent,
  secondaryContent,
  invitationId,
  invited,
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
        content={primaryContent}
        status="primary"
        invited={invited}
        onClick={() => mutation.mutate(true)}
      />
      <Button
        content={secondaryContent}
        status="secondary"
        invited={invited}
        onClick={() => mutation.mutate(false)}
      />
    </div>
  );
}

export default ButtonGroup;
