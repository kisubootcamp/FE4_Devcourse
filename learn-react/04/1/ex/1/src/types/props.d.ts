interface ChildProps {
  str: string;
  num: number;
  arr: string[];
  obj: { name: string; age: number };
  isLoggedIn: boolean;
  handleClick: () => void;
  name?: string;
  value: string | number | unknown[];
  style: React.CSSProperties;
  Header: React.ReactElement;
  Content: React.ReactElement;
  Footer: React.ReactElement;
}
