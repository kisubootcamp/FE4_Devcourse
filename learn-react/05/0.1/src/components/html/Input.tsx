import { twMerge } from 'tailwind-merge';
type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never
    : T
  : never;
type ReactInputType = OnlyLiterals<
  React.InputHTMLAttributes<HTMLInputElement>['type']
>;
type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
  type?: Exclude<ReactInputType, 'radio' | 'checkbox' | 'range'>;
};
export default function Input(props: InputProps) {
  const { className, type = 'text', ...rest } = props;
  return (
    <>
      <input
        type={type}
        className={twMerge('w-[240px] h-11', className)}
        {...rest}
      />
    </>
  );
}

// import { twMerge } from 'tailwind-merge';

// // 이건 좀 빡세다! 다시 잘 알아보기
// type OnlyLiterals<T> = T extends string
//   ? string extends T
//     ? never
//     : T
//   : never;
// type ReactInputType = React.InputHTMLAttributes<HTMLInputElement>['type'];
// type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
//   type?: Exclude<ReactInputType, 'radio' | 'checkbox' | 'range'>;
// };
// export default function Input(props: InputProps) {
//   const { className, ...rest } = props;
//   return (
//     <>
//       <input type="" className={twMerge('w-full h-11', className)} {...rest} />
//     </>
//   );
// }
