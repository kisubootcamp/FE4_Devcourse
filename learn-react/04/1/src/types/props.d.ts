interface User {
  id: number;
  name: string;
}
interface UserProps {
  message: string;
  count: number;
  isVisible: boolean; //boolean은 출력되지 않음 jsx에서 .toString() 적용해야 보임
  tags: string[]; //전체 배열을 문자열로 받아서 출력 JSON.stringfy(값,null,최대 스페이싱(요소 간))
  user: User;
  myFunction: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => void;
  greet: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
//props.ts 였다면 export interface UserProps하고 App.tsx에서 import 해와야함
//props.d.ts면 export,import 필요없음
//d.ts = declaration file
//자바스크립트 라이브러리나 모듈에 대한 타입 정보를
//타입스크립트에 제공하기 위해 사용하는 파일 형식

//사용할 목적별로 인터페이스 이름이 달라지므로 재사용률이 낮음
//=>props.d.ts에 따로 넣지 않고 User.tsx에 같이 선언하는 경우도 많음
//=>같이 정의하던 따로 정의하던 일관성있게만 작성하기(그치만 별도파일 추천)
