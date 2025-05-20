// d.ts → declaration file
// : 자바스크립트 라이브러리나 모듈에 대한 타입 정보를 타입스크립트에 제공하기 위한 파일 형식
// 별도의 export, import 가 필요 없음
// 필요한 타입을 다 d.ts 에 정의

interface User {
  id: number;
  name: string;
}

interface UserProps {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: User;
  myFunction: (message: string) => void;
}
