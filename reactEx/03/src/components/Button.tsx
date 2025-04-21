import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;
export default function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <>
      <button
        className={twMerge(
          "rounded-[8px] border w-[325px] h-[44px] bg-[#4f4f4f] flex justify-center items-center ml-[23px] mb-[16px] cursor-pointer",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
