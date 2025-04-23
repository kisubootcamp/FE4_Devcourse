import { twMerge } from "tailwind-merge";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox(props: CheckboxProps) {
  const { className, children, ...rest } = props;
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className={twMerge("w-5 h-5 accent-[#4f4f4f]", className)}
        {...rest}
      />
      {children}
    </label>
  );
}
