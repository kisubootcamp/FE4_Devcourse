import { twMerge } from "tailwind-merge";

// 컴포넌트에서 사용할 수 있는 모든 타입이 들어있다.
// 해당 element 의 모든 타입이 들어있는 것.
type ButtonProps = React.ComponentPropsWithoutRef<"button">;

// 따로 사용해야 하는 className, children 만 따로 사용하고 나머지는 묶어주고 선언한다.
export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <>
      <button className={twMerge(`button-style`, className)} {...rest}>
        {children}
      </button>
    </>
  );
}
