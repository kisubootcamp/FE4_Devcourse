// import {twMerge} from "tailwind-merge";

// type ReactInputType = React.InputHTMLAttributes<HTMLInputElement>["type"];
// type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
//   // type?: "text" | "password" | "tel" | "number"; // 모든 속성은 다 허용하되, 타입에서는 이 타입들만 허락함 ~
//   type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;  ➡️ 사양이 바껴서 이제 이게 안먹힘 (강사님이 체크해주신다고 하심 !)
// };
// export default function Input(props: InputProps) {
//   const {className, ...rest} = props;
//   // className만 따로 빼는 이유???
//   return (
//     <>
//       <input type='text' className={twMerge("w-[240px] h-[44px]", className)} {...rest} />
//     </>
//   );
// }

/* 근데 이렇게 하면 너무 복잡해져서... */

import {twMerge} from "tailwind-merge";
type OnlyLiterals<T> = T extends string ? (string extends T ? never : T) : never;
type ReactInputType = OnlyLiterals<React.InputHTMLAttributes<HTMLInputElement>["type"]>;
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
};
export default function Input(props: InputProps) {
  const {className, type = "text", ...rest} = props;
  // className만 따로 빼는 이유???
  return (
    <>
      <input type={type} className={twMerge("w-[240px] h-11", className)} {...rest} />
    </>
  );
}
