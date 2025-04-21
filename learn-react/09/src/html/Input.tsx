import { twMerge } from "tailwind-merge";

// Omit 은 2번째에 넣은 타입을 제외한 나머지 타입을 반환한다.
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  // 유니온 타입일때 두번째 항목들을 제외해준다.
  type: Exclude<InputType, "checkbox" | "radio" | "range" | "file" | "color">;
};

export default function Input({ className, ...rest }: InputProps) {
  return (
    <>
      <input className={twMerge("w-[240px] h-[44px]", className)} {...rest} />
    </>
  );
}
