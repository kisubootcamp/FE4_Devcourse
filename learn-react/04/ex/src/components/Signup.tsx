export default function Signup({ boxStyle, inputStyle }: SignInUp) {
  return (
    <div className={boxStyle}>
      <div className="pb-[20px]">
        <h1 className="text-[20px] font-bold pb-[10px]">Sign into App</h1>
        <p className="font-normal">Please enter your details to continue.</p>
      </div>
      <div>
        <div className="flex flex-col gap-[16px] mb-[32px]">
          <input
            className={inputStyle}
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className={inputStyle}
            type="text"
            placeholder="someone@example.com"
          />
          <input
            className={inputStyle}
            type="text"
            placeholder="Enter Password"
          />
          <div className="flex">
            <input id="agree" className="mr-[8px]" type="checkbox" />
            <label htmlFor="agree">
              I agree with <strong>terms</strong> and <strong>policies.</strong>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <button className="h-[44px] bg-[#4F4F4F] text-white rounded-[8px]">
            Sign In
          </button>
          <button className="h-[44px] border-[#4F4F4F] border-[1px] rounded-[8px]">
            Go To Log In
          </button>
        </div>
      </div>
    </div>
  );
}
