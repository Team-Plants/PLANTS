import EmailImg from '@/assets/icons/Email.svg';
import FacebookImg from '@/assets/icons/Facebook.svg';
import InstagramImg from '@/assets/icons/Instagram.svg';
import HomeImg from '@/assets/images/Home1.png';
import HomeImg2 from '@/assets/images/Home2.png';
import HomeImg3 from '@/assets/images/Home3.png';
import HomeImg4 from '@/assets/images/Home4.png';
import HomeImg5 from '@/assets/images/Home5.png';
import HomeImg6 from '@/assets/images/Home6.png';
import DarkHeader from '@/components/header/DarkHeader';
import S from '@/pages/index.module.css';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookie = context.req.headers.cookie || '';

  if (cookie !== '') {
    return {
      redirect: {
        destination: '/mydashboard',
        permanent: false,
      },
    };
  }
}

function Home() {
  const router = useRouter();
  function handleLoginClick() {
    router.push('/login');
  }

  return (
    <>
      <DarkHeader />
      <div className={S.body}>
        <div className={S.article}>
          <div className={S.imgContainer}>
            <Image src={HomeImg} alt="홈이미지1" fill={true} />
          </div>
          <div className={S.h1Container}>
            <p className={S.h1}>새로운 일정 관리</p>
            <p className={S.h1Violet}>Taskify</p>
          </div>
          <p className={S.serviceDescription}>
            이 프로젝트는 사용자들이 효과적으로 할일을 관리하고 협업을 강화하는
            데 초점을 두었습니다. 회원가입과 로그인을 통해 사용자는 개인 계정을
            생성하고 관리할 수 있습니다. 대시보드의 생성, 수정, 삭제를 통해
            사용자는 자신에게 적합한 작업환경을 손쉽게 조성할 수 있으며, 각
            대시보드에는 칼럼과 카드를 자유롭게 추가, 수정, 삭제하여 할일을
            체계적으로 정리할 수 있습니다. 사이드메뉴를 활용하여 빠르게
            대시보드에 접근할 수 있고, 협업을 위한 핵심 기능으로는 다른 사용자를
            대시보드에 초대하거나 초대를 취소하며, 초대를 받은 사용자는 손쉽게
            수락할 수 있습니다. 대시보드에 속한 구성원 목록을 확인하고, 대시보드
            owner는 구성원을 삭제하여 팀의 동적인 협업을 가능하게 합니다. 이
            프로젝트는 간편한 사용자 경험과 효율적인 협업을 통해 업무 관리의
            품질을 높이는 것을 목표로 하여 개발되었습니다.
          </p>
          <button className={S.loginButton} onClick={handleLoginClick}>
            로그인하기
          </button>
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
    </>
  );
}

export default Home;
