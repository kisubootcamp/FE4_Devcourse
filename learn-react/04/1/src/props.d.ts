type User = {
  id: number;
  name: string;
};

type UserProps = {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: User;
  myF: (message: string) => void;
};

type Child = {
  message: string;
  num: number;
  fruit: string[];
  user: { name: string; age: number };
  isLoggedIn: boolean;
  onClick: () => void;
  name?: string;
  value: string | number | (string | number)[];
  style: { fontSize: string; color: string };
  Header: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
};

type Card = {
  backImage: string;
  userImage: string;
  userName: string;
  userId: string;
  follow: () => void;
};
