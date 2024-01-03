export const ERROR_EMAIL_CHECK = '이메일 형식으로 작성해 주세요.';
export const ERROR_EMAIL_EXIST = '이미 사용중인 이메일입니다.';
export const ERROR_EMAIL_EMPTY = '이메일을 입력해 주세요.';

export const ERROR_PASSWORD_CHECK = '비밀번호가 일치하지 않습니다.';
export const ERROR_PASSWORD_VALIDATION = '8자 이상 입력해 주세요.';
export const ERROR_PASSWORD_EMPTY = '비밀번호를 입력해 주세요.';

export const ERROR_PASSWORD_SECOND_EMPTY = '비밀번호를 한번 더 입력해 주세요.';

export const ERROR_PASSWORD_CURRENT = '현재 비밀번호가 틀립니다.';

export const ERROR_NICKNAME_CHECK =
  '총 2~10글자, 알파벳과 한글을 포함해 작성해 주세요.';
export const ERROR_NICKNAME_EMPTY = '닉네임을 입력해 주세요.';

//이메일 형식
export const EMAIL_STANDARD =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//비밀번호 형식: 영문, 숫자, 특수기호 포함 8자 이상
export const PASSWORD_STANDARD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

//닉네임 형식: 두 글자 이상, 열 글자 이하, 적어도 한개의 알파벳 혹은 한글을 포함
export const NICKNAME_STANDARD = /^(?=.*[A-Za-z가-힣])[A-Za-z가-힣\d]{2,10}$/;

//컬럼 생성 : 중복된 컬럼이 있는지 확인
export const ERROR_DUPLICATED_COLUMN = '중복된 컬럼 이름입니다.';
