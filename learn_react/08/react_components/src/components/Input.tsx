import { twMerge } from "tailwind-merge";

type onlyLiterals<T> = T extends string
  ? string extends T
    ? never
    : T
  : never;

type ReactInputType = onlyLiterals<
  React.InputHTMLAttributes<HTMLInputElement>["type"]
>;
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
};

export default function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <>
      <input
        type=""
        className={twMerge("w-[240px] h-[44px]", className)}
        placeholder="Enter Your Name"
        {...rest}
      ></input>
    </>
  );
}
