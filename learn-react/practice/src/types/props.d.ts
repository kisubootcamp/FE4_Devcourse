interface User {
  name: string;
  username: string;
  profImg: string;
  cardImg: string;
  follow: (name: string) => void;
}
