import { twMerge } from "tailwind-merge";

type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: "checkbox";
};

export default function Checkbox(props: CheckboxProps) {
  const { children, className, ...rest } = props;

  return (
    <>
      <div className="w-[240px] y-[20px] flex items-center gap-[8px]">
        <input
          type="checkbox"
          id="chk"
          className={twMerge(
            `w-5 h-5 appearance-none border border-[#4F4F4F] bg-white rounded-[5px] checked:bg-[#4F4F4F] checked:bg-[url('./check-icon.svg')] checked:bg-no-repeat checked:bg-center`,
            className
          )}
          {...rest}
        />
        <label htmlFor="chk">{children}</label>
      </div>
    </>
  );
}
