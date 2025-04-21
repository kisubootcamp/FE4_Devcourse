export default function SignIn() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-[375px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Sign Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form action="" className="grid gap-4">
            <input
              type="text"
              className="input-style"
              placeholder=" Enter Your Name"
            />

            <input
              type="text"
              className="input-style"
              placeholder=" someone@example.com"
            />

            <input
              type="password"
              className="input-style"
              placeholder=" Enter Password"
            />

            <div>
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies.</em>
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-[#4f4f4f] text-[#f5f5f5]"
            >
              Sign In
            </button>

            <button
              type="button"
              className="w-full h-11 border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
            >
              Go To Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
