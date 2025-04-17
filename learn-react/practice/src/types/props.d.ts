interface User {
  name: string;
  username: string;
  profImg: string;
  cardImg: string;
  follow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
