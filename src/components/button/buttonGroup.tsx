import Button from '@/components/button/button';
import S from '@/components/button/button.module.css';

interface ButtonProps {
  primaryContent: string;
  secondaryContent: string;
  device: DeviceType | 'small';
}

function ButtonGroup({
  primaryContent,
  secondaryContent,
  device,
}: ButtonProps) {
  return (
    <div className={S.groupContainer}>
      <Button content={secondaryContent} device={device} status="secondary" />
      <Button content={primaryContent} device={device} status="primary" />
    </div>
  );
}

export default ButtonGroup;
