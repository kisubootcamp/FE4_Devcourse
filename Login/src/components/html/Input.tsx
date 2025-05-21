import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never // string extends T 이면 T가 catch‑all
    : T // 그 외엔 리터럴
  : never;
type ReactInputType = OnlyLiterals<
  React.InputHTMLAttributes<HTMLInputElement>["type"]
>;
type InputProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & {
  // Ref속성까지 함께 받음
  type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
};

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  props: InputProps,
  ref
) {
  const { className, type = "text", ...rest } = props;

  return (
    <>
      <input
        ref={ref}
        type={type}
        className={twMerge("w-full h-11", className)}
        {...rest}
      />
    </>
  );
});
// 리액트 18버전에서 ref를 받는 방법
// ***forwardRef***로 함수형 컴포넌트를 감싼다
// 제네릭으로 ref객체를 받는 태그, 해당 컴포넌트에 전달하고자 하는 props의 타입을 지정
// 함수형 컴포넌트에 두번째 매개변수 ref 지정
// 타입 안에서 ref를 받도록 설정
