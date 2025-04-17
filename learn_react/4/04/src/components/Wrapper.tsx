export default function Wapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col px-[30px] py-[45px] border border-[#D1D1D1] rounded-[20px] max-w-[375px] mt-[50px] ml-[50px] bg-white">
        {children}
      </div>
    </>
  );
}
