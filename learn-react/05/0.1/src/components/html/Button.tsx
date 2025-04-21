import { twMerge } from 'tailwind-merge';
// Tailwind css가 겹칠때, 우선순위에 따라 자동으로 병합해주는 유틸리티
// twMerge("bg-red-500", "bg-blue-500"일때, 뒤에꺼만 남긴다.)

// React.ComponentPropsWithoutRef : 하나의 태그에 사용할 수 있는 모든 기본속성을 가져오는 코드
// <'button'>을 쓰면, type, onClick,disabled,name,value,fomr 등 전부 자동완성된다.
// 따로 타입정의 ('submit' | 'button' | 'reset' )를 하지 않아도, type="submit"같은것도 자동으로 된다. 편하다!
type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  className?: 'bg-[#ed4848]' | 'bg-[#4f4f4f]' | 'bg-[#7D48ED]';
  //  이 3개의 색만 사용 가능하다는 뜻
};
export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          'w-[77px] h-[44px] text-sm text-white bg-[#4f4f4f] rounded-lg cursor-pointer disabled:bg-gray-400 disabled:cursor-default',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}

// import { twMerge } from 'tailwind-merge';

// // 이게 있으면 번거롭게 타입을 지정할 필요가 없어진다.
// type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

// // export default function Button({ type, className, children }: ButtonProps) {
// export default function Button(props: ButtonProps) {
//   // className, childre 만 구조분해할 때
//   const { className, children, ...rest } = props;
//   return (
//     <>
//       <button
//         // type={type}
//         className={twMerge(
//           'w-[77px] h-[44px] text-sm text-white bg-[#4F4F4F] rounded-lg cursor-pointer',
//           className
//         )}
//         {...rest}
//       >
//         {children}
//       </button>
//     </>
//   );
// }
