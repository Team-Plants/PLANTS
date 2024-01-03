import { postProfileImage, putUser } from '@/api/mypage';
import { getUsers } from '@/api/user';
import NicknameInput from '@/components/Input/nickName';
import NoWorkEmailInput from '@/components/Input/noWorkEmailInput';
import Button from '@/components/button/button';
import ImgInput from '@/components/modal/input/imgInput/imgInput';
import S from '@/components/table/profile/profileTable.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { MemberProps } from '@/types/Member';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FieldValues, useForm } from 'react-hook-form';

function ProfileTable() {
  const methods = useForm<FieldValues>({
    mode: 'onChange',
  });

  const { handleSubmit, control, setValue } = methods;

  const { data, refetch } = useQuery<MemberProps>({
    queryKey: [QUERY_KEYS.user],
    queryFn: () => getUsers(),
  });

  const mutation = useMutation({
    mutationFn: (data: FieldValues) =>
      putUser(data.nickname, data.profileImageUrl),

    onError: (error) => {
      alert(error);
    },

    onSuccess: () => {
      alert('정보가 수정되었습니다!');
      refetch();
    },
  });

  interface ProfileData {
    [key: string]: string;
  }

  async function handlePutProfile(data: FieldValues) {
    const newData: ProfileData = {
      profileImageUrl: data.imageUrl,
    };

    if (data.imageUrl) {
      const imgFormData = new FormData();
      imgFormData.append('image', data.imageUrl);
      const response = await postProfileImage(imgFormData);
      newData.profileImageUrl = response.profileImageUrl;
    }

    const response = await putUser(data.nickname, newData.profileImageUrl);
    return response;
    // mutation.mutate(data);
  }

  return (
    <div className={S.container}>
      <span className={S.title}>프로필</span>
      <form
        className={S.itemContainer}
        onSubmit={handleSubmit(handlePutProfile)}>
        <ImgInput control={control} name="imageUrl" setValue={setValue} />

        <div className={S.inputContainer}>
          <NoWorkEmailInput data={data} />
          <NicknameInput size="shortContainer" data={data} />

          <div className={S.buttonContainer}>
            <Button content="저장" status="primary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileTable;
