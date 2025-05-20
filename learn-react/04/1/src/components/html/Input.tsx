type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never // string extends T 이면 T가 catch-all
    : T // 그 외엔 리터럴
  : never;

type ReactInputType = OnlyLiterals<
  React.InputHTMLAttributes<HTMLInputElement>["type"]
>;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
};

export default function Input(props: InputProps) {
  const { className, type, ...rest } = props;

  return (
    <>
      <input type={type} className={className} {...rest} />
    </>
  );
}
