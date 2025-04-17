export default function Button({ text, isBg }: Button) {
  return (
    <>
      <button
        className={`w-full border text-sm py-2 my-2 rounded-md border-[#4F4F4F] font-medium
        ${isBg ? 'bg-[#4F4F4F] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#4F4F4F]'}`}
      >
        {text}
      </button>
    </>
  );
}
