// react 18버전에서 ref 객체를 받는 방법

import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never // string extends T 이면 T가 catch‑all
    : T // 그 외엔 리터럴
  : never;

type ReactInputType = OnlyLiterals<
  React.InputHTMLAttributes<HTMLInputElement>['type']
>;

type InputProps = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  type?: Exclude<ReactInputType, 'radio' | 'checkbox' | 'range'>;
};

// forwardRef는 2개를 받는

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  props: InputProps,
  ref
) {
  const { className, type = 'text', ...rest } = props;

  return (
    <>
      <input
        ref={ref}
        type={type}
        className={twMerge('w-full h-11', className)}
        {...rest}
      />
    </>
  );
});
