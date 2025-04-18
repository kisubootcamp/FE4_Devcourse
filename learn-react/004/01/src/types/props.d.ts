// d.ts = declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보를
// 타입스크립트에 제공하기 위해 사용하는 파일 형식
type UserTypes = {
  id: number;
  name: string;
};
interface UserProps {
  msg: string;
  cnt: number;
  isVisible: boolean;
  tags: string[];
  user: UserTypes;
}
