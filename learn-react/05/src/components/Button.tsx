type ButtonProps = {
  children: React.ReactNode;
  style?: string;
};

export default function Button({ children, style }: ButtonProps) {
  return (
    <button
      className={`
        w-[325px] h-[44px]
        rounded-lg
        cursor-pointer
        ${style ?? ''}
      `}
    >
      {children}
    </button>
  );
}
