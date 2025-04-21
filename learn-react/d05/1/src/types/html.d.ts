type ReactInputType =
  | "number"
  | "button"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "password"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

// 리터럴 타입만 추출한 커스텀 타입
type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never
    : T
  : never;
