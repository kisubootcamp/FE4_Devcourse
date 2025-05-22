// import { Children } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

// export default function Button({
//   type,
//   disabled,
//   className,
//   children,
// }: ButtonProps) {
//   return (
//     <>
//       <button
//         type={type}
//         className={twMerge(
//           'w-[77px] h-[44px] text-white rounded-lg cursor-pointer text-sm disabled:bg-gray-400 disabled:cursor-default',
//           className
//         )}
//         disabled={disabled}
//       >
//         {children}
//       </button>
//     </>
//   );
// }

export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          'w-[77px] h-[44px] text-white rounded-lg cursor-pointer text-sm disabled:bg-gray-400 disabled:cursor-default',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
