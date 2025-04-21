import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  className?: "bg-[#4F4F4F]" | "bg-[#ED4848]" | "bg-[#7D48ED]";
};
export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          "w-[77px] h-[44px] rounded-lg text-white text-sm bg-[#4F4F4F] cursor-pointer disabled:bg-gray-400 disabled:cursor-auto",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
