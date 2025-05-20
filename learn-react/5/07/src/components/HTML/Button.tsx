import { twMerge } from "tailwind-merge";

//해당 button 에서 사용할 수 있는 모든 타입을 사용할 수 있음
//순수하게 html 특정 tag 에서 사용하는 모든 props를 사용할 수 있는 타입 지정 (React.ComponentProps...)
// 아래 제네릭 타입에는 모오오오오든 tag 이름이 들어갈 수 있음
// className을 지정해서 특정 부분에 안전장치를 걸어놓을 수 있음
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  className: "bg-[#ed4848]" | "bg-[#4f4f4f]" | "bg-[#7d48ed]";
};
export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  // className과 children 만 구조분해 할당, 그 외는 ...rest 에 들어감
  return (
    <>
      <button
        // id="my-button"
        className={twMerge(
          "w-[77px] h-[44px] text-white  rounded-lg cursor-pointer text-sm disabled:bg-gray-300 disabled:cursor-not-allowed",
          className
        )}
        {...rest}>
        {children}
      </button>
    </>
    // <>
    //   <button
    //     // id="my-button"
    //     type={type}
    //     className={twMerge(
    //       "w-[77px] h-[44px] text-white  rounded-lg cursor-pointer text-sm disabled:bg-gray-300 disabled:cursor-not-allowed",
    //       className
    //     )}
    //     disabled={disabled}
    //     // draggable
    //   >
    //     {children}
    //   </button>
    // </>
  );
}
