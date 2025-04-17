export default function LoginLayout({ title, description, children }: LoginLayout) {
  return (
    <>
      <div className='w-[375px] h-full bg-[#FFFFFF] px-[25px] py-[40px] rounded-md'>
        <h2 className='text-[#4F4F4F] text-[20px]  font-semibold mb-2'>{title}</h2>
        <p className='text-[#4F4F4F] text-[14px] mb-[20px]'>{description}</p>
        {children}
      </div>
    </>
  );
}
