import { postProfileImage, putUser } from '@/api/mypage';
import { getUsers } from '@/api/user';
import NicknameInput from '@/components/Input/nickName';
import NoWorkEmailInput from '@/components/Input/noWorkEmailInput';
import Button from '@/components/button/button';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import ImgInput from '@/components/modal/input/imgInput/imgInput';
import InputLayout from '@/components/modal/input/inputLayout';
import S from '@/components/table/profile/profileTable.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { MemberProps } from '@/types/Member';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { FieldValues, useForm } from 'react-hook-form';

function ProfileTable() {
  const methods = useForm<FieldValues>({
    mode: 'onChange',
  });

  const { handleSubmit, control, setValue, setError } = methods;

  const { data } = useQuery<MemberProps>({
    queryKey: [QUERY_KEYS.user],
    queryFn: () => getUsers(),
  });

  const queryclient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: ProfileData) =>
      putUser(data.nickname, data.profileImageUrl),
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          setError('nickname', {
            type: 'validate',
            message: '닉네임은 10자 이하로 작성해주세요.',
          });
          return;
        }
      }
      alert(error);
    },

    onSuccess: () => {
      alert('변경이 완료되었습니다.');
      queryclient.invalidateQueries({ queryKey: ['userMe'] });
    },
  });

  interface ProfileData {
    [key: string]: string;
    nickname: string;
    profileImageUrl: string;
  }

  async function handlePutProfile(data: FieldValues) {
    const newData: ProfileData = {
      nickname: data.nickname,
      profileImageUrl: data.imageUrl,
    };

    if (data.imageUrl) {
      const imgFormData = new FormData();
      imgFormData.append('image', data.imageUrl);
      const response = await postProfileImage(imgFormData);
      newData.profileImageUrl = response.profileImageUrl;
    }

    mutation.mutate(newData);
  }

  return (
    data && (
      <div className={S.container}>
        <span className={S.title}>프로필</span>
        <form
          className={S.itemContainer}
          onSubmit={handleSubmit(handlePutProfile)}>
          <ImgInput
            control={control}
            name="imageUrl"
            setValue={setValue}
            size="large"
          />
          <div className={S.inputContainer}>
            <NoWorkEmailInput data={data} />
            <InputLayout label="닉네임" isNecessary={false}>
              <DefaultInput
                placeholder={data.nickname}
                name="nickname"
                size="middleInput"
                control={control}
              />
            </InputLayout>

            <div className={S.buttonContainer}>
              <Button content="저장" status="primary" />
            </div>
          </div>
        </form>
      </div>
    )
  );
}

export default ProfileTable;
