interface UserProps {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: { id: number; name: string };
}
// 확장자가 d.ts라고 하면 export, import 모두 할 필요가 없음
// d : declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보를
// 타입스크립트에 제공하기 위헤 사용하는 파일 형식
