export default function Login() {
  return (
    <>
      <div className=" bg-white text-[#4f4f4f] p-8 rounded-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Login Into App</h1>
        <p className="text-[14px]">Please enter your details to continue</p>
        <input
          type="email"
          placeholder="someone@example.com"
          className="border border-[#4f4f4f] rounded-md p-3"
        />
        <input
          type="text"
          placeholder="Enter Password"
          className="border border-[#4f4f4f] rounded-md p-3"
        />
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>
            I agree with <b>terms</b> and <b>policies</b>
          </span>
        </label>
        <button className="border rounded-2xl cursor-pointer border=[#4f4f4f] p-2">
          Log In
        </button>
        <button className="border rounded-2xl cursor-pointer border=[#4f4f4f] p-2">
          Go to Sing up
        </button>
      </div>
    </>
  );
}
