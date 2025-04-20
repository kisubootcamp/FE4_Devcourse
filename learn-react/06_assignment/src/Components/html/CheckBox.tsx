import { twMerge } from "tailwind-merge";

type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: "checkbox";
};

export default function CheckBox(props: CheckboxProps) {
  const { children, className, ...rest } = props;
  return (
    //줄 높이를 글꼴과 같이 설정 : leading-none
    //기존 체크박스 스타일 제거 : appearance-none
    //htmlFor : 리액트에서 label 태그가 어떤 폼 요소와 연결될 지 지정하는 속성
    //같은 컴포넌트 내의 아이디를 가진 것과 연결이 됨 -> 텍스트를 클릭해도 연결
    <div className="flex items-center gap-2 leading-none">
      <input
        type="checkbox"
        id="chk"
        className={twMerge(
          `w-5 h-5 appearance-none border border-[#4f4f4f] bg-white checked:bg-[#4f4f4f] rounded-[5px]`,
          className
        )}
        {...rest}
      />
      <label htmlFor="chk">{children}</label>
    </div>
  );
}
