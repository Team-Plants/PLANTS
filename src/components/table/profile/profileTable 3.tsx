import EmailInput from '@/components/Input/emailInput';
import NicknameInput from '@/components/Input/nickName';
import Button from '@/components/button/button';
import ProfileImg from '@/components/profile/profileImg';
import S from '@/components/table/profile/profileTable.module.css';

function ProfileTable() {
  return (
    <div className={S.container}>
      <span className={S.title}>프로필</span>
      <div className={S.itemContainer}>
        <ProfileImg />
        <div className={S.inputContainer}>
          <EmailInput size="shortContainer" />
          <NicknameInput size="shortContainer" />

          <div className={S.buttonContainer}>
            <Button content="저장" status="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTable;
