import { twMerge } from "tailwind-merge";
type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never
    : T
  : never; //리터럴 타입일때만 추출(string{} 추출)
type ReactInputType = OnlyLiterals<
  React.InputHTMLAttributes<HTMLInputElement>["type"]
>; //<input> 태그에 들어갈 수 있는 모든 속성들을 모아놓은 타입
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  //전체 <input>태그 속성 중 type만 제외
  type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">; //type의 타입을 제한시키고 싶을 때
  //ReactInputType에서 radio,checkbox,range를 제외시킴
};
export default function Input(props: InputProps) {
  const { className, type = "text", ...rest } = props;
  return (
    <>
      <input
        type={type}
        className={twMerge("w-[240px] h-11", className)}
        {...rest}
      />
    </>
  );
}
