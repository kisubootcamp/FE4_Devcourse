import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithRef<"button">;

export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;

  return (
    <>
      <button
        // id="my-button"
        className={twMerge(
          "w-[77px] h-[44px] text-white bg-[#7D48ED] rounded-lg cursor-pointer text-sm disabled:bg-gray-400",
          className
        )}
        // name="btns"
        // draggable
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
