import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">; // &{className=}을 써서 값을 지정해줄 수도 있다.
export default function button(
  //   {
  //   id,
  //   type,
  //   className,
  //   disabled,
  //   children,
  // }
  props: ButtonProps
) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        // id={id}
        // type={type}
        className={twMerge(
          "w-[77px] h-[44px] text-sm text-[#ffffff] rounded-lg cursor-pointer disabled:bg-gray-300 disabled:cursor-default",
          className
        )}
        {...rest}
        // disabled={disabled}
        // name="btns"
        // draggable
      >
        {children}
      </button>
    </>
  );
}

// className으로 지정한 className과 합침
// twMerge가 앞의 중복 요소를 제거
