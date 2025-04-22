import { twMerge } from 'tailwind-merge';

type InputType =
  | 'number'
  | 'button'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'password'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
  type?: InputType;
};
export default function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <>
      <input
        type=""
        className={twMerge('w-[240px] h-11', className)}
        {...rest}
      />
    </>
  );
}
