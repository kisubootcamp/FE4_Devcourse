import { twMerge } from "tailwind-merge";
type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never // string extends T 이면 T가 catch‑all
    : T // 그 외엔 리터럴
  : never;
type ReactInputType = OnlyLiterals<
  React.InputHTMLAttributes<HTMLInputElement>["type"]
>;
// 원래 ComponentPropsWithoutRef 로 진행
// ComponentPropsWithRef 로 교체
type InputProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & {
  type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
};

export default function Input(props: InputProps) {
  const { className, type = "text", ...rest } = props;

  return (
    <>
      <input
        type={type}
        className={twMerge("w-full h-11", className)}
        {...rest}
      />
    </>
  );
}

// react 18 이전 버전에서 사용하던 방식
// import { forwardRef } from "react";
// import { twMerge } from "tailwind-merge";
// type OnlyLiterals<T> = T extends string
//   ? string extends T
//     ? never // string extends T 이면 T가 catch‑all
//     : T // 그 외엔 리터럴
//   : never;

// type ReactInputType = OnlyLiterals<
//   React.InputHTMLAttributes<HTMLInputElement>["type"]
// >;

// type InputProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & {
//   type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
// };

// export default forwardRef<HTMLInputElement, InputProps>(function Input(
//   props: InputProps,
//   ref
// ) {
//   const { className, type = "text", ...rest } = props;

//   return (
//     <>
//       <input
//         ref={ref}
//         type={type}
//         className={twMerge("w-full h-11", className)}
//         {...rest}
//       />
//     </>
//   );
// });
