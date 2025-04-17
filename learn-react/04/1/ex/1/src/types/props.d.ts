interface ChildProps {
  str: string;
  num: number;
  arr: string[];
  obj: { name: string; age: number };
  isLoggedIn: boolean;
  handleClick: () => void;
  name: string;
  value: string | number | [];
  style: { fontSize: string; color: string };
  Header: React.ComponentType;
  Content: React.ComponentType;
  Footer: React.ComponentType;
}
