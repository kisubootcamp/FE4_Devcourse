type InputProps = {
  type: string;
  placeholder: string;
  style?: string;
};
// border = 1px solid #4F4F4F
// border-radius = 8px
// placeholder : #ACACAC
// width: 325
// height : 44
// font-size : 14
// const style =  {
//   border ,border-[#4F4F4F]
// }

export default function Input({ type, placeholder, style }: InputProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`
    w-[325px] h-[44px]
    text-sm 
    placeholder-[#ACACAC] 
    border border-[#4F4F4F] 
    rounded-lg 
    px-4 
    ${style ? style : ''}
  `}
      />
    </>
  );
}
