export default function Signin() {
  return (
    <>
      <div className="bg-white flex flex-col justify-center gap-[10px] rounded-[10px] border p-[20px] w-[375px]">
        <h1 className="text-2xl font-bold">Sign Into App</h1>
        <p className="text-[16px] not-only-of-type:text-gray">
          Please enter your details to continue.
        </p>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="text-[14px] border rounded-[10px] p-[16px]"
        />
        <input
          type="text"
          placeholder="someone@example.com"
          className="text-[14px] border rounded-[10px] p-[16px]"
        />
        <input
          type="password"
          placeholder="Enter PassWord"
          className="text-[14px] border rounded-[10px] p-[16px]"
        />
        <div className="flex gap-[8px] mb-5">
          <input id="check" type="checkbox" className="border w-[20px] h-[20px]" />
          <label htmlFor="check" className="text-[14px]">
            I agree with <strong>terms</strong> and <strong>policies</strong>
          </label>
        </div>
        <button className="w-full h-[50px] bg-gray-700 text-white text-[14px] rounded-[10px] border border-white">
          Sign In
        </button>
        <button className="w-full h-[50px] bg-white text-gray-700 text-[14px] rounded-[10px] border border-gray-500">
          Go To Log In
        </button>
      </div>
    </>
  );
}
