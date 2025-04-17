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

// 자동으로 공유? 그래서 편하게 이용가능.

// login.d.ts
// article.d.ts
// user.d.ts 등등등,,
