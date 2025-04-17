type User = {
  id: number;
  name: string;
};
interface UserProps {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: User;
  myFunction: (message: string) => void;
  greet: void;
}
