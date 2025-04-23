import {twMerge} from "tailwind-merge";

// ComponentPropsWithoutRef 를 활용한 타입 지정
// 타입별칭으로 지정한 이유 : 나중에 인터섹션으로 필요한 props를 조합하기 위해
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  className?: "bg-[#ed4848]" | "bg-[#4f4f4f]" | "bg-[#7D48ED]";
};

// 그럼 보통 ComponentPropsWithoutRef를 활용해서 모든 컴포넌트들을 만드나????

export default function Button(props: ButtonProps) {
  const {className, children, ...rest} = props; // className과 children만 구조분해한다.
  return (
    <>
      <button
        className={twMerge(
          "w-[77px] h-[44px] text-sm text-white bg-[#4f4f4f] rounded-lg cursor-pointer disabled:bg-gray-400 disabled:cursor-default",
          className
        )}
        {...rest} // 부모 컴포넌트
        // 어떤 형태의 버튼 태그든지 전부 쓸 수 있게됨 !
      >
        {children}
      </button>
    </>
  );
}
