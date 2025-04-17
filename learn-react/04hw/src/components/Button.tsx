export default function Button({
  children,
  type,
  fill,
}: {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  fill: boolean;
}) {
  return (
    <>
      <div className="flex justify-center pb-[16px]">
        <button
          type={type}
          className={`w-[325px] h-[44px] rounded-lg flex items-center justify-center border border-[#4F4F4F] ${
            fill
              ? "bg-[#4F4F4F] text-[#F5F5F5]"
              : "bg-[#FFFFFF] text-[#4F4F4F] "
          }`}
        >
          {children}
        </button>
      </div>
    </>
  );
}
