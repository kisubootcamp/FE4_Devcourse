export default function SignUp() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col justify-start  bg-white w-[375px] h-[495px] rounded-[8px] border-[1px] border-[#D1D1D1] py-[40px] px-[25px]  ">
          <div className="inline-block">
            <h1 className="text-[20px] font-bold pb-[10px]">Sign Into App</h1>
            <p className="text-[14px]">Please enter your details to continue</p>
          </div>

          <form action="submit" className="pt-[20px]">
            <div className="">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="rounded-[8px] w-[325px] h-[44px] border-[1px] border-[#4F4F4F] text-[14px] pl-[16px]"
              />
            </div>
            <div className="pt-[16px]">
              <input
                type="email"
                placeholder="someone@example.com"
                className="rounded-[8px] w-[325px] h-[44px] border-[1px] border-[#4F4F4F] text-[14px] pl-[16px]"
              />
            </div>
            <div className="pt-[16px]">
              <input
                type="password"
                placeholder="Enter Password"
                className="rounded-[8px] w-[325px] h-[44px] border-[1px] border-[#4F4F4F] text-[14px] pl-[16px]"
              />
            </div>

            <label htmlFor="checkAgree" className="block pt-[16px]">
              <input
                type="checkbox"
                name=""
                id="checkAgree"
                className="accent-[#4f4f4f]"
              />{" "}
              I agree with <span className="font-bold">terms</span> and{" "}
              <span className="font-bold">policies</span>.
            </label>
          </form>
          <div className="pt-[32px]">
            <button
              type="submit"
              className="rounded-[8px] w-[325px] h-[44px] border-[1px] border-[#4F4F4F] text-[14px] bg-[#4f4f4f] text-white ">
              Sign In
            </button>
            <button
              type="button"
              className="rounded-[8px] w-[325px] h-[44px] border-[1px] border-[#4F4F4F] text-[14px] mt-[16px]">
              Go To Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
