import { twMerge } from "tailwind-merge";
type ButtonProps = React.ComponentPropsWithoutRef<"button">; //button태그에서 사용할 수 있는 속성들의 집합
//&{isLogin?:boolean;};처럼 사용자 정의 속성들은 이 뒤에 &연산자로 더해줄 수 있음음
export default function Button(
  props: ButtonProps //모든 요소들이 optional로 사용됨
  //{type,disabled,className,children}:{
  //   type:"submit"|"reset"|"button";
  //   disabled:boolean;
  //   className: string;
  //   children: React.ReactNode;
  //} 이를 대체할 수 있음
) {
  const { className, children, ...rest } = props; //사용할 속성만 변경시킬때 사용(rest로 사용)

  return (
    <>
      <button
        // id="my-button"
        //type="reset","submit","button"
        //type="button"
        //type={type}
        className={twMerge(
          "w-[77px] h-[44px] text-sm text-white rounded-lg cursor-pointer disabled :bg-gray-300 disabled:cursor-default",
          className //App.tsx에서 받은 Button의 className
          // ""내용이 default값, 뒷 추가된 값을 우선시 사용
        )}
        {...rest}
        // name="btns"
        //disabled={disabled} //비활성화
        // draggable
      >
        {children}
      </button>
    </>
  );
}
