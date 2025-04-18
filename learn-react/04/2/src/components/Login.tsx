export default function Login() {
  return (
    <>
      <div className="w-[375px] h-[434px] bg-white rounded-[8px] border border-[#d1d1d1] px-6 py-10 flex flex-col items-start">
        <h1 className="text-[20px] font-bold mb-2 text-[#4f4f4f]">
          Login Into App
        </h1>
        <p className="text-sm mb-4">Please enter your details to continue.</p>

        <input
          className="rounded-[8px] border border-[#4F4F4F] w-full h-[44px] mb-4 p-2"
          placeholder="someone@example.com"
        />
        <input
          className="rounded-[8px] border border-[#4F4F4F] w-full h-[44px] mb-4 p-2"
          placeholder="Enter Password"
        />

        <label className="text-sm mb-8  flex items-center gap-1 text-[#4f4f4f]">
          <input
            type="checkbox"
            className="mr-2 accent-[#4F4F4F] w-[20px] h-[20px] rounded-[8px]"
          />
          I agree with <strong>terms</strong> and
          <strong>policies.</strong>
        </label>

        <button className="bg-[#4F4F4F] text-white rounded-[8px] w-full h-[44px] mb-4">
          Log In
        </button>
        <button className="rounded-[8px] border border-[#4F4F4F] w-full h-[44px] bg-white">
          Go To Sign up
        </button>
      </div>
    </>
  );
}
