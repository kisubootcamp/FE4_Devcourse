//d.ts
//declaratiom file
//자바스크립트 라이브러리나 모듈에 대한 타입 정보를 타입스크립트에 제공하기 사용하는 파일 형식

interface Props {
  message: string;
  isVisible: boolean;
  count: number;
  tags: string[];
  user: { id: number; name: string };
  myFunction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
