export default function Sign() {
  return (
    <div className='card w-[375px] h-[495px] rounded-lg mx-auto mt-20 px-[25px] pt-[40px]'>
      <h1 className='ml-[25px] text-[20px] font-bold text-[#4F4F4F]'>Sign Into App</h1>
      <p className='mt-[13px] ml-[25px] text-[14px] text-[#4F4F4F]'>
        Please enter your details to continue.
      </p>
      <input type='text' className='input mt-[20px] mx-auto' placeholder='Enter Your Name' />
      <input type='email' className='input mt-[16px] mx-auto' placeholder='someone@example.com' />
      <input type='password' className='input mt-[16px] mx-auto' placeholder='Enter Password' />
      <label className='flex items-center mt-[16px] ml-[25px] text-[14px] text-[#4F4F4F] gap-[8px]'>
        <input type='checkbox' />I agree with <strong>terms</strong> and <strong>policies.</strong>
      </label>
      <button className='w-[325px] h-[44px] bg-[#4F4F4F] text-[#F5F5F5] text-[14px] rounded-[8px] mx-auto mt-[32px] flex items-center justify-center'>
        Sign In
      </button>
      <button className='w-[325px] h-[44px] bg-white text-[#4F4F4F] border border-[#4F4F4F] text-[14px] rounded-[8px] mx-auto mt-[16px] flex items-center justify-center'>
        Go To Log In
      </button>
    </div>
  );
}
