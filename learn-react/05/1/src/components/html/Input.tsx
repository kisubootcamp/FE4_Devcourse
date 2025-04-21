import { twMerge } from "tailwind-merge";

// type OnlyLiteral<T> = T extends string ? (string extends T ? never : T) : never;
// type ReactInputType = OnlyLiteral<
//   React.InputHTMLAttributes<HTMLInputElement>["type"]
// >;
// type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
//   type?: Exclude<ReactInputType, "checkbox" | "radio" | "range">;
// };

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: InputType;
};
export default function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <>
      <input className={twMerge("w-[240px] h-[44px]", className)} {...rest} />
    </>
  );
}
