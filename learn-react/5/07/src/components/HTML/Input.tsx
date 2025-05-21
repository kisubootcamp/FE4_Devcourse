// 객체에서 Omit 을 이용해 "type "의 타입 제거하고 & 로 재정의
// 유니온 타입에서는 exclude 사용

import { twMerge } from "tailwind-merge";

// type OnlyLiteral<T> = T extends string ?
//     string extends T ?
//     never : T
//     : never;
type ReactInputType = React.InputHTMLAttributes<HTMLInputElement>["type"];
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
};

export default function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <>
      <input
        type="text"
        className={twMerge("w-[340px] h-[44px]", className)}
        {...rest}
      />
    </>
  );
}
