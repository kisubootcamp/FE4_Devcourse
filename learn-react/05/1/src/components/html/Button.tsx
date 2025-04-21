import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  isLogin?: boolean;
  className: "bg-[#ED4848]" | "bg-[#7D48ED]" | "bg-[#4F4F4F]";
};
export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          "w-[77px] h-[44px] text-white bg-[#4F4F4F] rounded-lg cursor-pointer disabled:bg-gray-300 text-sm ",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
