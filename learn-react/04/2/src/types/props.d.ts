interface ChildProps {
  message: string;
  number: number;
  arr: string[];
  info: Info;
  isLoggedIn: boolean;
  onClick: () => void;
  name?: string;
  value: Value;
  style: Style;
  components: JSX.Element[];
}

interface Info {
  name: string;
  age: number;
}

interface Style {
  fontSize: string;
  color: string;
}

type Value = string | number | (string | number)[];
