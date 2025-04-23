import { twMerge } from "tailwind-merge";
type ButtonProps = React.ComponentPropsWithoutRef<"button">;
export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          "w-[77px] h-[44px] text-white rounded-lg cursor-pointer text-sm disabled:bg-gray-300 disabled:cursor-default",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
