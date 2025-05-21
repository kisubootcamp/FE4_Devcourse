import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  className: 'bg-[#ed4848]' | 'bg-[#4f4f4f]' | 'bg-[#7d48ed]';
};
export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          'w-[77px] h-[44px] text-sm text-white bg-[#4f4f4f] rounded-lg cursor-pointer disabled:bg-gray-300',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
