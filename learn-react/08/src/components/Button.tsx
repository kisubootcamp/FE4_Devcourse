export default function Button({
  type,
  children,
  onClick,
}: {
  type: "submit" | "reset" | "button";
  children: React.ReactNode;
  onClick?: () => void;
}) {
  let buttonClassName = "rounded-md text-sm cursor-pointer px-4 ";
  if (type === "button") {
    buttonClassName += "bg-white text-gray-900 border border-gray-900 py-2";
  } else {
    buttonClassName += "bg-[#4F4F4F] text-white py-3";
  }

  return (
    <>
      <button type={type} className={buttonClassName} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
