export default function InputComponents({
  type,
  placeholder = "",
  children,
  autocomplete,
}: {
  type: string;
  placeholder?: string;
  children?: React.ReactNode;
  autocomplete?: string;
}) {
  let mainDivClassName = "";
  let inputClassName = "";
  if (type === "checkbox") {
    mainDivClassName = "flex items-center gap-2";
    inputClassName = "accent-[#4F4F4F] w-5 h-5 rounded-md cursor-pointer";
  } else {
    mainDivClassName = "";
    inputClassName =
      "bg-white border border-[#4F4F4F] text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 focus-visible:outline-1 focus-visible:border-gray-900 block w-full p-2.5";
  }

  return (
    <div className={mainDivClassName}>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        id={type === "checkbox" ? "checkbox" : undefined}
        autoComplete={autocomplete}
      />
      {children}
    </div>
  );
}
