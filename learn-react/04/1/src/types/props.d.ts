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
  myFunction: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    string
  ) => void;
  greet: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
