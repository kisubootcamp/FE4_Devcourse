import { twMerge } from "tailwind-merge";
type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          "w-[77px] h-[44px] text-white bg-[#4f4f4f] rounded-[8px] cursor-pointer text-sm disabled:cursor-default disabled:bg-gray-400",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
