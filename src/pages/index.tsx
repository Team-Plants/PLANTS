import S from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import HomeImg from '@/assets/images/Home1.png';
import HomeImg2 from '@/assets/images/Home2.png';
import HomeImg3 from '@/assets/images/Home3.png';
import HomeImg4 from '@/assets/images/Home4.png';
import HomeImg5 from '@/assets/images/Home5.png';
import HomeImg6 from '@/assets/images/Home6.png';
import EmailImg from '@/assets/icons/Email.svg';
import FacebookImg from '@/assets/icons/Facebook.svg';
import InstagramImg from '@/assets/icons/Instagram.svg';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import InputModal from '@/components/modal/inputModal/inputModal';
import InputLayout from '@/components/modal/input/inputLayout';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import ModalButtonSet from '@/components/modal/button/modalButtonSet';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import TodoModal from '@/components/modal/todoModal/todoModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModal() {
    setIsModalOpen((prev) => !prev);
  }

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
    },
  });

  const { handleSubmit, control } = methods;

  function handleAddTodo(data: FieldValues) {
    // 구현 필요
    console.log(data);
  }

  return (
    <>
      {/* <header></header> */}
      <div className={S.body}>
        <div className={S.article}>
          <div className={S.imgContainer} onClick={() => handleModal()}>
            <Image src={HomeImg} alt="홈이미지1" fill={true} />
          </div>
          <div className={S.h1Container}>
            <p className={S.h1}>새로운 일정 관리</p>
            <p className={S.h1Violet}>Taskify</p>
          </div>
          <p className={S.serviceDescription}>서비스에 대한 설명</p>
          {/* <button></button> */}
        </div>
        <div className={S.pointContainer}>
          <div className={S.point}>
            <div className={S.pointHeader}>
              <p className={S.pointH1}>Point 1</p>
              <p className={S.pointDescription}>
                일의 <span className={S.pointDescriptionSpan}>우선순위</span>를
                <br />
                관리하세요
              </p>
            </div>
            <div className={S.pointImgContainer1}>
              <Image className={S.pointImg1} src={HomeImg2} alt="홈이미지2" />
            </div>
          </div>
          <div className={S.point2}>
            <div className={S.pointHeader2}>
              <p className={S.pointH1}>Point 2</p>
              <p className={S.pointDescription}>
                해야 할 일을
                <br />
                등록하세요
              </p>
            </div>
            <div className={S.pointImgContainer2}>
              <Image className={S.pointImg2} src={HomeImg3} alt="홈이미지3" />
            </div>
          </div>
        </div>
        <div className={S.configContainer}>
          <div className={S.configOuter}>
            <p className={S.h2}>생산성을 높이는 다양한 설정 ⚡</p>
            <div className={S.configList}>
              <div className={S.config}>
                <div className={S.configImgContainer}>
                  <Image
                    className={S.configImg1}
                    src={HomeImg4}
                    alt="홈이미지4"
                  />
                </div>
                <div className={S.configDescriptionContainer}>
                  <p className={S.h3}>대시보드 설정</p>
                  <p className={S.h4}>
                    대시보드 사진과 이름을 변경할 수 있어요.
                  </p>
                </div>
              </div>
              <div className={S.config}>
                <div className={S.configImgContainer}>
                  <Image
                    className={S.configImg2}
                    src={HomeImg5}
                    alt="홈이미지5"
                  />
                </div>
                <div className={S.configDescriptionContainer}>
                  <p className={S.h3}>초대</p>
                  <p className={S.h4}>새로운 팀원을 초대할 수 있어요.</p>
                </div>
              </div>
              <div className={S.config}>
                <div className={S.configImgContainer}>
                  <Image
                    className={S.configImg3}
                    src={HomeImg6}
                    alt="홈이미지6"
                  />
                </div>
                <div className={S.configDescriptionContainer}>
                  <p className={S.h3}>구성원</p>
                  <p className={S.h4}>구성원을 초대하고 내보낼 수 있어요.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={S.footer}>
        <div>©codeit - 2023</div>
        <div className={S.footerGap}>
          <div>Privacy Policy</div>
          <div>FAQ</div>
        </div>
        <div className={S.linkList}>
          <Link href="https://mail.google.com" target="_blank">
            <Image src={EmailImg} alt="이메일이미지" width={17} height={17} />
          </Link>
          <Link href="https://www.facebook.com" target="_blank">
            <Image
              src={FacebookImg}
              alt="페이스북이미지"
              width={17}
              height={17}
            />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <Image
              src={InstagramImg}
              alt="인스타그램이미지"
              width={17}
              height={17}
            />
          </Link>
        </div>
      </footer>

      {/* 모달관련 사용 예시입니다. 리뷰 마무리되면 삭제 후 머지하겠습니다. 참고해주세요. */}
      {/* 확인하고자 하는 부분 주석 풀고, 필요한 내용 import 후 사용가능합니다.  */}

      {/* 단순 안내 모달 */}
      {/* {isModalOpen && (
        <AlertModal
          onClick={handleModal}
          buttonItem={
            <ModalDefaultButton type="submit" onClick={handleModal}>
              확인
            </ModalDefaultButton>
          }>
          비밀번호가 일치하지 않습니다.
        </AlertModal>
      )} */}

      {/* 할 일 생성, 할 일 수정 모달 */}
      {/* {isModalOpen && <AddTodoModal onClick={handleModal} />} */}
      {/* {isModalOpen && <EditTodoModal onClick={handleModal} />} */}

      {/* 기본 입력 모달 */}
      {/* {isModalOpen && (
        <InputModal onClick={handleModal} title={'칼럼 관리'}>
          <InputLayout label="이름" isNecessary={false}>
            <form
              onSubmit={handleSubmit(handleAddTodo)}
              className={CommonStyle.form}>
              <DefaultInput
                placeholder="이름을 입력해 주세요"
                control={control}
                name="name"
              />
              <ModalButtonSet
                isDelete={true}
                submitmButtonTitle="변경"
                onClickCancel={handleModal}
              />
            </form>
          </InputLayout>
        </InputModal>
      )} */}

      {/* 할일 카드 모달 */}
      {isModalOpen && <TodoModal onClick={handleModal} />}
    </>
  );
}
