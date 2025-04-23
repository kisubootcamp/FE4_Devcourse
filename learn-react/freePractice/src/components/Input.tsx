type InputProps = {
  type: string;
  placeholder: string;
  style?: string;
};
export default function Input({ type, placeholder, style }: InputProps) {
  return (
    <>
      <div className="ml-[50px] mt-[20px]">
        <input
          type={type}
          placeholder={placeholder}
          className={`w-[500px] h-[50px] border-[#4c4c4c] border-[2px] rounded-lg ${
            style ? style : ''
          }`}
        />
      </div>
    </>
  );
}
