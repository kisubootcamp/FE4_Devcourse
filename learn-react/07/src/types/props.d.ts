// d.ts
// declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보를
// 타입스크립트에 제공하기 위한 파일
// export 키워드를 사용하면 선언식
// 아무것도 없이 아래 처럼 쓰면 글로벌 타입 선언

interface UserProps {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: User;
  handleClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    message: string
  ) => void;
  setProfile: (profile: boolean) => void;
  profile: boolean;
}
type User = {
  id: number;
  name: string;
};

interface Props {
  stringProps: string;
  numberProps: number;
  arrayProps: string[];
  objectProps: { name: string; age: number };
  isLoggedIn: boolean;
  funcProps: (e: React.MouseEvent<HTMLButtonElement>, message: string) => void;
  nameProps?: string;
  value: number | string | (string | number)[];
  styleProps: React.CSSProperties;
}

interface ProfileCardProps {
  userImg: string;
  backgroundImg: string;
  username: string;
  instargram: string;
  handleClickFollow: () => void;
}

interface ChildPropsProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}
