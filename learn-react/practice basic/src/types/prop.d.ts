interface Child {
  String: string;
  Number: number;
  tags: { name: string; age: number };
  Array: string[];
  isLoggedin: boolean;
  Button: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => void;
  value: string | number | unknown[];
  style: { fontSize: string; color: string };
}
