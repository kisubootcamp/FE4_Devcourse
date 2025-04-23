export default function Sign() {
  return (
    <>
      <div className="pt-[40px] pr-[25px] pb-[40px] pl-[25px] border border-[#D1D1D1] rounded-[8px] w-[375px] bg-white">
        <div>
          <h2 className="text-[20px] text-[#4F4F4F] font-bold mb-[10px]">
            Sign Into App
          </h2>
          <p className="text-[14px] text-[#4F4F4F]">
            Please enter your details to continue.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-[16px] mb-[32px] mt-[20px]">
            <input
              className="border pt-[13px] pr-[16px] pb-[13px] pl-[16px] rounded-lg"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              className="border pt-[13px] pr-[16px] pb-[13px] pl-[16px] rounded-lg"
              type="email"
              placeholder="someone@exapmle.com"
            />
            <input
              className="border pt-[13px] pr-[16px] pb-[13px] pl-[16px] rounded-lg"
              type="password"
              placeholder="Enter Password"
            />
            <div className="text-[14px] text-[#4F4F4F] flex gap-[8px]">
              <input type="checkbox" className="size-[20px] rounded-[5px]" />{" "}
              <p>
                I agree with <span className="font-bold">terms</span> and{" "}
                <span className="font-bold">policies.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <button className="font-medium text-[14px] text-[#F5F5F5] w-full h-[44px] bg-[#4f4f4f] rounded-lg cursor-pointer">
              Sign In
            </button>
            <button className="font-medium text-[14px] text-[#4f4f4f] w-full h-[44px] bg-[#F5F5F5] rounded-lg cursor-pointer border border-[#4f4f4f]">
              Go To Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
