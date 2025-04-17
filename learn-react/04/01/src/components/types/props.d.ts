// .d
// declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보를 타입스크립트에 제공하기 위한 파일 형식
// 따로 import, export 할 필요 없음

interface User {
  id: number;
  name: string;
}

type UserProps = {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: User;
};
