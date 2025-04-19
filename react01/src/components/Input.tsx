import { twMerge } from "tailwind-merge";

// type OnlyLiterals<T> = T extends string ? (string extends T ? never : T) : never;
// type ReactInputType = OnlyLiterals<React.InputHTMLAttributes<HTMLInputElement>["type"]>;
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: string;
};
export default function Input(props: InputProps) {
  const { className, type = "text", ...rest } = props;
  return (
    <>
      <input
        type={type}
        className={twMerge(
          "w-[325px] h-[44px] border rounded-lg focus:outline-[#4f4f4f] ml-6 mb-4 pl-4",
          className
        )}
        {...rest}
      />
    </>
  );
}
