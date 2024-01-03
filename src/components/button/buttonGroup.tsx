import Button from '@/components/button/button';
import S from '@/components/button/button.module.css';

interface ButtonProps {
  primaryContent: string;
  secondaryContent: string;
}

function ButtonGroup({ primaryContent, secondaryContent }: ButtonProps) {
  return (
    <div className={S.groupContainer}>
      <Button content={primaryContent} status="primary" />
      <Button content={secondaryContent} status="secondary" />
    </div>
  );
}

export default ButtonGroup;
