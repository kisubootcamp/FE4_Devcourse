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
}

// ts파일이라면  export
// 재사용 가능성 낮음
// 파일생성 기준은 사람마다 다름 - 내 기준
// ex) 하나의 props마다, 기능별로 등등 일관되면 괜찮음.
