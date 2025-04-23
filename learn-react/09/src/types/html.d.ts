// input 의 type 값으로 들어오는게 checkbox 나 radio 같은 것들을 제외하기 위해 선언된 타입
type OnlyLiteral<T> = T extends string ? (string extends T ? never : T) : never;

// 하지만 이런식으로 그냥 유니온 타입으로 정의하는게 빠르다.
type InputType =
  | "number"
  | "search"
  | "button"
  | "time"
  | "image"
  | "text"
  | "hidden"
  | "submit"
  | "reset"
  | "date"
  | "datetime-local"
  | "email"
  | "month"
  | "password"
  | "tel"
  | "url"
  | "week";

// input 의 type 값을 가져오기 위해 사용됨
type ReactInputType = OnlyLiteral<
  React.InputHTMLAttributes<HTMLInputElement>["type"]
>;
