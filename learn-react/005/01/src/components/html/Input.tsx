import { twMerge } from "tailwind-merge";

type ReactInputType = OnlyLiterlas<React.InputHTMLAttributes<HTMLInputElement>["type"]>;
type inputProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & {
  type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
};
export default function Input(props: inputProps) {
  const { className, ...rest } = props;
  return (
    <>
      <input className={twMerge("w-[240px] h-[44px]", className)} {...rest} />
    </>
  );
}
