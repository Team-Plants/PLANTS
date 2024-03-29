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

  if (cookie !== '' && cookie !== 'accessToken=') {
    return {
      redirect: {
        destination: '/mydashboard',
        permanent: false,
      },
    };
  }

  return { props: {} };
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
            <p className={S.h1}>새로운 일정 관리,</p>
            <p className={S.h1Violet}>Taskify</p>
          </div>
          <div className={S.descriptionContainer}>
            <p className={S.serviceDescription}>
              할 일을 효과적으로 관리하고 같이 일하기 좋은,
            </p>
            <p className={S.serviceDescription}>
              본인만의 계정을 만들어 지인 혹은 동료들과 대시 보드를 통해 만날 수
              있는,
            </p>
            <p className={S.serviceDescription}>
              우선순위에 따라 칼럼과 카드를 자유롭게 관리하여 체계적으로 정리할
              수 있는,
            </p>
          </div>
          <button className={S.loginButton} onClick={handleLoginClick}>
            로그인
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
