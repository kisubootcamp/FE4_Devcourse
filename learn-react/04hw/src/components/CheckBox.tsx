export default function CheckBox({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center space-x-2 pb-[32px]">
        <input
          type="checkbox"
          className="px-4 py-2 border rounded-lg accent-[#4F4F4F]"
        ></input>
        <label className="text-sm text-[#4F4F4F]">{children}</label>
      </div>
    </>
  );
}
