// }
type User = {
  id: number;
  name: string;
};

// ***Props : ***에 컴포넌트명 입력
// 타입 지정할 때 이런 형태로 이름 지어주신다고 하심
interface UserProps {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: User;
}
