export default function Input({
  type,
  placeholder,
}: {
  type: "email" | "password" | "name";
  placeholder: string;
}) {
  return (
    <>
      <div className="flex justify-center pb-[16px]">
        <input
          type={type}
          className="w-[325px] h-[44px] px-[16px] py-[13.5px] border rounded-lg border-[#4F4F4F] "
          placeholder={placeholder}
        ></input>
      </div>
    </>
  );
}
